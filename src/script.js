import config from './config.js';

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopSlideshow();
            startSlideshow();
        });
    });

    // Start the slideshow
    startSlideshow();

    // Contact Dialog Functionality
    const contactBtn = document.querySelector('.contact-btn');
    const contactDialog = document.getElementById('contact-dialog');
    const cancelBtn = document.querySelector('.cancel-btn');
    const contactForm = document.getElementById('contact-form');

    contactBtn.addEventListener('click', () => {
        contactDialog.showModal();
    });

    cancelBtn.addEventListener('click', () => {
        contactDialog.close();
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const response = await emailjs.sendForm(
                'service_voxmqks',
                'template_1zg2bvs',
                contactForm
            );
            
            console.log('Success:', response);
            alert('Message sent successfully!');
            contactDialog.close();
            contactForm.reset();
        } catch (error) {
            console.error('Error details:', error);
            alert('Failed to send message. Please try again later.');
        }
    });
}); 