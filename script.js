
// Scroll suave para âncoras
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
}

// Fade-in simples nos cards ao entrar na tela
const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
},{ threshold:0.2 });
cards.forEach(c => io.observe(c));

