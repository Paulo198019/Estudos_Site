
// Smooth scroll (fallback para navegadores que não aplicam CSS scroll-behavior)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
   ById(targetId);    const targetId = link.getAttribute('href').substring(1);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animação de entrada dos cards (fade + translate) com atraso incremental
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 250);
  });
});

