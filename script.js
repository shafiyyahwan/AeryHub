function updateNavCartBadge() {
  const rawCart = localStorage.getItem('cart');
  const cartData = rawCart ? JSON.parse(rawCart) : [];
  const cartLinks = document.querySelectorAll('.cart-nav-icon');
  const count = cartData.length;

  cartLinks.forEach(el => {
    let badge = el.querySelector('.cart-count');
    if (count > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-count';
        el.style.position = 'relative';
        el.appendChild(badge);
      }
      badge.textContent = count;
      badge.style.display = 'block';
    } else if (badge) {
      badge.remove();
    }
  });
}

window.addEventListener('pageshow', () => {
  if (window.AppState) {
    window.AppState.cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (typeof window.AppState.init === 'function') {
      window.AppState.init();
    }
  }

  updateNavCartBadge();

  if (typeof renderCart === 'function') {
    renderCart();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateNavCartBadge();
});

window.addEventListener('storage', updateNavCartBadge);
window.addEventListener('cartUpdated', updateNavCartBadge);
