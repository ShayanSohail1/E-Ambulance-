/**
 * eAmbulance - Main JavaScript File
 * This file contains all the interactive functionality for the eAmbulance website
 */

// Sample data for eAmbulances
const ambulanceData = [
    {
        id: 1,
        type: 'basic',
        name: 'Basic Life Support Ambulance',
        location: 'Chicago, IL',
        price: 25,
        features: ['First aid equipment', 'Oxygen supply', 'Basic medications'],
        image: 'https://placehold.co/600x400/e63946/ffffff?text=Basic+Life+Support',
        ac: false,
        specialization: 'basic'
    },
    {
        id: 2,
        type: 'advanced',
        name: 'Advanced Life Support Ambulance',
        location: 'Chicago, IL',
        price: 45,
        features: ['Advanced cardiac equipment', 'Ventilator', 'Advanced medications'],
        image: 'https://placehold.co/600x400/1d3557/ffffff?text=Advanced+Life+Support',
        ac: true,
        specialization: 'advanced'
    },
    {
        id: 3,
        type: 'icu',
        name: 'ICU Ambulance',
        location: 'New York, NY',
        price: 75,
        features: ['ICU monitoring equipment', 'Critical care medications', 'Specialized medical team'],
        image: 'https://placehold.co/600x400/457b9d/ffffff?text=ICU+Ambulance',
        ac: true,
        specialization: 'icu'
    },
    {
        id: 4,
        type: 'iccu',
        name: 'ICCU Ambulance',
        location: 'Los Angeles, CA',
        price: 85,
        features: ['Cardiac monitoring', 'Defibrillator', 'Cardiac medications'],
        image: 'https://placehold.co/600x400/a8dadc/000000?text=ICCU+Ambulance',
        ac: true,
        specialization: 'iccu'
    },
    {
        id: 5,
        type: 'ac',
        name: 'A/C Ambulance',
        location: 'Miami, FL',
        price: 35,
        features: ['Air conditioning', 'Temperature control', 'Patient comfort features'],
        image: 'https://placehold.co/600x400/f4a261/000000?text=A/C+Ambulance',
        ac: true,
        specialization: 'basic'
    },
    {
        id: 6,
        type: 'nonac',
        name: 'Non-A/C Ambulance',
        location: 'Houston, TX',
        price: 20,
        features: ['Basic equipment', 'Standard transport', 'Cost-effective option'],
        image: 'https://placehold.co/600x400/e9c46a/000000?text=Non-A/C+Ambulance',
        ac: false,
        specialization: 'basic'
    },
    {
        id: 7,
        type: 'basic',
        name: 'Basic Life Support Ambulance',
        location: 'Boston, MA',
        price: 28,
        features: ['First aid equipment', 'Oxygen supply', 'Basic medications'],
        image: 'https://placehold.co/600x400/e63946/ffffff?text=Basic+Life+Support',
        ac: false,
        specialization: 'basic'
    },
    {
        id: 8,
        type: 'advanced',
        name: 'Advanced Life Support Ambulance',
        location: 'Chicago, IL',
        price: 48,
        features: ['Advanced cardiac equipment', 'Ventilator', 'Advanced medications'],
        image: 'https://placehold.co/600x400/1d3557/ffffff?text=Advanced+Life+Support',
        ac: true,
        specialization: 'advanced'
    },
    {
        id: 9,
        type: 'icu',
        name: 'ICU Ambulance',
        location: 'New York, NY',
        price: 78,
        features: ['ICU monitoring equipment', 'Critical care medications', 'Specialized medical team'],
        image: 'https://placehold.co/600x400/457b9d/ffffff?text=ICU+Ambulance',
        ac: true,
        specialization: 'icu'
    },
    {
        id: 10,
        type: 'iccu',
        name: 'ICCU Ambulance',
        location: 'Chicago, IL',
        price: 88,
        features: ['Cardiac monitoring', 'Defibrillator', 'Cardiac medications'],
        image: 'https://placehold.co/600x400/a8dadc/000000?text=ICCU+Ambulance',
        ac: true,
        specialization: 'iccu'
    },
    {
        id: 11,
        type: 'neonatal',
        name: 'Neonatal Ambulance',
        location: 'San Francisco, CA',
        price: 95,
        features: ['Neonatal incubator', 'Specialized infant equipment', 'Neonatal care team'],
        image: 'https://placehold.co/600x400/ff9f1c/ffffff?text=Neonatal+Ambulance',
        ac: true,
        specialization: 'neonatal'
    },
    {
        id: 12,
        type: 'pediatric',
        name: 'Pediatric Ambulance',
        location: 'Denver, CO',
        price: 65,
        features: ['Child-friendly equipment', 'Pediatric medications', 'Child specialist team'],
        image: 'https://placehold.co/600x400/2ec4b6/ffffff?text=Pediatric+Ambulance',
        ac: true,
        specialization: 'pediatric'
    },
    {
        id: 13,
        type: 'bariatric',
        name: 'Bariatric Ambulance',
        location: 'Atlanta, GA',
        price: 70,
        features: ['Heavy-duty stretcher', 'Wider interior space', 'Specialized lifting equipment'],
        image: 'https://placehold.co/600x400/3d5a80/ffffff?text=Bariatric+Ambulance',
        ac: true,
        specialization: 'bariatric'
    },
    {
        id: 14,
        type: 'air',
        name: 'Air Ambulance',
        location: 'Las Vegas, NV',
        price: 250,
        features: ['Helicopter transport', 'Rapid response team', 'Long-distance capability'],
        image: 'https://placehold.co/600x400/ee6c4d/ffffff?text=Air+Ambulance',
        ac: true,
        specialization: 'air'
    },
    {
        id: 15,
        type: 'water',
        name: 'Water Ambulance',
        location: 'Miami, FL',
        price: 120,
        features: ['Boat transport', 'Water rescue equipment', 'Marine medical team'],
        image: 'https://placehold.co/600x400/293241/ffffff?text=Water+Ambulance',
        ac: true,
        specialization: 'water'
    },
    {
        id: 16,
        type: 'mobile-icu',
        name: 'Mobile ICU Ambulance',
        location: 'Seattle, WA',
        price: 110,
        features: ['Full ICU capabilities', 'Advanced life support', 'Critical care specialists'],
        image: 'https://placehold.co/600x400/5e548e/ffffff?text=Mobile+ICU',
        ac: true,
        specialization: 'icu'
    }
];

