// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
    
    // Toggle icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
            document.querySelector('.mobile-menu i').classList.remove('fa-times');
            document.querySelector('.mobile-menu i').classList.add('fa-bars');
        }
    });
});

// Form Handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
        this.reset();
    });
});
