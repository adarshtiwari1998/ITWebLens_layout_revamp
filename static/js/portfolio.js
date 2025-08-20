// Portfolio data from ITWEBLENS projects
const portfolioProjects = [
    // IT Services Projects
    {
        title: "NIDDIKKARE Healthcare Platform",
        description: "Healthcare and Life Sciences Solutions website providing comprehensive medical and pharmaceutical services.",
        image: "https://niddikkare.com/assets/niddikkare-logo-BPeb58AZ.png",
        url: "https://niddikkare.com/",
        category: "it-services",
        technologies: ["ReactJS", "Vite", "NodeJS", "SSR", "SEO"],
        status: "Active",
        client: "NIDDIKARE",
        isNew: true
    },
    {
        title: "Niddik IT - Job Portal",
        description: "Full Stack job recruiting platform featuring candidate dashboard, admin panel, and complete recruitment management system.",
        image: "https://niddik.com/images/niddik_logo.png",
        url: "https://niddik.com/",
        category: "it-services", 
        technologies: ["Full Stack", "React", "Node.js", "PostgreSQL"],
        status: "Active",
        client: "Niddik",
        isNew: true
    },
    {
        title: "Enterprise Cloud Migration",
        description: "Complete Azure cloud infrastructure setup with Citrix virtualization for multinational corporation",
        image: "fas fa-cloud",
        url: "#",
        category: "it-services",
        technologies: ["Azure", "Citrix", "VMware", "Enterprise"],
        status: "Active",
        client: "Enterprise Corp"
    },
    
    // Web Development Projects
    {
        title: "DoubleR Bags E-commerce",
        description: "E-commerce platform for premium bag brand with complete online shopping experience.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Double_R_Bags_Logo_400_775d1985-ec85-426a-b3ca-8248650ff06b.png_v=1630583579&width=300?updatedAt=1753605662489",
        url: "https://www.doublerbags.in/",
        category: "web-development",
        technologies: ["Shopify", "E-commerce", "Liquid"],
        status: "Active",
        client: "DoubleR"
    },
    {
        title: "Shop Rangoli",
        description: "E-commerce platform for traditional Indian products with custom Shopify theme.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Rangoli-New-logo-300x200_130x@2x.jpg_v=1708586827?updatedAt=1753605371260",
        url: "https://shoprangoli.in/",
        category: "web-development",
        technologies: ["Shopify", "E-commerce", "Custom Theme"],
        status: "Active",
        client: "Rangoli"
    },
    {
        title: "Vingajoy Corporate",
        description: "Corporate website for consumer electronics brand with modern design.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/Vingajoy_Logo_1_220x@2x.png_v=1639384691?updatedAt=1753606406266",
        url: "https://vingajoy.com/",
        category: "web-development",
        technologies: ["Corporate", "CMS", "Frontend"],
        status: "Active",
        client: "Vingajoy"
    },
    
    // Personal Projects
    {
        title: "CORNIFOOD",
        description: "Comprehensive healthy meal delivery platform featuring modern single-page architecture and responsive design.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/cronifood-logo.png?updatedAt=1753624342631",
        url: "https://adarsh-tripathi-cornifood-project.netlify.app/",
        category: "personal-projects",
        technologies: ["JavaScript", "HTML5", "CSS3", "Responsive"],
        status: "Active",
        client: "Personal Project"
    },
    {
        title: "Slack Web App Clone",
        description: "Real-time web chat application featuring group creation, instant messaging, and collaborative communication tools.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/slack-web-app-logo.png?updatedAt=1753637517624",
        url: "https://slack-web-chat-app.web.app",
        category: "personal-projects",
        technologies: ["React", "Redux", "Firebase", "Material-UI"],
        status: "Active",
        client: "Personal Project"
    },
    {
        title: "COVID-19 Tracker",
        description: "Comprehensive COVID-19 statistics dashboard with interactive maps and real-time data visualization.",
        image: "https://ik.imagekit.io/YTVideoAutomation/itweblens-portfolio-projects-assets/covid-19-tracker-logo.png?updatedAt=1753637517624",
        url: "https://covid-19-tracker-app.web.app",
        category: "personal-projects",
        technologies: ["React", "Chart.js", "API Integration", "Maps"],
        status: "Active",
        client: "Personal Project"
    }
];

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
});

function initPortfolio() {
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioContent = document.querySelector('.portfolio-content');
    
    if (!portfolioContent) return;
    
    // Set initial active category
    let activeCategory = 'it-services';
    
    // Render initial projects
    renderProjects(activeCategory);
    
    // Add click listeners to tabs
    portfolioTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            portfolioTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Get category and render projects
            activeCategory = this.getAttribute('data-category');
            renderProjects(activeCategory);
        });
    });
}

function renderProjects(category) {
    const portfolioContent = document.querySelector('.portfolio-content');
    if (!portfolioContent) return;
    
    // Filter projects by category
    const filteredProjects = portfolioProjects.filter(project => {
        return category === 'all' || project.category === category;
    });
    
    // Clear existing content
    portfolioContent.innerHTML = '';
    
    // Render filtered projects (limit to 6 for homepage)
    const projectsToShow = filteredProjects.slice(0, 6);
    
    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        portfolioContent.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4 portfolio-item';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', (index * 100).toString());
    
    const isIconImage = project.image.startsWith('fas ');
    const newBadge = project.isNew ? '<div class="new-badge">New</div>' : '';
    
    col.innerHTML = `
        <div class="portfolio-card">
            ${newBadge}
            <div class="portfolio-image">
                ${isIconImage 
                    ? `<i class="${project.image} fa-3x text-primary"></i>`
                    : `<img src="${project.image}" alt="${project.title}" class="img-fluid">`
                }
            </div>
            <div class="portfolio-info">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
                <div class="portfolio-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="portfolio-actions">
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary">
                        View Project <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    return col;
}