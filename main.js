// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//Contact Me alert
{
const contactButton = document.querySelector('button[type="submit"]');
  contactButton.addEventListener('click', () => {
    alert('Thank you for contacting me! I am looking forward to working with you.');
  });
}