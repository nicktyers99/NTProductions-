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

### 1. Contact form — connected ✅
The form in the "Book Your Event Today" section posts to Formspree (`https://formspree.io/f/xgaakbqa`), so submissions land in your inbox. If you ever need to reconnect it to a different Formspree form, update the `action` attribute on the `<form>` in `index.html`:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xgaakbqa" method="POST">
```
Note: if nobody has submitted the form yet, Formspree will send a confirmation email on the *first* submission — click the link in that email to fully activate it.

### 2. Link the Google Reviews button
`index.html` has a **"Review Us On Google"** button (`id="googleReviewBtn"`) with a placeholder `href="#"`. Replace it with your actual Google Business review link (find it in your Google Business Profile → "Ask for reviews" → copy link).

The "5.0 ★★★★★" summary is a static placeholder — update the number if you want it to reflect a real, current review count rather than an estimate.

### 3. Double-check contact details
Phone, email, Instagram (`@nt_productionss`) and Facebook are filled in throughout from the brochure. Search the file for `0418 414 616` / `nt_productions@outlook.com` if any of these ever change.

### 4. Optional: swap/add photos
All images live in `assets/img/`. Filenames are descriptive (e.g. `hero-dj.jpg`, `gallery-crowd.jpg`, `number-21.jpg`) — replace any file with a same-named new image to update it without touching the HTML.

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
