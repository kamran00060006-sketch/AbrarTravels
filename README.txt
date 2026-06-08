# AbrarTravels Visa Services Website

AbrarTravels is a visa services website providing information about tourist and business
visa services, destinations, team members, testimonials, and contact details.

---

## Project Structure

- index.html  → Main website page
- style.css   → Styling and layout (blue & gold travel theme)
- script.js   → Interactivity (mobile menu toggle, smooth scroll, form handling)
- README.txt  → This documentation file

---

## Bugs Fixed (from original version)

1. index.html referenced "styles.css" but the actual file is "style.css" — fixed.
2. Contact form had no submit handling — added JS validation and success feedback.
3. Hero section had no fallback background color — added gradient fallback.
4. .nav-toggle button had no CSS styles — added full mobile toggle styles.
5. Mobile nav was never hidden by default — fixed so toggle actually works.
6. README referenced wrong filenames (styles.css, README.md) — corrected.

---

## Deployment Options

### 1. GitHub Pages
1. Push this repository to GitHub.
2. Go to Settings → Pages.
3. Select branch "main" and root directory "/".
4. Save, and your site will be live at:
   https://yourusername.github.io/abrartravels

### 2. Render (Static Site Hosting)
1. Log in to https://render.com
2. Click New Web Service → Static Site.
3. Connect your GitHub account and select this repository.
4. Configure:
   - Name: abrartravels
   - Environment: Static Site
   - Branch: main
   - Build Command: (leave empty)
   - Publish Directory: /
5. Deploy — Render gives you a live URL like:
   https://abrartravels.onrender.com

---

## Custom Domain
1. Register a domain (e.g., abrartravels.com).
2. Add it in Render → Settings → Custom Domain.
3. Update DNS records to point to Render.
4. Render provides free SSL (HTTPS).

---

## Local Development

  # Clone repo
  git clone https://github.com/yourusername/abrartravels.git
  cd abrartravels

  # Open index.html in your browser directly
  # (No build step needed — it's a plain static site)

---

## Adding a Hero Image
Place a file named "travel-hero.jpg" in the same folder as index.html.
If no image is present, the hero falls back to a blue gradient background.

---

## Contact Form
The form currently shows a success message on submission.
To actually send emails, integrate a service such as:
- Formspree (https://formspree.io) — free, no backend needed
- EmailJS (https://emailjs.com)
- Your own backend/API endpoint
