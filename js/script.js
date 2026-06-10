// Revelar elementos ao scrollar a página
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => obs.observe(el));

// Menu hamburguer
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('nav-hamburger');
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('nav-hamburger');
  nav.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('nav-hamburger');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});

// Comportamento do FAQ (Abrir e fechar perguntas)
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Envio do formulário de contato / Cotação simulado
function handleSubmit() {
  const btn = event.target;
  btn.textContent = 'Enviando...';
  btn.style.background = '#999';
  setTimeout(() => {
    btn.textContent = '✓ Solicitação Enviada!';
    btn.style.background = '#2a9d49';
    setTimeout(() => {
      btn.textContent = 'Enviar Solicitação';
      btn.style.background = 'var(--red)';
    }, 4000);
  }, 1200);
}

// Ativar link correto do menu de navegação ao navegar pela página
const sections = document.querySelectorAll('section[id], #numeros');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--red)' : '';
  });
});
