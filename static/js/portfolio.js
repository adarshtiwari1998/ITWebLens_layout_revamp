// Project data
const projects = [
    // Personal Projects - Featured First
    {
        title: "CORNIFOOD",
        description: "A comprehensive healthy meal delivery platform featuring modern single-page architecture, interactive food ordering system, and responsive design optimized for all devices.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/cronifood-logo.png?updatedAt=1753624342631",
        url: "https://adarsh-tripathi-cornifood-project.netlify.app/",
        category: "personal",
        subCategory: "food",
        technologies: ["JavaScript", "HTML5", "CSS3", "HTML Template", "CSS Grid", "CSS Grid Layout", "CSS Flexbox", "CSS Flexbox Layout"],
        status: "Active",
        duration: "7 days",
        client: "Personal Project",
        lastUpdated: "Nov 16, 2022",
        maintenanceMode: "Active",
        projectType: "FOOD",
        developmentPhase: "Paused",
        detailedDescription: "CORNIFOOD is a comprehensive healthy meal delivery website designed with a focus on user experience and modern web technologies. This single-page application showcases a clean, responsive design that adapts seamlessly across all devices. The project demonstrates advanced CSS layout techniques including CSS Grid for complex layouts and Flexbox for component alignment. Built entirely with vanilla JavaScript, HTML5, and CSS3, the website features an interactive food ordering system that allows users to browse meal categories, view detailed nutrition information, and customize their orders. The platform includes sections for featured meals, customer testimonials, nutritional guidance, and a streamlined checkout process."
    },
    {
        title: "Blockchain Data",
        description: "Advanced data intelligence platform featuring multi-page architecture with comprehensive blockchain analytics, cryptocurrency insights, and interactive data visualizations.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/blockchain-data-logo.png?updatedAt=1753627652888",
        url: "https://psd-to-html-blockchaindata-adarsh.netlify.app/",
        category: "personal",
        subCategory: "psd-to-html",
        technologies: ["PSD TO HTML", "CSS3", "HTML Template", "CSS Grid", "CSS Grid Layout", "CSS Flexbox", "CSS Flexbox Layout"],
        status: "Active",
        duration: "12 days",
        client: "Personal Project",
        lastUpdated: "Aug 4, 2021",
        maintenanceMode: "Active",
        projectType: "PSD TO HTML",
        developmentPhase: "Paused",
        detailedDescription: "Blockchain Data is a comprehensive data intelligence website featuring a multi-page layout designed to showcase blockchain analytics and cryptocurrency data insights. This project involved converting detailed PSD designs into fully functional HTML, CSS, and JavaScript code with pixel-perfect accuracy. The website demonstrates advanced front-end development skills including responsive design implementation using CSS Grid for complex data layouts and CSS Flexbox for component alignment."
    },
    {
        title: "Enterium Data",
        description: "Efficient energy management platform featuring streamlined 3-4 page architecture with optimized performance, clean design patterns, and responsive layout implementation.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/etherium-data-logo.png?updatedAt=1753629382809",
        url: "https://psd-to-html-enteriumdata-adarsh.netlify.app/",
        category: "personal",
        subCategory: "psd-to-html",
        technologies: ["PSD TO HTML", "CSS3", "HTML Template", "CSS Grid", "CSS Grid Layout", "CSS Flexbox", "CSS Flexbox Layout"],
        status: "Active",
        duration: "4 days",
        client: "Personal Project",
        lastUpdated: "Aug 3, 2021",
        maintenanceMode: "Active",
        projectType: "PSD TO HTML",
        developmentPhase: "Paused",
        detailedDescription: "Enterium Data is an energy-efficient web platform designed with minimal resource consumption in mind, featuring a streamlined 3-4 page layout that prioritizes performance and user experience. This project demonstrates expertise in PSD to HTML conversion with a focus on optimization and clean code architecture."
    },
    {
        title: "ITWEB",
        description: "Professional IT services landing page featuring comprehensive service offerings, modern design patterns, and responsive architecture for technology consulting and digital solutions.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/ITWEB-LOGO.png?updatedAt=1753632839034",
        url: "https://adarsh-tripathi-itweb-services-project.netlify.app/",
        category: "personal",
        subCategory: "services",
        technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Single Page Application"],
        status: "Active",
        duration: "5 days",
        client: "Personal Project",
        lastUpdated: "Jul 27, 2025",
        maintenanceMode: "Active",
        projectType: "Services",
        developmentPhase: "Paused",
        detailedDescription: "ITWEB is a comprehensive IT services landing page designed to showcase professional technology consulting and digital solutions. This single-page application features a modern, clean design with multiple strategically organized sections including service offerings, company overview, team profiles, client testimonials, and contact information."
    },
    {
        title: "Slack Web App",
        description: "Real-time web chat application featuring group creation, instant messaging, user authentication, and collaborative communication tools built with modern React ecosystem and Firebase backend services.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/slack-web-app-logo.png?updatedAt=1753637517624",
        url: "https://slack-web-chat-app.web.app",
        category: "personal",
        subCategory: "clone",
        technologies: ["React", "Redux", "Material-UI", "Firebase", "Firestore Database", "React Router", "Google Authentication"],
        status: "Active",
        duration: "4 days",
        client: "Personal Project",
        lastUpdated: "Oct 8, 2020",
        maintenanceMode: "Active",
        projectType: "Clone",
        developmentPhase: "Paused",
        detailedDescription: "Slack Web App is a comprehensive real-time chat application that replicates the core functionality of Slack, built using modern React technologies and Firebase backend services. This web application features complete user authentication through Google OAuth, allowing users to create and join chat groups, send instant messages, and collaborate in real-time."
    },
    {
        title: "Covid-19 Tracker",
        description: "Comprehensive COVID-19 statistics dashboard featuring interactive maps, real-time data visualization, country-wise analytics, and responsive charts built with React.js and live API integration.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/covid-19-tracker-logo.png?updatedAt=1753637517624",
        url: "https://covid-19-tracker-app.web.app",
        category: "personal",
        subCategory: "clone",
        technologies: ["React", "Chart.js", "API Integration", "Maps", "Responsive Design", "Data Visualization", "Tables", "Wireframe"],
        status: "Active",
        duration: "8 days",
        client: "Personal Project",
        lastUpdated: "Oct 8, 2020",
        maintenanceMode: "Active",
        projectType: "Clone",
        developmentPhase: "Paused",
        detailedDescription: "Covid-19 Tracker is a comprehensive web application that provides real-time COVID-19 statistics and data visualization across multiple countries and regions. This React-based dashboard features interactive maps for geographical data representation, dynamic charts using Chart.js for trend analysis, and detailed tables for country-wise statistics comparison."
    },
    {
        title: "GK Quizz App",
        description: "A webapp where you can enhance your knowledge and G.K skills by playing quiz card game in different category and subject with features real-time API integration, Axios for smooth data flow, and Flexbox-based design.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/slack-web-app-logo.png?updatedAt=1753637517624",
        url: "https://quiz-app-9765c.web.app",
        category: "personal",
        subCategory: "clone",
        technologies: ["React", "API Integration", "Responsive Design", "Axios", "Flexbox", "CSS", "Components", "HTML"],
        status: "Active",
        duration: "6 days",
        client: "Personal Project",
        lastUpdated: "Oct 8, 2020",
        maintenanceMode: "Active",
        projectType: "Clone",
        developmentPhase: "Paused",
        detailedDescription: "This interactive quiz card web app is designed to enhance general knowledge through category-based challenges. Built using React, it delivers a dynamic user experience with real-time API integration, fetching diverse questions across subjects. Axios handles all asynchronous data transactions efficiently, ensuring smooth gameplay."
    },

    // Web Development Projects - Corporate & Business
    {
        title: "NIDDIKKARE",
        description: "Healthcare and Life Sciences Solutions website providing comprehensive medical and pharmaceutical services.",
        image: "https://niddikkare.com/assets/niddikkare-logo-BPeb58AZ.png",
        url: "https://niddikkare.com/",
        category: "corporate",
        technologies: ["ReactJS", "Vite", "NodeJS", "ImageKit", "SSR", "SEO"],
        status: "Active",
        duration: "12 Days",
        client: "NIDDIKARE",
        lastUpdated: "July 25th, 2025",
        maintenanceMode: "Active",
        projectType: "Healthcare",
        isNew: true,
        detailedDescription: "Healthcare and Life Sciences Solutions website built with modern web technologies. This comprehensive platform provides medical and pharmaceutical services with a focus on user experience and performance. The website features server-side rendering for optimal SEO performance and uses ImageKit for efficient image delivery. Technologies used: ReactJS for dynamic user interfaces, Vite for fast development and building, NodeJS for backend services, ImageKit for image optimization and delivery, Server-Side Rendering (SSR) for better search engine visibility, and comprehensive SEO implementation for improved online presence."
    },
    {
        title: "Niddik IT (Recruiting & Job Portal)",
        description: "Comprehensive Full Stack job recruiting platform featuring candidate dashboard, admin panel, and complete recruitment management system with real-time notifications.",
        image: "https://niddik.com/images/niddik_logo.png",
        url: "https://niddik.com/",
        category: "corporate",
        technologies: ["Full Stack", "Backend Developer", "Web Development", "UI/UX Design"],
        status: "Active",
        duration: "1 Month",
        client: "Niddik",
        lastUpdated: "July 25th, 2025",
        maintenanceMode: "Active",
        projectType: "Full Stack",
        isNew: true,
        detailedDescription: "Comprehensive Full Stack job recruiting platform built with modern technologies. This 35+ page website includes a complete recruitment ecosystem with advanced features. The Admin Dashboard provides comprehensive control over job postings, candidate management, company profiles, application tracking, and real-time analytics.",
        adminLink: "https://niddik.com/admin",
        candidateDashboardLink: "https://niddik.com/candidate/dashboard"
    },
    {
        title: "DoubleR Bags Corporate",
        description: "Corporate website for a premium bag brand showcasing company information and brand story.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/logo-dark.png?updatedAt=1753605568303",
        url: "https://www.doublerbags.com/",
        category: "corporate",
        technologies: ["Corporate Design", "Brand Website", "UI/UX"],
        status: "Active",
        duration: "2 Weeks",
        client: "DoubleR Bags",
        lastUpdated: "June 15th, 2025",
        maintenanceMode: "Active",
        projectType: "Corporate",
        detailedDescription: "Corporate website for DoubleR Bags, a premium bag manufacturing company. The website showcases the company's brand story, product categories, manufacturing capabilities, and corporate information with a focus on professional presentation and brand credibility."
    },
    {
        title: "DoubleR Bags E-commerce",
        description: "E-commerce platform for premium bag brand with complete online shopping experience and inventory management.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Double_R_Bags_Logo_400_775d1985-ec85-426a-b3ca-8248650ff06b.png_v=1630583579&width=300?updatedAt=1753605662489",
        url: "https://www.doublerbags.in/",
        category: "ecommerce",
        technologies: ["Shopify", "E-commerce", "Liquid", "Payment Gateway"],
        status: "Active",
        duration: "3 Weeks",
        client: "DoubleR Bags",
        lastUpdated: "July 10th, 2025",
        maintenanceMode: "Active",
        projectType: "E-commerce",
        detailedDescription: "Complete e-commerce platform for DoubleR Bags featuring product catalog, shopping cart, secure payment processing, order management, and customer account functionality. Built on Shopify with custom Liquid templates for optimal performance and user experience."
    },
    {
        title: "Shop Rangoli",
        description: "E-commerce platform for traditional Indian products with custom Shopify theme and cultural design elements.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Rangoli-New-logo-300x200_130x@2x.jpg_v=1708586827?updatedAt=1753605371260",
        url: "https://shoprangoli.in/",
        category: "ecommerce",
        technologies: ["Shopify", "E-commerce", "Custom Theme", "Cultural Design"],
        status: "Active",
        duration: "2 Weeks",
        client: "Rangoli",
        lastUpdated: "May 20th, 2025",
        maintenanceMode: "Active",
        projectType: "E-commerce",
        detailedDescription: "E-commerce platform specializing in traditional Indian products including rangoli designs, cultural artifacts, and handcrafted items. Features custom Shopify theme with culturally appropriate design elements and optimized product categorization for traditional Indian market."
    },
    {
        title: "Vingajoy Corporate",
        description: "Corporate website for consumer electronics brand with modern design and product showcase functionality.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Vingajoy_Logo_1_220x@2x.png_v=1639384691?updatedAt=1753606406266",
        url: "https://vingajoy.com/",
        category: "corporate",
        technologies: ["Corporate Design", "Product Showcase", "CMS", "Frontend"],
        status: "Active",
        duration: "2 Weeks",
        client: "Vingajoy",
        lastUpdated: "April 15th, 2025",
        maintenanceMode: "Active",
        projectType: "Corporate",
        detailedDescription: "Corporate website for Vingajoy, a consumer electronics brand, featuring product showcases, company information, dealer networks, and customer support. The website emphasizes modern design principles with focus on product visualization and brand presentation."
    }
];

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
    initModal();
});

