// This ensures all navigation works smoothly
document.addEventListener('DOMContentLoaded', function() {
    // Makes the "Back to Vault" buttons work
    document.querySelectorAll('.back-home').forEach(button => {
      button.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    });
    
    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });