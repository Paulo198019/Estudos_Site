
// =========================
// Função: Atualiza ano no rodapé
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl âncoras    yearEl.textContent = new Date().getFullYear();
// =========================
function smoothScroll(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Move foco para acessibilidade
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}

// Links internos (nav e footer)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', ev => {
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      ev.preventDefault();
      smoothScroll(href);
    }
  });
});

// =========================
// Botões com data-scroll (se houver)
// =========================
document.addEventListener('click', ev => {
  const trigger = ev.target.closest('[data-scroll]');
  if (trigger) {
    ev.preventDefault();
    const sel = trigger.getAttribute('data-scroll');
    smoothScroll(sel);
  }
});

// =========================
// Menu responsivo (opcional)
// =========================
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.setAttribute('aria-label', 'Abrir menu');
menuToggle.innerHTML = '☰';

// Adiciona botão apenas se navLinks existir
if (navLinks) {
  const topnavInner = document.querySelector('.topnav-inner');
  if (topnavInner) {
    topnavInner.insertBefore(menuToggle, navLinks);
  }

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// =========================
// Feedback visual nos botões (opcional)
// =========================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', () => btn.classList.add('active'));
  btn.addEventListener('mouseup', () => btn.classList.remove('active'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('active'));
});
  }
});

// =========================
