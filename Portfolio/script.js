/* ══════════════════════════════════════════════
   TANISHK GUPTA — PORTFOLIO SCRIPTS
══════════════════════════════════════════════ */

// ── THEME TOGGLE ────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

// ── NAVBAR SCROLL ────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER MENU ───────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── SCROLL ANIMATIONS ────────────────────────────────
const animateEls = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, parseInt(delay));
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

animateEls.forEach(el => observer.observe(el));

// ── ACTIVE NAV HIGHLIGHT ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
        a.style.background = a.getAttribute('href') === `#${id}` ? 'var(--accent-light)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── CONTACT FORM ─────────────────────────────────────
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    formSuccess.classList.add('visible');
    form.reset();
    btn.innerHTML = `Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
    btn.disabled = false;
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }, 1200);
});

// ── TYPING ANIMATION (hero title) ────────────────────
function typeWriter(el, text, speed = 60) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

window.addEventListener('load', () => {
  const titleEl = document.querySelector('.hero-title');
  if (titleEl) {
    const original = titleEl.textContent;
    setTimeout(() => typeWriter(titleEl, original, 35), 400);
  }
});

// ── SMOOTH REVEAL: hero text ──────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.hero [data-animate]').forEach((el, i) => {
    setTimeout(() => el.classList.add('in-view'), 150 + i * 200);
  });
});
