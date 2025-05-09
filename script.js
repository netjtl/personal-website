// Smooth scrolling for navigation links
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation example (can be expanded)
// const contactForm = document.getElementById('contact-form'); // Assuming you add a form with this ID
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         const email = document.getElementById('email'); // Assuming an input with id 'email'
//         if (email && email.value === '') {
//             e.preventDefault();
//             alert('Please enter your email address.');
//         }
//         // Add more validation as needed
//     });
// }

// You can add more JavaScript for dynamic content, animations, etc.
