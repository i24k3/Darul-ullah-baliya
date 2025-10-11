// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Language Toggle
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Add language switching logic here
        });
    });

    // Smooth scrolling for anchor links
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

    // Simple prayer time update (you'll replace this with actual calculation)
    function updatePrayerTimes() {
        const prayers = {
            fajr: '5:15 AM',
            dhuhr: '12:30 PM', 
            asr: '4:45 PM',
            maghrib: '6:30 PM',
            isha: '8:00 PM'
        };
        
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        let currentPrayer = 'Isha: 8:00 PM'; // Default
        
        // Simple logic to show next prayer (you'll implement proper calculation)
        if (currentTime < 315) currentPrayer = `Fajr: ${prayers.fajr}`; // 5:15 AM = 315 minutes
        else if (currentTime < 750) currentPrayer = `Dhuhr: ${prayers.dhuhr}`; // 12:30 PM = 750 minutes
        else if (currentTime < 1005) currentPrayer = `Asr: ${prayers.asr}`; // 4:45 PM = 1005 minutes
        else if (currentTime < 1110) currentPrayer = `Maghrib: ${prayers.maghrib}`; // 6:30 PM = 1110 minutes
        
        document.getElementById('current-prayer').textContent = currentPrayer;
    }
    
    updatePrayerTimes();
});


// Add this to your existing script.js file

// Number counting animation for stats
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
        
        stat.classList.add('animated');
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate stats when stats section comes into view
                if (entry.target.classList.contains('quick-stats')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.mission-card, .leader-card, .facility-item, .program-detail, .step, .curriculum-item'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Also observe stats section
    const statsSection = document.querySelector('.quick-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Update DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // ... rest of your existing code ...
});