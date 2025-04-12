// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Optional: Mobile nav toggle (if you add a hamburger later)
  // const menuToggle = document.querySelector('.menu-toggle');
  // const navLinks = document.querySelector('.nav-links');
  
  // menuToggle.addEventListener('click', () => {
  //   navLinks.classList.toggle('active');
  // });
  
  // Button alert (hero section)
  document.querySelector('.btn').addEventListener('click', () => {
    alert('Thanks for showing interest! Scroll down to learn more 🚀');
  });
  
