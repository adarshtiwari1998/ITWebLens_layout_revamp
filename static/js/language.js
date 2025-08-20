// ITWEBLENS - Language Switcher functionality

class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = window.translations || {};
        this.languageSelect = document.getElementById('languageSelect');
        
        this.init();
    }
    
    init() {
        this.loadSavedLanguage();
        this.bindEvents();
        this.translatePage();
    }
    
    loadSavedLanguage() {
        const saved = localStorage.getItem('itweblens_language');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
            if (this.languageSelect) {
                this.languageSelect.value = saved;
            }
        }
    }
    
    bindEvents() {
        if (this.languageSelect) {
            this.languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }
    
    changeLanguage(langCode) {
        if (!this.translations[langCode]) {
            console.warn(`Language '${langCode}' not found`);
            return;
        }
        
        this.currentLanguage = langCode;
        localStorage.setItem('itweblens_language', langCode);
        
        this.translatePage();
        this.updatePageDirection();
        this.showLanguageChangeNotification();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        const lang = this.translations[this.currentLanguage];
        
        if (!lang) return;
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getNestedTranslation(lang, key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getNestedTranslation(lang, key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Update page title
        if (lang.page_titles && lang.page_titles[this.getCurrentPageKey()]) {
            document.title = lang.page_titles[this.getCurrentPageKey()];
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && lang.meta && lang.meta.description) {
            metaDesc.setAttribute('content', lang.meta.description);
        }
    }
    
    getNestedTranslation(obj, key) {
        return key.split('.').reduce((o, k) => (o || {})[k], obj);
    }
    
    getCurrentPageKey() {
        const path = window.location.pathname;
        if (path === '/') return 'home';
        return path.substring(1); // Remove leading slash
    }
    
    updatePageDirection() {
        // Set text direction for RTL languages if needed
        const rtlLanguages = ['ar', 'he', 'fa'];
        const html = document.documentElement;
        
        if (rtlLanguages.includes(this.currentLanguage)) {
            html.setAttribute('dir', 'rtl');
        } else {
            html.setAttribute('dir', 'ltr');
        }
    }
    
    showLanguageChangeNotification() {
        const messages = {
            'en': 'Language changed to English',
            'ja': '言語を日本語に変更しました',
            'hi': 'भाषा हिंदी में बदल दी गई'
        };
        
        const message = messages[this.currentLanguage] || 'Language changed';
        this.showNotification(message);
    }
    
    showNotification(message) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.language-notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 1rem 2rem;
            background: var(--primary-blue);
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
            font-size: 0.9rem;
            min-width: 200px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Get translation by key
    getTranslation(key) {
        const lang = this.translations[this.currentLanguage];
        return this.getNestedTranslation(lang, key) || key;
    }
    
    // Format numbers according to language locale
    formatNumber(number) {
        const locales = {
            'en': 'en-US',
            'ja': 'ja-JP',
            'hi': 'hi-IN'
        };
        
        const locale = locales[this.currentLanguage] || 'en-US';
        return new Intl.NumberFormat(locale).format(number);
    }
    
    // Format dates according to language locale
    formatDate(date) {
        const locales = {
            'en': 'en-US',
            'ja': 'ja-JP',
            'hi': 'hi-IN'
        };
        
        const locale = locales[this.currentLanguage] || 'en-US';
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }
}

// Auto-detect browser language on first visit
function detectBrowserLanguage() {
    const saved = localStorage.getItem('itweblens_language');
    if (saved) return saved;
    
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    // Map browser languages to supported languages
    const supportedLanguages = {
        'en': 'en',
        'ja': 'ja',
        'hi': 'hi',
        'zh': 'en', // Fallback to English
        'es': 'en', // Fallback to English
        'fr': 'en', // Fallback to English
        'de': 'en', // Fallback to English
        'ko': 'en', // Fallback to English
    };
    
    return supportedLanguages[langCode] || 'en';
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for translations to load
    if (window.translations) {
        window.languageManager = new LanguageManager();
    } else {
        // Wait for translations script to load
        const checkTranslations = setInterval(() => {
            if (window.translations) {
                window.languageManager = new LanguageManager();
                clearInterval(checkTranslations);
            }
        }, 100);
    }
});

// Utility functions for external use
window.LanguageUtils = {
    getCurrentLanguage: () => window.languageManager?.getCurrentLanguage() || 'en',
    getTranslation: (key) => window.languageManager?.getTranslation(key) || key,
    formatNumber: (number) => window.languageManager?.formatNumber(number) || number,
    formatDate: (date) => window.languageManager?.formatDate(date) || date,
    changeLanguage: (langCode) => window.languageManager?.changeLanguage(langCode)
};

// Handle dynamic content translation
function translateDynamicContent(element) {
    if (!window.languageManager) return;
    
    const translateElements = element.querySelectorAll('[data-translate]');
    const lang = window.translations[window.languageManager.getCurrentLanguage()];
    
    if (!lang) return;
    
    translateElements.forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = window.languageManager.getNestedTranslation(lang, key);
        
        if (translation) {
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email')) {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

// Export for use in other scripts
window.translateDynamicContent = translateDynamicContent;

// Language-specific CSS adjustments
function applyLanguageStyles() {
    const currentLang = window.LanguageUtils.getCurrentLanguage();
    const body = document.body;
    
    // Remove existing language classes
    body.classList.remove('lang-en', 'lang-ja', 'lang-hi');
    
    // Add current language class
    body.classList.add(`lang-${currentLang}`);
    
    // Apply language-specific font adjustments
    const style = document.getElementById('language-styles') || document.createElement('style');
    style.id = 'language-styles';
    
    let css = '';
    
    switch (currentLang) {
        case 'ja':
            css = `
                body.lang-ja {
                    font-family: 'Noto Sans JP', 'Inter', sans-serif;
                    letter-spacing: 0.02em;
                }
                body.lang-ja .hero-title {
                    line-height: 1.3;
                }
            `;
            break;
        case 'hi':
            css = `
                body.lang-hi {
                    font-family: 'Noto Sans Devanagari', 'Inter', sans-serif;
                }
                body.lang-hi .hero-title {
                    line-height: 1.4;
                }
            `;
            break;
        default:
            css = `
                body.lang-en {
                    font-family: 'Inter', sans-serif;
                }
            `;
    }
    
    style.textContent = css;
    document.head.appendChild(style);
}

// Listen for language changes
document.addEventListener('languageChanged', applyLanguageStyles);

// Initialize language styles
document.addEventListener('DOMContentLoaded', applyLanguageStyles);
