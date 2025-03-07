// Theme Toggle
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

// Load mode from local storage
if (localStorage.getItem('theme') === 'dark-mode') {
    body.classList.add('dark-mode');
    modeSwitch.checked = true;
} else {
    body.classList.add('light-mode');
}

// Toggle theme
modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* Load More Portfolio Items
const loadMoreBtn = document.querySelector('.load-more');
const projectsContainer = document.querySelector('.projects');

const additionalProjects = [
    '<div class="project">Project 4</div>',
    '<div class="project">Project 5</div>',
    '<div class="project">Project 6</div>'
];

let loaded = false;
loadMoreBtn.addEventListener('click', () => {
    if (!loaded) {
        additionalProjects.forEach(project => {
            projectsContainer.innerHTML += project;
        });
        loadMoreBtn.textContent = 'Show Less';
        loaded = true;
    } else {
        document.querySelectorAll('.projects .project:nth-child(n+4)').forEach(project => project.remove());
        loadMoreBtn.textContent = 'Load More';
        loaded = false;
    }
});*/

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
});
