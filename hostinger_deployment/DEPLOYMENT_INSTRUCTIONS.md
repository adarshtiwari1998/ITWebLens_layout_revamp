# ITWEBLENS - Hostinger Deployment Instructions

## 📁 File Structure for Upload

Your static website is ready for deployment! Here's how to upload it to your Hostinger hosting:

### Directory Structure:
```
public_html/
├── index.html (Home page)
├── about.html 
├── contact.html
├── portfolio.html
├── services.html
├── team.html
├── testimonials.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── theme.js
    │   ├── language.js
    │   └── portfolio.js
    ├── images/
    │   ├── logo-full.png
    │   ├── logo-small.png
    │   ├── team-adarsh.jpg
    │   ├── team-durgesh.jpg
    │   └── team-shubhra.jpg
    └── data/
        └── translations.js
```

## 🚀 Deployment Steps:

1. **Access your Hostinger cPanel**
   - Log into your Hostinger account
   - Go to File Manager

2. **Navigate to public_html**
   - Open the public_html folder
   - Delete any existing files (if this is a fresh install)

3. **Upload all files**
   - Upload ALL files from this deployment folder to your public_html directory
   - Make sure the folder structure matches exactly as shown above

4. **Set Permissions**
   - Set folder permissions to 755
   - Set file permissions to 644

## ✅ What Works:

- ✅ All pages (Home, About, Services, Portfolio, Team, Testimonials, Contact)
- ✅ Responsive design and animations
- ✅ Dark/Light theme switching
- ✅ Multi-language support (English, Japanese, Hindi)
- ✅ Calendly booking widget on contact page
- ✅ All static functionality

## ⚠️ Limitations (Due to Static Hosting):

- ❌ Contact form submissions (use Calendly instead)
- ❌ Newsletter subscriptions (backend required)
- ❌ Database functionality (no server-side processing)

## 🔧 Alternative Solutions:

1. **For Contact Forms**: Use Calendly (already integrated) or services like:
   - Netlify Forms
   - Formspree
   - Google Forms

2. **For Newsletter**: Use services like:
   - Mailchimp
   - ConvertKit
   - EmailJS

## 🌐 Your Website URL:
After deployment, your website will be available at:
- **Primary Domain**: yourdomain.com
- **Subdomain**: subdomain.yourdomain.com

## 📞 Support:
If you need help with deployment, contact your hosting provider support or refer to Hostinger's documentation.

---
**Generated on**: $(date)
**Status**: Ready for Production Deployment