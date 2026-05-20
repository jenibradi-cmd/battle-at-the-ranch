# Battle at the Ranch — Landing Page

A static, cinematic invitation page for Eli &amp; Sawyer's graduation event,
**Battle at the Ranch** — Saturday, May 30, 2026 • Cuero, Texas.

Plain HTML / CSS / JS. No build step. No backend. Drop it on GitHub Pages.

---

## Project structure

```
Landing Page_Eli_Grad_2026/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── video/
    │   └── Landing Page_Eli_Grad_2026.mov   ← hero background video
    └── images/
        └── IMG_1980.jpeg                    ← invitation / fallback image
```

---

## 1. Where to place the hero video

Put the `.mov` file here:

```
assets/video/Landing Page_Eli_Grad_2026.mov
```

If you swap it for a different file, update **both** `<source>` tags inside
the `<video>` element in `index.html` (search for `HERO VIDEO FILE`).

> **Tip — better browser support:** browsers vary on `.mov` playback. If the
> video doesn't autoplay on some devices, export an `.mp4` (H.264 + AAC) using
> the same filename and update the source. The fallback poster image will
> always show until/unless the video plays.

## 2. Where to place the invitation image

Put the invite JPEG here:

```
assets/images/IMG_1980.jpeg
```

This image is used for:

- The hero **poster** (shown while the video loads, or if it fails)
- The hero **CSS fallback background**
- Social share preview (Open Graph `og:image`)

## 3. How to replace the RSVP and waiver links

Open `index.html` and replace the placeholders in **two** places — the hero
buttons AND the matching buttons in the "Report for Duty" section near the
bottom:

```html
<a class="btn btn--primary" href="PLACEHOLDER_RSVP_LINK"   ...>RSVP Now</a>
<a class="btn btn--ghost"   href="PLACEHOLDER_WAIVER_LINK" ...>Complete Waiver</a>
```

Replace `PLACEHOLDER_RSVP_LINK` with your RSVP URL (Google Form, Partiful,
Paperless Post, etc.) and `PLACEHOLDER_WAIVER_LINK` with the paintball
company's waiver URL.

Search the file for `REPLACE:` to find every spot.

## 4. How to publish on GitHub Pages

1. Create a new repository on GitHub (public or private — Pages works on both).
2. Push this folder's contents to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Battle at the Ranch — landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. On GitHub, open the repo → **Settings** → **Pages**.
4. Under **Build and deployment**, set:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `/ (root)`
5. Save. Within a minute or two your site will be live at
   `https://<your-username>.github.io/<your-repo>/`.

> The site uses **relative paths** for the video and image, so it works
> identically locally and on Pages.

### Optional — use a custom domain

Add a `CNAME` file to the project root containing your domain (e.g.
`battle.eligarrett.com`), then point a CNAME DNS record at
`<your-username>.github.io`. GitHub Pages handles HTTPS automatically.

---

## Local preview

Just open `index.html` in a browser. Or, for proper video playback during
local testing, serve the folder:

```bash
# Python 3
python3 -m http.server 8080

# Then visit http://localhost:8080
```

---

## Editing notes

- Colors live as CSS variables at the top of `styles.css` (`--red`, `--navy`,
  `--ink`, etc.). Change them in one place to retheme.
- All copy lives in `index.html`. No templating, no JS rendering.
- Fonts come from Google Fonts (Cormorant Garamond + Inter). Remove the
  `<link>` in `index.html` if you want a fully offline / no-CDN page.
