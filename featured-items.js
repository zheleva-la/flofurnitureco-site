/*
  FEATURED PIECES — shown in "A few recent pieces / From the workshop" on the homepage.

  To change what shows: edit the 3 items below (title, price, the Etsy link
  for that specific listing — right-click the item on Etsy and "copy link" —
  and a photo already sitting in the images/ folder).

  Note: this list is set by hand, not pulled live from Etsy. A static site like
  this one can't call Etsy's shop API directly from the browser (Etsy blocks
  that for security), so someone — you, or a developer — needs to update this
  file when a new piece should be featured. It takes under a minute.
*/

const FEATURED_ITEMS = [
  {
    title: "Hand Made Hall Stand Bootroom Unit",
    price: "£1,095.00",
    url: "https://www.etsy.com/uk/listing/4506209872/hand-made-hall-stand-bootroom-unit-with?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_2&frs=1&crt=1&logging_key=3eab930873820fa171019a57d2e0dd5261f8dc49%3A4506209872",
    photo: "images/green-coat-shoe-bench.jpg",
    alt: "Green hall stand bootroom unit with coat hooks and shoe cubbies"
  },
  {
    title: "Rustic Hallway Bench and Coat Rack",
    price: "£715.00+",
    url: "etsy.com/uk/listing/4506516475/rustic-hallway-bench-and-coat-rack?click_key=ca86f228b5bfc2974c2e9f65e7b5d4c3a60d4832%3A4506516475&click_sum=c25e23dc&sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_7&frs=1",
    photo: "images/pine-show-bench.jpg",
    alt: "Natural pine hall settle with coat hooks and bench seat"
  },
  {
    title: "Handmade Solid Pine 'L Shape' Monks Bench",
    price: "£895.00",
    url: "https://www.etsy.com/uk/listing/4512058611/handmade-solid-pine-l-shape-monks-bench?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_4&frs=1&logging_key=c63e6b354491c348e16e7e401480d4021805ba0b%3A4512058611",
    photo: "images/corner-bench.jpg",
    alt: "White L-shaped corner storage bench with hinged bench tops"
  }
];


function renderFeaturedItems() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  grid.innerHTML = FEATURED_ITEMS.slice(0, 3).map(item => `
    <article class="card">
      <div class="thumb"><img src="${item.photo}" alt="${item.alt || item.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;"></div>
      <div class="card-body">
        <span class="tag">Free UK delivery</span>
        <h3>${item.title}</h3>
        <span class="price">${item.price}</span>
        <a class="card-link" href="${item.url}" target="_blank" rel="noopener">View on Etsy →</a>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderFeaturedItems);