function initPortfolio() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioContainer = document.getElementById('portfolioContainer');
    
    if (!portfolioContainer) return;
    
    // Render all projects initially
    renderProjects('all');
    
    // Add click listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter and render projects
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

function renderProjects(filter) {
    const portfolioContainer = document.getElementById('portfolioContainer');
    if (!portfolioContainer) return;
    
    // Filter projects
    let filteredProjects = projects;
    if (filter === 'personal') {
        filteredProjects = projects.filter(project => project.category === 'personal');
    } else if (filter === 'web') {
        filteredProjects = projects.filter(project => 
            project.category === 'corporate' || project.category === 'ecommerce'
        );
    }
    
    // Clear existing content
    portfolioContainer.innerHTML = '';
    
    // Render filtered projects
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        portfolioContainer.appendChild(projectCard);
    });
    
    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function createProjectCard(project, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', (index * 100).toString());
    
    const newBadge = project.isNew ? '<div class="project-badge new-badge">NEW</div>' : '';
    const statusBadge = `<div class="project-badge status-badge ${project.status.toLowerCase()}">${project.status.toUpperCase()}</div>`;
    
    col.innerHTML = `
        <div class="project-card">
            ${newBadge}
            ${statusBadge}
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4='">
                <div class="project-overlay">
                    <div class="project-actions">
                        <button class="btn-action learn-more-btn" data-project-index="${projects.indexOf(project)}">
                            <i class="fas fa-info-circle"></i>
                            Learn More
                        </button>
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-action view-project-btn">
                            <i class="fas fa-external-link-alt"></i>
                            View Project
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h5 class="project-title">${project.title}</h5>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.technologies.length > 4 ? `<span class="tech-tag more">+${project.technologies.length - 4}</span>` : ''}
                </div>
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="meta-label">Client:</span>
                        <span class="meta-value">${project.client}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Duration:</span>
                        <span class="meta-value">${project.duration}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Last Update:</span>
                        <span class="meta-value">${project.lastUpdated}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Maintenance:</span>
                        <span class="meta-value status-${project.maintenanceMode.toLowerCase()}">${project.maintenanceMode.toUpperCase()}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Project Type:</span>
                        <span class="meta-value">${project.projectType}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

function initModal() {
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content project-modal">
                    <div class="modal-header">
                        <h5 class="modal-title" id="projectModalLabel">Project Description</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="modalContent">
                            <!-- Content will be dynamically inserted here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Append modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for Learn More buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('learn-more-btn') || e.target.closest('.learn-more-btn')) {
            const button = e.target.classList.contains('learn-more-btn') ? e.target : e.target.closest('.learn-more-btn');
            const projectIndex = parseInt(button.getAttribute('data-project-index'));
            const project = projects[projectIndex];
            
            if (project) {
                showProjectModal(project);
            }
        }
    });
}

function showProjectModal(project) {
    const modalContent = document.getElementById('modalContent');
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    
    modalContent.innerHTML = `
        <div class="project-modal-content">
            <div class="row">
                <div class="col-md-5">
                    <div class="modal-project-image">
                        <img src="${project.image}" alt="${project.title}" class="img-fluid" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4='">
                    </div>
                    <div class="modal-project-info">
                        <h4>${project.title}</h4>
                        <div class="status-badge ${project.status.toLowerCase()}">${project.status.toUpperCase()}</div>
                        
                        <div class="info-grid">
                            <div class="info-item">
                                <strong>Duration:</strong> ${project.duration}
                            </div>
                            <div class="info-item">
                                <strong>Client:</strong> ${project.client}
                            </div>
                            <div class="info-item">
                                <strong>Maintenance:</strong> 
                                <span class="status-badge ${project.maintenanceMode.toLowerCase()}">${project.maintenanceMode.toUpperCase()}</span>
                            </div>
                            <div class="info-item">
                                <strong>Project Type:</strong> ${project.projectType}
                            </div>
                        </div>
                        
                        <div class="modal-technologies">
                            <h6>Technologies:</h6>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-view-project">
                            <i class="fas fa-external-link-alt"></i>
                            View Project
                        </a>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="modal-description">
                        <h6>Project Description</h6>
                        <p>${project.detailedDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.show();
}