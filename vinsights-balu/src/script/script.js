

// FAQ toggle
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = content.classList.contains('open');
  document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));
  if (!isOpen) { content.classList.add('open'); icon.classList.add('open'); }
}

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '%';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Intersection Observer for scroll animations + counters
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (el.dataset.target) animateCounter(el);
      io.unobserve(el);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => io.observe(el));
document.querySelectorAll('[data-target]').forEach(el => io.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = 'transparent';
});