/*
  GALLERY PHOTOS — powers the tile grid on gallery.html.

  Each entry becomes one tile. Clicking a tile opens a full-screen lightbox
  that can be scrolled through with arrow keys / swipe / on-screen arrows.

  To add or change a photo:
    1. Put the file in the images/ folder.
    2. Add an entry below with src (the file path) and alt (a short description).
    3. Optional: caption is shown under the thumbnail and as the lightbox title.

  Alt text = accessibility (what screen readers announce, what shows if the
  photo fails to load). Caption = optional visible label.
*/

const GALLERY_PHOTOS = [
  { src: "images/hero.jpg", alt: "Grey-blue hall stand with coat hooks, cubbies and bench, installed in a customer's home", caption: "Grey-blue hall stand — installed" },
  { src: "images/black-coat-shoe-bench.jpg", alt: "Black hall stand bootroom unit with coat hooks and shoe cubbies", caption: "Black hall stand bootroom unit" },
  { src: "images/pine-show-bench.jpg", alt: "Natural pine hall settle with coat hooks and bench seat", caption: "Natural pine hall settle" },
  { src: "images/green-coat-shoe-bench.jpg", alt: "Sage green hall stand with tall cupboard, coat hooks and shoe cubbies", caption: "Sage green hall stand with cupboard" },
  { src: "images/corner-bench.jpg", alt: "White L-shaped corner storage bench with hinged bench tops", caption: "White L-shape corner bench" },
  { src: "images/cream-small-coat-shoe-bench.jpg", alt: "Small cream coat and shoe storage bench with hooks", caption: "Cream coat and shoe bench" },
  { src: "images/blue-coat-shoe.jpg", alt: "Navy blue coat and shoe storage unit with cubby shelves", caption: "Navy coat and shoe storage" },
  { src: "images/blue-shoe-bench.jpg", alt: "Navy blue shoe storage bench with cubby shelves and oak top", caption: "Navy shoe storage bench" },
  { src: "images/white-storage-bench.jpg", alt: "White storage bench with hinged bench top", caption: "White storage bench" },
  { src: "images/green-low-arm-storage.jpg", alt: "Sage green low-arm storage bench with pine seat", caption: "Sage low-arm storage bench" },
  { src: "images/cream-console.jpg", alt: "Cream console table with a dark stained pine top", caption: "Cream console table" },
  { src: "images/kitchen-island.jpg", alt: "Cream kitchen island with drawers, a cupboard and a pine worktop", caption: "Kitchen island" },
  { src: "images/cream-bookshelf.jpg", alt: "Cream bookshelf with oak shelf edges, styled with books and ornaments", caption: "Cream bookshelf" },
  { src: "images/corner-bookshelf.jpg", alt: "White corner bookshelf with oak shelf edges, styled with books", caption: "Corner bookshelf" },
  { src: "images/pine-bar.jpg", alt: "Rustic stained pine home bar", caption: "Rustic pine home bar" }
];

function renderTileGrid() {
  const grid = document.getElementById('tile-grid');
  if (!grid) return;

  grid.innerHTML = GALLERY_PHOTOS.map((p, i) => `
    <figure class="tile">
      <a href="${p.src}" class="glightbox" data-gallery="portfolio" data-title="${p.caption || p.alt || ''}">
        <img src="${p.src}" alt="${p.alt || ''}" loading="${i < 3 ? 'eager' : 'lazy'}">
      </a>
      ${p.caption ? `<figcaption>${p.caption}</figcaption>` : ''}
    </figure>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderTileGrid);
