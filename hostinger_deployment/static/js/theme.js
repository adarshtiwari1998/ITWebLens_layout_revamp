// ITWEBLENS - Theme Switcher functionality

class ThemeManager {
    constructor() {
        this.currentTheme = 'dark'; // Default to dark theme
        this.themeToggle = document.getElementById('themeToggle');
        this.systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        
        this.init();
    }
    
    init() {
        this.loadSavedTheme();
        this.bindEvents();
        this.updateThemeIcon();
        this.applyTheme();
    }
    
    loadSavedTheme() {
        const saved = localStorage.getItem('itweblens_theme');
        if (saved) {
            this.currentTheme = saved;
        } else {
            // Use system preference as default
            this.currentTheme = this.systemPreference.matches ? 'dark' : 'light';
        }
    }
    
    bindEvents() {
        // Theme toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Keyboard shortcut (Ctrl/Cmd + Shift + D)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyD') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
        
        // Listen for system theme changes
        this.systemPreference.addEventListener('change', (e) => {
            if (!localStorage.getItem('itweblens_theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme();
                this.updateThemeIcon();
            }
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.saveTheme();
        this.applyTheme();
        this.updateThemeIcon();
        this.showThemeChangeAnimation();
        this.dispatchThemeChangeEvent();
    }
    
    applyTheme() {
        const html = document.documentElement;
        html.setAttribute('data-theme', this.currentTheme);
        
        // Update theme color meta tag for mobile browsers
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        const colors = {
            light: '#ffffff',
            dark: '#0f0f0f'
        };
        
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', colors[this.currentTheme]);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'theme-color';
            meta.content = colors[this.currentTheme];
            document.head.appendChild(meta);
        }
        
        // Apply theme-specific styles
        this.applyThemeStyles();
    }
    
    applyThemeStyles() {
        const style = document.getElementById('theme-styles') || document.createElement('style');
        style.id = 'theme-styles';
        
        const themeStyles = {
            light: `
                [data-theme="light"] {
                    --primary-bg: #ffffff;
                    --secondary-bg: #f8f9fa;
                    --tertiary-bg: #e9ecef;
                    --text-primary: #1a1a1a;
                    --text-secondary: #666666;
                    --text-muted: #999999;
                    --glass-bg: rgba(255, 255, 255, 0.8);
                    --glass-border: rgba(255, 255, 255, 0.9);
                    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
                    --card-bg: rgba(255, 255, 255, 0.9);
                    --nav-bg: rgba(255, 255, 255, 0.95);
                    --footer-bg: #f8f9fa;
                }
                
                [data-theme="light"] .futuristic-nav {
                    background: rgba(255, 255, 255, 0.95);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                
                [data-theme="light"] .hero-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                }
                
                [data-theme="light"] .page-hero {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                }
                
                [data-theme="light"] .futuristic-footer {
                    background: var(--footer-bg);
                }
                
                [data-theme="light"] .cta-section {
                    background: var(--gradient-primary);
                }
            `,
            dark: `
                [data-theme="dark"] {
                    --primary-bg: #0f0f0f;
                    --secondary-bg: #1a1a1a;
                    --tertiary-bg: #2c2c2c;
                    --text-primary: #ffffff;
                    --text-secondary: #b3b3b3;
                    --text-muted: #666666;
                    --glass-bg: rgba(255, 255, 255, 0.05);
                    --glass-border: rgba(255, 255, 255, 0.1);
                    --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
                    --card-bg: rgba(255, 255, 255, 0.05);
                    --nav-bg: rgba(15, 15, 15, 0.95);
                    --footer-bg: #0f0f0f;
                }
                
                [data-theme="dark"] .futuristic-nav {
                    background: rgba(15, 15, 15, 0.95);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                [data-theme="dark"] .hero-section {
                    background: var(--gradient-dark);
                }
                
                [data-theme="dark"] .page-hero {
                    background: var(--gradient-dark);
                }
                
                [data-theme="dark"] .futuristic-footer {
                    background: var(--gradient-dark);
                }
            `
        };
        
        style.textContent = themeStyles[this.currentTheme];
        document.head.appendChild(style);
    }
    
    updateThemeIcon() {
        if (!this.themeToggle) return;
        
        const icon = this.themeToggle.querySelector('i');
        if (!icon) return;
        
        const icons = {
            light: 'fas fa-moon',
            dark: 'fas fa-sun'
        };
        
        icon.className = icons[this.currentTheme];
        
        // Update aria-label for accessibility
        this.themeToggle.setAttribute('aria-label', 
            `Switch to ${this.currentTheme === 'light' ? 'dark' : 'light'} theme`
        );
    }
    
    saveTheme() {
        localStorage.setItem('itweblens_theme', this.currentTheme);
    }
    
    showThemeChangeAnimation() {
        // Create ripple effect from theme toggle button
        if (!this.themeToggle) return;
        
        const rect = this.themeToggle.getBoundingClientRect();
        const ripple = document.createElement('div');
        
        ripple.style.cssText = `
            position: fixed;
            top: ${rect.top + rect.height / 2}px;
            left: ${rect.left + rect.width / 2}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: ${this.currentTheme === 'dark' ? '#0f0f0f' : '#ffffff'};
            opacity: 0.8;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.6s ease;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(ripple);
        
        // Trigger animation
        requestAnimationFrame(() => {
            const maxDimension = Math.max(window.innerWidth, window.innerHeight);
            ripple.style.width = `${maxDimension * 2}px`;
            ripple.style.height = `${maxDimension * 2}px`;
            ripple.style.opacity = '0';
        });
        
        // Clean up
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Show notification
        this.showThemeChangeNotification();
    }
    
    showThemeChangeNotification() {
        const messages = {
            light: '☀️ Light theme activated',
            dark: '🌙 Dark theme activated'
        };
        
        this.showNotification(messages[this.currentTheme]);
    }
    
    showNotification(message) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.theme-notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%) translateY(-100%);
            padding: 0.75rem 1.5rem;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            color: var(--text-primary);
            border-radius: 25px;
            box-shadow: var(--glass-shadow);
            z-index: 10002;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-size: 0.9rem;
            font-weight: 500;
            white-space: nowrap;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(-50%) translateY(0)';
        }, 100);
        
        // Remove after 2 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(-50%) translateY(-100%)';
            setTimeout(() => notification.remove(), 400);
        }, 2000);
    }
    
    dispatchThemeChangeEvent() {
        const event = new CustomEvent('themeChanged', {
            detail: {
                theme: this.currentTheme,
                previousTheme: this.currentTheme === 'light' ? 'dark' : 'light'
            }
        });
        document.dispatchEvent(event);
    }
    
    // Public methods
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn('Invalid theme. Use "light" or "dark"');
            return;
        }
        
        this.currentTheme = theme;
        this.saveTheme();
        this.applyTheme();
        this.updateThemeIcon();
        this.dispatchThemeChangeEvent();
    }
    
    getSystemPreference() {
        return this.systemPreference.matches ? 'dark' : 'light';
    }
}

// Auto-apply theme based on time of day (optional enhancement)
function getTimeBasedTheme() {
    const hour = new Date().getHours();
    // Dark theme from 6 PM to 6 AM
    return (hour >= 18 || hour < 6) ? 'dark' : 'light';
}

// Initialize theme manager
document.addEventListener('DOMContentLoaded', function() {
    window.themeManager = new ThemeManager();
    
    // Add theme transition class to body for smooth transitions
    document.body.classList.add('theme-transition');
    
    // Optional: Auto-switch based on time if no preference is saved
    const hasThemePreference = localStorage.getItem('itweblens_theme');
    if (!hasThemePreference) {
        const timeBasedTheme = getTimeBasedTheme();
        if (timeBasedTheme !== window.themeManager.getCurrentTheme()) {
            window.themeManager.setTheme(timeBasedTheme);
        }
    }
});

// Utility functions for external use
window.ThemeUtils = {
    getCurrentTheme: () => window.themeManager?.getCurrentTheme() || 'dark',
    setTheme: (theme) => window.themeManager?.setTheme(theme),
    toggleTheme: () => window.themeManager?.toggleTheme(),
    getSystemPreference: () => window.themeManager?.getSystemPreference() || 'light'
};

// Handle theme changes for external components
document.addEventListener('themeChanged', function(e) {
    // Update any external components that need theme updates
    console.log(`Theme changed from ${e.detail.previousTheme} to ${e.detail.theme}`);
    
    // Example: Update chart colors, map themes, etc.
    updateExternalComponentThemes(e.detail.theme);
});

function updateExternalComponentThemes(theme) {
    // Update any third-party components that need manual theme updates
    // This function can be extended as needed
    
    // Example: Update chart.js theme
    if (window.Chart) {
        Chart.defaults.color = theme === 'dark' ? '#ffffff' : '#1a1a1a';
    }
    
    // Example: Update map themes
    if (window.map) {
        // Update map theme
    }
}

// Add CSS for smooth theme transitions
const transitionStyle = document.createElement('style');
transitionStyle.textContent = `
    .theme-transition {
        transition: background-color 0.3s ease, color 0.3s ease !important;
    }
    
    .theme-transition *,
    .theme-transition *:before,
    .theme-transition *:after {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
        transition-delay: 0s !important;
    }
`;
document.head.appendChild(transitionStyle);

// Prevent flash of unstyled content (FOUC)
document.addEventListener('DOMContentLoaded', function() {
    // Remove any FOUC prevention classes
    document.body.classList.remove('no-js');
    
    // Add loaded class for any CSS that depends on JS being loaded
    document.body.classList.add('js-loaded');
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const style = document.createElement('style');
    style.textContent = `
        .theme-transition,
        .theme-transition *,
        .theme-transition *:before,
        .theme-transition *:after {
            transition: none !important;
            animation: none !important;
        }
    `;
    document.head.appendChild(style);
}
