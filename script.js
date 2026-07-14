document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  const revealElements = document.querySelectorAll('.reveal');

  scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
