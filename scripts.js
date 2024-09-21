
// Initial page load & navigate script
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html'); // Load home.html by default
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
            attachEventListeners(); // Call a function to attach listeners here
        })
        .catch(error => console.log('Error loading page:', error));
}
//to toggle between each page
function attachEventListeners() {
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('home.html');
    });
    document.getElementById('posts-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('posts.html');
    });
    document.getElementById('projects-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('projects.html');
    });
    document.getElementById('talks-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('talks.html');
    });
    document.getElementById('travel-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('travel.html');
    });
    document.getElementById('contact-link').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('contact.html');
    });
}
///////////////////////////////////////////////////////////////////////////////////

//Light & Dark Mode Toggle Script 
const toggleIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved user theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
}

// Add click event to toggle icon
toggleIcon.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
//////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.post-title').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const postId = item.getAttribute('data-post');

        // Hide all post contents
        document.querySelectorAll('.post-content').forEach(function (post) {
            post.style.display = 'none';
        });

        // Show the selected post content
        const selectedPost = document.getElementById(postId);
        selectedPost.style.display = 'block';
    });
});

// Back button functionality
document.querySelectorAll('.back-button').forEach(function (button) {
    button.addEventListener('click', function () {
        // Hide all post contents
        document.querySelectorAll('.post-content').forEach(function (post) {
            post.style.display = 'none';
        });
    });
});




