const projects = [
    {
        title: "Portfolio Project (This Website)",
        description: "A responsive personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamic theme switcher and is populated by a JavaScript data structure.",
        imageUrl: "./images/portfolio-project-preview.jpg", // to be added
        liveUrl: "http://127.0.0.1:5500/index.html",
        codeUrl: "https://github.com/RaviO3/Portfolio-Project" 
    },
    {
        title: "Live Weather Dashboard",
        description: "Live Weather Dashboard is a web app that shows real-time weather updates using API integration. It allows users to search any city and view details like temperature, humidity, and wind speed instantly.",
        imageUrl: "./images/live-weather-dashboard-project-preview.jpg", // Make sure to add this image to your 'images' folder!
        liveUrl: "http://127.0.0.1:5500/Public/index.html",
        codeUrl: "https://github.com/your-username/ecommerce-repo" // Replace with your repo link
    }
];
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;
const projectsContainer = document.querySelector('.projects-container');
const renderProjects = () => {
    let allProjectsHTML = '';
    projects.forEach(project => {
        const projectCardHTML = `
      <div class="project-card">
        <div class="project-image-container">
            <img 
              src="${project.imageUrl}" 
              alt="Screenshot of the ${project.title} project" 
              class="project-image"
            >
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a 
              href="${project.liveUrl}" 
              class="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a 
              href="${project.codeUrl}" 
              class="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    `;
        allProjectsHTML += projectCardHTML;
    });
    projectsContainer.innerHTML = allProjectsHTML;

};

themeToggle.addEventListener('click', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeToggle.checked = true;
        }
    }
})();
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});