// Function to display ambulance results
function displayResults(ambulances, fromSearch = false) {
    // Get the results container
    const ambulanceResults = document.getElementById('ambulance-results');
    const resultsSection = document.getElementById('results');
    const resultsNumber = document.getElementById('results-number');
    
    // Clear previous results
    ambulanceResults.innerHTML = '';
    
    // Update results count
    resultsNumber.textContent = ambulances.length;
    
    // Show results section
    resultsSection.classList.remove('d-none');
    
    // Only scroll to results section if this is from a search button click
    if(fromSearch) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (ambulances.length === 0) {
        ambulanceResults.innerHTML = '<div class="alert alert-info">No eAmbulances found matching your criteria. Please try different search parameters.</div>';
        return;
    }
    
    // Create result cards
    ambulances.forEach(ambulance => {
        const ambulanceCard = document.createElement('div');
        ambulanceCard.className = 'ambulance-card';
        
        const featuresHtml = ambulance.features.map(feature => 
            `<span class="ambulance-feature">${feature}</span>`
        ).join('');
        
        ambulanceCard.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <div class="ambulance-image">
                        <img src="${ambulance.image}" alt="${ambulance.name}">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="ambulance-details">
                        <h3 class="ambulance-title">${ambulance.name}</h3>
                        <p class="ambulance-location"><i class="fas fa-map-marker-alt me-2"></i>${ambulance.location}</p>
                        <div class="ambulance-features mb-3">
                            ${featuresHtml}
                            <span class="ambulance-feature">${ambulance.ac ? 'A/C' : 'Non-A/C'}</span>
                            <span class="ambulance-feature">${ambulance.specialization.toUpperCase()}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="ambulance-price">$${ambulance.price} per trip</div>
                            <button class="btn btn-primary request-btn" data-ambulance-id="${ambulance.id}">Request Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        ambulanceResults.appendChild(ambulanceCard);
    });
    
    // Add animation to results
    const cards = document.querySelectorAll('.ambulance-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });
}

// Trigger search on page load to show all ambulances by default
function loadInitialResults() {
    // Display all ambulances when page loads
    displayResults(ambulanceData);
}

// Document Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize preloader
    initPreloader();
    
    // Initialize particles.js
    initParticles();
    
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize navbar scroll behavior
    initNavbar();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize rating stars
    initRatingStars();
    
    // Initialize feedback form
    initFeedbackForm();
    
    // Initialize price range slider
    initPriceRangeSlider();
    
    // Initialize filter and sort toggles
    initFilterSortToggles();
    
    // Initialize request buttons
    initRequestButtons();
    
    // Load initial results
    loadInitialResults();
});

