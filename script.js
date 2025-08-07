
// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Job Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const jobCards = document.querySelectorAll('.job-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        jobCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        // Simulate search functionality
        console.log('Searching for:', searchTerm);
        // In a real application, this would trigger an API call
        showSearchResults(searchTerm);
    }
}

function showSearchResults(searchTerm) {
    // Simulate search results
    alert(`Searching for jobs related to: "${searchTerm}". In a real application, this would show filtered results.`);
}

// Newsletter Subscription
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.email-input');

subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email && isValidEmail(email)) {
        alert('Thank you for subscribing! You will receive weekly job updates.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Apply Button Functionality
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const jobCard = e.target.closest('.job-card');
        const jobTitle = jobCard.querySelector('h3').textContent;
        const company = jobCard.querySelector('.company').textContent;
        
        // Simulate job application
        alert(`Application submitted for "${jobTitle}" at ${company}! In a real application, this would redirect to an application form.`);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Filter Tags in Hero Section
document.querySelectorAll('.filter-tags .tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const tagText = tag.textContent.toLowerCase();
        searchInput.value = tagText;
        performSearch();
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate Cards on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.job-card, .benefit-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Resource Links
document.querySelectorAll('.resource-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const resourceTitle = e.target.closest('.resource-card').querySelector('h3').textContent;
        alert(`Redirecting to ${resourceTitle}. In a real application, this would navigate to the respective resource page.`);
    });
});

// View All Jobs Button
document.querySelector('.view-all-btn')?.addEventListener('click', () => {
    alert('Redirecting to full job listings page. In a real application, this would show all available jobs with pagination.');
});

// Loading Animation for Apply Buttons
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Applying...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

console.log('PathStarter job board loaded successfully!');
