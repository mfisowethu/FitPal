// script.js - FitPal Basic Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Basic form validation for login and register forms
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
  });

  // Highlight nav link on current page
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.borderBottom = '2px solid white';
    }
  });
});
