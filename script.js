
// Smooth scroll (fallback para navegadores sem CSS scroll-behavior)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animação de digitação (typewriter) no banner — respeita prefers-reduced-motion
(function typingEffect(){
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduce) return; // evita animação para quem prefere menos movimento

  const titleEl = document.getElementById('bannerTitle');
  const subEl   = document.getElementById('bannerSubtitle');
  const titleText = titleEl.textContent.trim();
  const subText   = subEl.textContent.trim();

  // limpa e começa a digitação
  titleEl.textContent = '';
  subEl.textContent = '';

  let i = 0;
  const typeTitle = () => {
    if (i <= titleText.length) {
      titleEl.textContent = titleText.slice(0, i);
      i++;
      setTimeout(typeTitle, 25); // velocidade da digitação do título
    } else {
      // digita subtítulo
      let j = 0;
      const typeSub = () => {
        if (j <= subText.length) {
          subEl.textContent = subText.slice(0, j);
          j++;
          setTimeout(typeSub, 10); // velocidade da digitação do subtítulo
        }
      };
      typeSub();
    }
  };
  typeTitle();
})();

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
