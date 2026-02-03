document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Navbar Collapse on Mobile Click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Check if the menu is actually open before trying to close it
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // 2. Smooth Scrolling for Internal Links (Backup for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Offset for fixed navbar
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            // Basic Validation
            if(name.trim() === "" || phone.trim() === "" || service === "") {
                alert("Please fill in all required fields.");
                return;
            }

            if(phone.length !== 10 || isNaN(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            // Success Simulation
            alert(`Thank you, ${name}! We have received your request for ${service}. We will call you at ${phone} shortly.`);
            contactForm.reset();
        });
    }

    // 4. Infinite Brand Slider Logic (Duplication)
    const track = document.getElementById('brandTrack');
    // Duplicate content to ensure smooth infinite scroll
    if (track) {
        track.innerHTML += track.innerHTML;
    }
});