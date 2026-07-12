// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  buildRulers();
  window.addEventListener('resize', debounce(buildRulers, 150));
});

// Builds the measuring-tape tick strip used as a section divider
function buildRulers() {
  document.querySelectorAll('.ruler').forEach(el => {
    const width = el.clientWidth || 1000;
    const spacing = 14;
    const count = Math.ceil(width / spacing);
    let html = '';
    for (let i = 0; i < count; i++) {
      html += `<span class="tick${i % 5 === 0 ? ' major' : ''}"></span>`;
    }
    el.innerHTML = html;
  });
}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
