// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Functionality (Shop Page)
if (document.querySelector('.add-to-cart')) {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.closest('.product-card');
            const title = product.querySelector('.product-title').textContent;
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${title} has been added to your cart!</span>
            `;
            
            // Add to body and remove after 3 seconds
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        });
    });
}

// Wishlist Functionality (Shop Page)
if (document.querySelector('.wishlist-btn')) {
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = 'red';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });
}

// Form Submission Handling
if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // In a real application, you would send this data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you! Your request has been submitted. We will contact you shortly.');
            
            // Reset form
            this.reset();
        });
    });
}

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
