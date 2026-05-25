const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('section, .card, .project, .metric').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
