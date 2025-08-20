# ITWEBLENS - Futuristic IT Services Platform

## Overview

ITWEBLENS is a modern IT services and web development agency platform built with Flask. The application serves as a corporate website showcasing services, portfolio, team information, and providing contact functionality. The platform targets clients across the US, UK, Japan, Australia, and India, offering comprehensive IT solutions including web development, React applications, e-commerce solutions, and IT consulting services.

The application features a futuristic design with glass morphism effects, multi-language support (English, Japanese, Hindi), dark/light theme switching, and responsive design optimized for global audiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask's render_template system
- **CSS Framework**: Bootstrap 5 with custom CSS implementing futuristic design patterns
- **JavaScript Architecture**: Vanilla JavaScript with modular components for theme switching, language management, and form handling
- **Design System**: Glass morphism effects, gradient-based color scheme, responsive grid system
- **Animation Library**: AOS (Animate On Scroll) for smooth page transitions and element reveals

### Backend Architecture
- **Web Framework**: Flask with SQLAlchemy ORM for database operations
- **Database**: SQLite (default) with PostgreSQL support via DATABASE_URL environment variable
- **Session Management**: Flask sessions with configurable secret key via SESSION_SECRET environment variable
- **Proxy Support**: ProxyFix middleware for proper header handling behind reverse proxies
- **Database Connection**: Connection pooling with 300-second recycle time and pre-ping enabled

### Data Storage Solutions
- **Primary Database**: SQLite for development, PostgreSQL for production
- **Models**: 
  - Contact model for storing customer inquiries (name, email, company, message, timestamp)
  - Newsletter model for email subscriptions with unique email constraints
- **Database Initialization**: Automatic table creation on application startup
- **Connection Pooling**: Configured for production environments with connection recycling

### Authentication and Authorization
- Currently implements basic session management without user authentication
- Session secret key configurable via environment variables
- No role-based access control implemented (public-facing corporate website)

## External Dependencies

### CSS/UI Frameworks
- **Bootstrap 5**: Primary CSS framework for responsive layout and components
- **Font Awesome 6.4.0**: Icon library for UI elements and service representations
- **AOS (Animate On Scroll)**: Animation library for scroll-triggered animations

### Fonts and Typography
- **Google Fonts**: Inter and Space Grotesk font families for modern typography
- **Custom CSS**: Futuristic design system with glass morphism and gradient effects

### Database
- **SQLite**: Default development database
- **PostgreSQL**: Production database support via DATABASE_URL environment variable
- **SQLAlchemy**: ORM for database operations with declarative base model

### Frontend Libraries
- **Vanilla JavaScript**: No heavy frontend frameworks, using modular JavaScript components
- **Translation System**: Custom multi-language support for English, Japanese, and Hindi
- **Theme System**: Dark/light mode switching with system preference detection

### Development Tools
- **Flask Development Server**: Built-in development server with debug mode
- **Environment Variables**: Configuration management for database URLs and session secrets
- **Static File Serving**: Flask's built-in static file handling for CSS, JS, and image assets

### Deployment Configuration
- **WSGI**: Production-ready with ProxyFix middleware
- **Port Configuration**: Configurable port binding (default 5000)
- **Host Binding**: Configured for 0.0.0.0 to accept external connections