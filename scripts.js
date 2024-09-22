
// Initial page load & navigate script
document.addEventListener('DOMContentLoaded', () => {
    attachNavEventListeners(); // Attach event listeners to navigation links only once
    loadPage('home.html'); // Load home.html by default
});

// Function to attach navigation event listeners
function attachNavEventListeners() {
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

// Function to load page content dynamically
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
            // Call additional functions to attach content-specific event listeners here if needed
        })
        .catch(error => console.log('Error loading page:', error));
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

// post page function and toggle between each post on click
document.addEventListener('DOMContentLoaded', function () {
    // Function to load HTML content into the #content-container
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-container').innerHTML = data;
                attachPostListeners(); // Attach listeners after loading the page content
            });
    }

    // Function to attach event listeners for posts
    function attachPostListeners() {
        document.querySelectorAll('.post-title').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                // Hide all post contents
                document.querySelectorAll('.post-content').forEach(function (content) {
                    content.style.display = 'none';
                });

                // Show the clicked post content
                const postId = item.getAttribute('data-post');
                const postElement = document.getElementById(postId);
                postElement.style.display = 'block';

                // Scroll to the post heading
                postElement.querySelector('h3').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Show/hide the scroll-to-top button based on reaching the bottom of the window
    let debounceTimeout;

window.onscroll = function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const scrollTopBtn = document.getElementById('scrollToTopBtn');
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY;

        // Show button if scrolled near the bottom (e.g., within 100px)
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }, 100); // Adjust debounce time as needed
};


    // Scroll to the top when the button is clicked
    document.getElementById('scrollToTopBtn').addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Initial navigation link listener
    document.getElementById('posts-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadPage('posts.html');
    });
});


//////////////////////////////////////////////////////////////////////////////////

       