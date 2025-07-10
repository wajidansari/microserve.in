// Mobile Menu Toggle - Fixed Version
document.getElementById('mobileMenu').addEventListener('click', function() {
    const nav = document.getElementById('navMenu');
    const icon = this.querySelector('i');
    
    nav.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth Scrolling - Fixed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const nav = document.getElementById('navMenu');
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
                document.querySelector('.mobile-menu i').classList.remove('fa-times');
                document.querySelector('.mobile-menu i').classList.add('fa-bars');
            }
        }
    });
});

// Form Handling - Fixed
if (document.querySelector('form')) {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
        this.reset();
    });
}
