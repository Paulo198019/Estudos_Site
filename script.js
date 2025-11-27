
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    });    if (targetEl) {
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 250);
  });
});

      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
