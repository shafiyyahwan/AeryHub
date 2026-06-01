// AeryHub Global Script

function showToast(msg, duration = 2200) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.querySelector('.phone-frame')?.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function formatPrice(n) { return 'RM ' + n.toFixed(2); }

function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return `<span class="stars">${s}</span> <span style="font-size:12px;color:var(--text-muted)">${rating}</span>`;
}

function updateNavCartBadge() {
  const cartLinks = document.querySelectorAll('.cart-nav-icon');
  const count = AppState.cart.reduce((s, i) => s + i.qty, 0);
  cartLinks.forEach(el => {
    const badge = el.querySelector('.cart-count');
    if (count > 0) {
      if (!badge) {
        const b = document.createElement('span');
        b.className = 'cart-count';
        b.textContent = count;
        el.style.position = 'relative';
        el.appendChild(b);
      } else {
        badge.textContent = count;
      }
    } else if (badge) badge.remove();
  });
}

function navigateTo(page) {
  window.location.href = page;
}

function goBack() {
  if (window.history.length > 1) window.history.back();
  else window.location.href = 'home.html';
}

document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  updateNavCartBadge();

  // Active nav highlighting
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href') || item.dataset.page;
    if (href && href.includes(page)) item.classList.add('active');
  });
});
