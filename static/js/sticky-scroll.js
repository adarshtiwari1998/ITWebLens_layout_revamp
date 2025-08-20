/**
 * Sticky Scroll Services Showcase
 * Creates zoom-out effect as cards scroll past
 */

class StickyScrollShowcase {
    constructor() {
        this.showcaseSection = document.querySelector('.services-showcase');
        this.cards = document.querySelectorAll('.service-showcase-card');
        this.stickyContent = document.querySelector('.sticky-content');
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        if (!this.showcaseSection || this.cards.length === 0) return;
        
        this.setupIntersectionObserver();
        this.setupScrollListener();
        this.isInitialized = true;
        
        console.log('Sticky scroll showcase initialized');
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                const intersectionRatio = entry.intersectionRatio;
                
                if (intersectionRatio > 0.5) {
                    card.classList.add('active');
                    this.updateActiveCard(card);
                } else {
                    card.classList.remove('active');
                }
                
                // Apply zoom-out effect based on scroll position
                this.applyZoomEffect(card, intersectionRatio);
            });
        }, observerOptions);
        
        this.cards.forEach(card => observer.observe(card));
    }
    
    setupScrollListener() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateCardsOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    updateCardsOnScroll() {
        const showcaseRect = this.showcaseSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const showcaseProgress = Math.max(0, Math.min(1, 
            -showcaseRect.top / (showcaseRect.height - viewportHeight)
        ));
        
        this.cards.forEach((card, index) => {
            const cardProgress = (showcaseProgress * this.cards.length) - index;
            const clampedProgress = Math.max(0, Math.min(1, cardProgress));
            
            this.applyCardTransform(card, clampedProgress, index);
        });
    }
    
    applyCardTransform(card, progress, index) {
        // Zoom out effect as card passes
        const scale = 1 - (progress * 0.1);
        const translateY = progress * 50;
        const opacity = 1 - (progress * 0.3);
        
        // Active state when card is in focus
        const isActive = progress > 0.2 && progress < 0.8;
        
        card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        card.style.opacity = opacity;
        card.style.zIndex = 100 - index;
        
        if (isActive) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    }
    
    applyZoomEffect(card, intersectionRatio) {
        // Additional zoom effect based on intersection
        const zoomScale = 0.9 + (intersectionRatio * 0.1);
        const currentTransform = card.style.transform || '';
        
        if (!currentTransform.includes('scale')) {
            card.style.transform = `scale(${zoomScale})`;
        }
    }
    
    updateActiveCard(activeCard) {
        // Update sticky content based on active card
        const cardType = activeCard.getAttribute('data-service');
        this.updateStickyContent(cardType);
        
        // Add visual indicators
        this.cards.forEach(card => {
            card.classList.remove('current');
        });
        activeCard.classList.add('current');
    }
    
    updateStickyContent(serviceType) {
        // Could update the sticky content based on active service
        // For now, we'll just add a subtle animation
        if (this.stickyContent) {
            this.stickyContent.style.transform = 'translateX(0)';
            
            // Add a subtle pulse effect
            this.stickyContent.classList.add('pulse');
            setTimeout(() => {
                this.stickyContent.classList.remove('pulse');
            }, 600);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all styles are loaded
    setTimeout(() => {
        new StickyScrollShowcase();
    }, 100);
});

// Reinitialize on theme change
window.addEventListener('themeChanged', () => {
    setTimeout(() => {
        new StickyScrollShowcase();
    }, 100);
});

// Add pulse animation CSS
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    .sticky-content.pulse {
        animation: contentPulse 0.6s ease-out;
    }
    
    @keyframes contentPulse {
        0% { transform: translateX(0) scale(1); }
        50% { transform: translateX(-5px) scale(1.02); }
        100% { transform: translateX(0) scale(1); }
    }
    
    .service-showcase-card.current {
        box-shadow: 
            0 40px 120px rgba(0, 0, 0, 0.4),
            0 0 80px rgba(34, 197, 94, 0.2) !important;
    }
    
    .service-showcase-card {
        will-change: transform, opacity;
    }
`;
document.head.appendChild(pulseStyle);