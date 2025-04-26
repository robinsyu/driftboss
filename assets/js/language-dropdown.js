// Language dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Language dropdown toggle
    const langButton = document.getElementById('language-button');
    const langDropdown = document.getElementById('language-dropdown');
    
    if (langButton && langDropdown) {
        langButton.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            if (!langDropdown.classList.contains('hidden')) {
                langDropdown.classList.add('hidden');
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        langDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}); 