// Preloader Function
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader-text');
    const loadingTexts = [
        'Loading eAmbulance...',
        'Preparing emergency services...',
        'Setting up ambulance network...',
        'Almost ready...'
    ];
    let textIndex = 0;
    
    // Change loading text every 1.5 seconds
    const textInterval = setInterval(() => {
        textIndex = (textIndex + 1) % loadingTexts.length;
        if (preloaderText) {
            preloaderText.textContent = loadingTexts[textIndex];
        }
    }, 1500);
    
    window.addEventListener('load', function() {
        // Show preloader for at least 2 seconds for better UX
        setTimeout(function() {
            clearInterval(textInterval);
            if (preloaderText) {
                preloaderText.textContent = 'Ready!';
            }
            
            setTimeout(function() {
                preloader.classList.add('fade-out');
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }, 2000);
    });
}

// Particles.js Initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ef4444'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ef4444',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Navbar Scroll Behavior
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scrolled class to navbar when scrolled
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Search Functionality
function initSearch() {
    const searchBtn = document.getElementById('search-btn');
    const locationSearch = document.getElementById('location-search');
    const ambulanceType = document.getElementById('ambulance-type');
    
    // Add input validation for location search
    locationSearch.addEventListener('input', function() {
        validateLocationInput(this);
    });
    
    // Function to validate location input
    function validateLocationInput(input) {
        const value = input.value.trim();
        if (value.length > 0 && value.length < 3) {
            input.classList.add('is-invalid');
            input.setCustomValidity('Location must be at least 3 characters');
        } else {
            input.classList.remove('is-invalid');
            input.setCustomValidity('');
        }
    }
    
    searchBtn.addEventListener('click', function() {
        // Validate inputs before searching
        const location = locationSearch.value.trim().toLowerCase();
        const type = ambulanceType.value;
        const priceFilter = document.getElementById('filter-price').checked;
        const priceValue = document.getElementById('price-range').value;
        const sortPrice = document.getElementById('sort-price').checked;
        const sortOrder = document.getElementById('sort-order').value;
        
        // Validate location input if provided
        if (location.length > 0 && location.length < 3) {
            showAlert('Location search must be at least 3 characters', 'warning');
            locationSearch.focus();
            return;
        }
        
        // Filter ambulances based on search criteria
        let filteredAmbulances = ambulanceData.filter(ambulance => {
            // Filter by location if provided
            if (location && !ambulance.location.toLowerCase().includes(location)) {
                return false;
            }
            
            // Filter by type if selected
            if (type !== 'Select eAmbulance Type' && ambulance.type !== type) {
                return false;
            }
            
            // Filter by price if enabled
            if (priceFilter && ambulance.price > parseInt(priceValue)) {
                return false;
            }
            
            return true;
        });
        
        // Sort by price if enabled
        if (sortPrice) {
            filteredAmbulances.sort((a, b) => {
                if (sortOrder === 'low-high') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        }
        
        // Display results with scroll behavior
        displayResults(filteredAmbulances, true);
    });
}

// Rating Stars Functionality
function initRatingStars() {
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            
            // Update stars UI
            stars.forEach(s => {
                const sRating = s.getAttribute('data-rating');
                s.classList.remove('fas', 'far', 'active');
                
                if (sRating <= rating) {
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.add('far');
                }
            });
            
            // Enhanced visual feedback for better UX
            const ratingText = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
            showAlert(`You rated us ${ratingText[rating]} (${rating}/5)`, 'info', 1000);
            
            // Animate the stars for better feedback
            stars.forEach(s => {
                if (s.classList.contains('active')) {
                    s.classList.add('pulse-animation');
                    setTimeout(() => s.classList.remove('pulse-animation'), 500);
                }
            });
            
            // Validate the rating for form submission
            if(document.getElementById('feedback-form')) {
                document.getElementById('feedback-form').classList.add('rating-selected');
            }
        });
        
        // Add hover effect for better UX
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            
            stars.forEach(s => {
                const sRating = s.getAttribute('data-rating');
                s.classList.remove('fas', 'far');
                
                if (sRating <= rating) {
                    s.classList.add('fas');
                } else {
                    s.classList.add('far');
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            const currentRating = ratingInput.value;
            
            stars.forEach(s => {
                const sRating = s.getAttribute('data-rating');
                s.classList.remove('fas', 'far', 'active');
                
                if (sRating <= currentRating) {
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Add CSS for star animation if not already present
    if (!document.getElementById('star-animation-style')) {
        const style = document.createElement('style');
        style.id = 'star-animation-style';
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            .pulse-animation {
                animation: pulse 0.5s ease-in-out;
            }
            .rating-stars i {
                transition: all 0.2s ease;
                cursor: pointer;
            }
            .rating-stars i:hover {
                transform: scale(1.2);
            }
        `;
        document.head.appendChild(style);
    }
}

// Feedback Form Submission
function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        // Add input validation for name field
        const nameInput = document.getElementById('name');
        nameInput.addEventListener('input', function() {
            validateNameInput(this);
        });
        
        // Add input validation for email field
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('input', function() {
            validateEmailInput(this);
        });
        
        // Add input validation for message field
        const messageInput = document.getElementById('feedback-message');
        messageInput.addEventListener('input', function() {
            validateMessageInput(this);
        });
        
        // Function to validate name input
        function validateNameInput(input) {
            const value = input.value.trim();
            if (value.length === 0) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Please enter your name');
            } else if (value.length < 2) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Name must be at least 2 characters');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                input.setCustomValidity('');
            }
        }
        
        // Function to validate email input
        function validateEmailInput(input) {
            const value = input.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (value.length === 0) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Please enter your email');
            } else if (!emailRegex.test(value)) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Please enter a valid email address');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                input.setCustomValidity('');
            }
        }
        
        // Function to validate message input
        function validateMessageInput(input) {
            const value = input.value.trim();
            if (value.length === 0) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Please enter your feedback');
            } else if (value.length < 10) {
                input.classList.add('is-invalid');
                input.setCustomValidity('Feedback must be at least 10 characters');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                input.setCustomValidity('');
            }
        }
        
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const rating = document.getElementById('rating').value;
            const message = messageInput.value.trim();
            
            // Validate form
            let isValid = true;
            
            // Validate name
            if (name.length === 0 || name.length < 2) {
                validateNameInput(nameInput);
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.length === 0 || !emailRegex.test(email)) {
                validateEmailInput(emailInput);
                isValid = false;
            }
            
            // Validate rating
            if (rating === '0') {
                showAlert('Please provide a rating.', 'warning');
                isValid = false;
            }
            
            // Validate message
            if (message.length === 0 || message.length < 10) {
                validateMessageInput(messageInput);
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Simulate form submission
            showAlert('Thank you for your feedback! We appreciate your input.', 'success');
            
            // Reset form and validation states
            feedbackForm.reset();
            nameInput.classList.remove('is-valid', 'is-invalid');
            emailInput.classList.remove('is-valid', 'is-invalid');
            messageInput.classList.remove('is-valid', 'is-invalid');
            
            // Reset rating stars
            const stars = document.querySelectorAll('.rating-stars i');
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            document.getElementById('rating').value = '0';
        });
    }
}

// Price Range Slider
function initPriceRangeSlider() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const filterPrice = document.getElementById('filter-price');
    const priceRangeContainer = document.getElementById('price-range-container');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = `$${this.value}`;
        });
    }
    
    if (filterPrice && priceRangeContainer) {
        filterPrice.addEventListener('change', function() {
            if (this.checked) {
                priceRangeContainer.classList.remove('d-none');
            } else {
                priceRangeContainer.classList.add('d-none');
            }
        });
    }
}

// Filter and Sort Toggles
function initFilterSortToggles() {
    const sortPrice = document.getElementById('sort-price');
    const sortOrder = document.getElementById('sort-order');
    
    if (sortPrice && sortOrder) {
        sortPrice.addEventListener('change', function() {
            if (this.checked) {
                sortOrder.classList.remove('d-none');
            } else {
                sortOrder.classList.add('d-none');
            }
        });
    }
}

// Helper function to show alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Find a suitable container for the alert
    const container = document.querySelector('.feedback-form') || document.querySelector('.container');
    container.prepend(alertDiv);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 5000);
}

// Handle Request Now button clicks and form validation
function initRequestButtons() {
    // Set minimum date for request form to today
    const setMinDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        document.getElementById('requestDate').min = formattedDate;
    };

    // Populate modal with ambulance details
    const populateRequestModal = (ambulance) => {
        document.getElementById('ambulanceId').value = ambulance.id;
        document.getElementById('requestAmbulanceName').textContent = ambulance.name;
        document.getElementById('requestAmbulanceLocation').querySelector('span').textContent = ambulance.location;
        document.getElementById('requestAmbulancePrice').querySelector('span').textContent = ambulance.price;
        document.getElementById('requestAmbulanceImage').src = ambulance.image;
        
        // Clear and populate features list
        const featuresList = document.getElementById('requestAmbulanceFeatures').querySelector('ul');
        featuresList.innerHTML = '';
        ambulance.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${feature}`;
            featuresList.appendChild(li);
        });

        // Reset form and validation
        document.getElementById('requestAmbulanceForm').reset();
        document.getElementById('requestAmbulanceForm').classList.remove('was-validated');
        setMinDate();
    };

    // Add real-time validation for form fields
    const setupFormValidation = () => {
        // Name validation
        const nameInput = document.getElementById('requestName');
        if (nameInput) {
            nameInput.addEventListener('input', function() {
                validateRequestInput(this, 2, 'Name must be at least 2 characters');
            });
        }
        
        // Phone validation
        const phoneInput = document.getElementById('requestPhone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                const value = this.value.trim();
                const phoneRegex = /^[0-9]{10}$/;
                
                if (value.length === 0) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please enter your phone number');
                } else if (!phoneRegex.test(value)) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please enter a valid 10-digit phone number');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
        }
        
        // Email validation
        const emailInput = document.getElementById('requestEmail');
        if (emailInput) {
            emailInput.addEventListener('input', function() {
                const value = this.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (value.length === 0) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please enter your email');
                } else if (!emailRegex.test(value)) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please enter a valid email address');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
        }
        
        // Date validation
        const dateInput = document.getElementById('requestDate');
        if (dateInput) {
            dateInput.addEventListener('change', function() {
                const selectedDate = new Date(this.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
                
                if (!this.value) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please select a date');
                } else if (selectedDate < today) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please select a date in the future');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
        }
        
        // Time validation
        const timeInput = document.getElementById('requestTime');
        if (timeInput) {
            timeInput.addEventListener('change', function() {
                const dateInput = document.getElementById('requestDate');
                const selectedDate = new Date(dateInput.value);
                const today = new Date();
                
                if (!this.value) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Please select a time');
                } else if (selectedDate.toDateString() === today.toDateString()) {
                    // If the selected date is today, validate that the time is in the future
                    const [hours, minutes] = this.value.split(':').map(Number);
                    const selectedTime = new Date();
                    selectedTime.setHours(hours, minutes, 0, 0);
                    
                    if (selectedTime <= new Date()) {
                        this.classList.add('is-invalid');
                        this.setCustomValidity('Please select a time in the future');
                    } else {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                        this.setCustomValidity('');
                    }
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
            
            // Re-validate time when date changes
            const dateInput = document.getElementById('requestDate');
            if (dateInput) {
                dateInput.addEventListener('change', function() {
                    if (timeInput.value) {
                        const event = new Event('change');
                        timeInput.dispatchEvent(event);
                    }
                });
            }
        }
        
        // Address validation
        const addressInput = document.getElementById('requestAddress');
        if (addressInput) {
            addressInput.addEventListener('input', function() {
                validateRequestInput(this, 10, 'Address must be at least 10 characters');
            });
        }
        
        // Duration validation
        const durationInput = document.getElementById('requestDuration');
        if (durationInput) {
            durationInput.addEventListener('input', function() {
                const value = parseInt(this.value);
                if (isNaN(value) || value < 1) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Duration must be at least 1 hour');
                } else if (value > 24) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('Duration cannot exceed 24 hours');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
        }
        
        // Terms checkbox validation with better visual feedback
        const termsCheckbox = document.getElementById('requestTerms');
        if (termsCheckbox) {
            termsCheckbox.addEventListener('change', function() {
                if (!this.checked) {
                    this.classList.add('is-invalid');
                    this.setCustomValidity('You must agree to the terms and conditions');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    this.setCustomValidity('');
                }
            });
        }
    };
    
    // Helper function for input validation
    const validateRequestInput = (input, minLength, message) => {
        const value = input.value.trim();
        if (value.length === 0) {
            input.classList.add('is-invalid');
            input.setCustomValidity('This field is required');
        } else if (value.length < minLength) {
            input.classList.add('is-invalid');
            input.setCustomValidity(message);
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            input.setCustomValidity('');
        }
    };
    
    // Form validation and submission
    const requestForm = document.getElementById('requestAmbulanceForm');
    if (requestForm) {
        // Setup real-time validation
        setupFormValidation();
        
        requestForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            // Validate all fields before submission
            const inputs = this.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                if (input.id !== 'requestNotes' && input.type !== 'hidden') { // Skip optional notes field
                    const event = new Event('input', { bubbles: true });
                    input.dispatchEvent(event);
                }
            });
            
            if (this.checkValidity()) {
                // Get form data
                const ambulanceId = document.getElementById('ambulanceId').value;
                const ambulance = ambulanceData.find(a => a.id == ambulanceId);
                const name = document.getElementById('requestName').value;
                const phone = document.getElementById('requestPhone').value;
                const email = document.getElementById('requestEmail').value;
                const date = document.getElementById('requestDate').value;
                const time = document.getElementById('requestTime').value;
                
                // In a real application, this would send data to a server
                // For now, we'll just show a success message
                const message = `Thank you, ${name}! Your request for ${ambulance.name} on ${formatDate(date)} at ${time} has been received. A representative will contact you at ${phone} or ${email} shortly to confirm your booking.`;
                
                // Close modal and show success message
                const modal = bootstrap.Modal.getInstance(document.getElementById('requestAmbulanceModal'));
                modal.hide();
                
                showAlert(message, 'success');
                
                // Scroll to top to see the alert
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Reset validation states
                inputs.forEach(input => {
                    input.classList.remove('is-valid');
                    input.classList.remove('is-invalid');
                });
            }
            
            this.classList.add('was-validated');
        });
    }

    // Format date for display
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Use event delegation to handle dynamically created buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('request-btn')) {
            const ambulanceId = event.target.getAttribute('data-ambulance-id');
            const ambulance = ambulanceData.find(a => a.id == ambulanceId);
            
            if (ambulance) {
                populateRequestModal(ambulance);
                const requestModal = new bootstrap.Modal(document.getElementById('requestAmbulanceModal'));
                requestModal.show();
            }
        }
    });
}