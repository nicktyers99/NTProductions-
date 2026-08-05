# NT Productions Website

A single-page site for NT Productions (DJ, Mirror Photo Booth, 360 Video Booth & Light-Up Number hire), built with plain HTML/CSS/JS — no build step, no framework, works anywhere.

## Structure

```
index.html        Page content
css/style.css      All styling
js/script.js       Nav menu, sticky header, gallery carousel, accordion, contact form
assets/img/        Photos & logo (pulled from the NT Productions brochure)
```

## Things to finish before going live

### 1. Connect the contact form
The form in the "Book Your Event Today" section posts to Formspree so submissions land in your inbox — it just needs your own endpoint:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy the endpoint it gives you (looks like `https://formspree.io/f/abc123`).
3. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real endpoint.
4. Formspree will send a confirmation email the first time someone submits — click the link to activate the form.

Until this is done, the form shows a message telling visitors it isn't connected yet instead of silently failing.

### 2. Link the Google Reviews button
`index.html` has a **"Review Us On Google"** button (`id="googleReviewBtn"`) with a placeholder `href="#"`. Replace it with your actual Google Business review link (find it in your Google Business Profile → "Ask for reviews" → copy link).

The "5.0 ★★★★★" summary is a static placeholder — update the number if you want it to reflect a real, current review count rather than an estimate.

### 3. Double-check contact details
Phone, email, Instagram (`@nt_productionss`) and Facebook are filled in throughout from the brochure. Search the file for `0418 414 616` / `nt_productions@outlook.com` if any of these ever change.

### 4. Optional: swap/add photos
All images live in `assets/img/`. Filenames are descriptive (e.g. `hero-dj.jpg`, `gallery-formal.jpg`, `number-21.jpg`) — replace any file with a same-named new image to update it without touching the HTML.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

Any static host works. Easiest options:

- **GitHub Pages**: push this repo, enable Pages on the `main` branch in repo settings.
- **Netlify / Vercel**: drag-and-drop the folder, or connect the repo — no build command needed.

## Credits

Content and photography sourced from the NT Productions service brochure.
