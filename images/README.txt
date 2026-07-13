HOW TO ADD REAL PHOTOS
=======================

1. Save your photos in this folder (images/). Landscape orientation works best
   (roughly 4:3, e.g. 1600x1200px). Keep file sizes reasonable — export at
   "web quality" (around 80% JPEG) so the site loads quickly on phones.

2. Open gallery-items.js in the main site folder.

3. For each photo, change a placeholder entry from this:

     { src: null, alt: "Photo placeholder — add project photo" }

   to this:

     { src: "images/hall-stand-winchester.jpg", alt: "Oak hall stand, Winchester" }

   The "alt" text is what screen readers announce and what shows if an image
   fails to load — a short, honest description is fine (it can double as a
   caption later).

4. Add or remove entries in the GALLERY_PHOTOS array to match how many photos
   you have. The carousel arrows and counter update automatically.

That's it — no other files need to change.


HOMEPAGE HERO PHOTO
====================

The large image at the top of the homepage (index.html) is also a
placeholder for now. To replace it:

1. Save a good landscape photo of a finished piece in this images/ folder
   (aim for at least 1800px wide so it stays sharp on big screens).

2. Open index.html and find the section that starts with:

     <!-- HERO -->
     <section class="hero-full">

3. Inside <div class="hero-full-media">, replace the placeholder <div
   class="ph-icon">...</div> block with:

     <img src="images/your-photo.jpg" alt="A short description of the piece">

4. Delete the "Placeholder — add product photo" badge line just below it —
   it's only there as a reminder while it's still a placeholder.

No other changes needed — the text overlay and buttons will sit on top of
whatever photo you add.

