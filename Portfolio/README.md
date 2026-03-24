# Tanishk Gupta — Portfolio Website

A clean, modern, recruiter-friendly portfolio website built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no build tools, deploys instantly on GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML file (all sections)
├── style.css        # All styles (light + dark theme)
├── script.js        # Animations, theme toggle, interactions
├── resume.pdf       # ← ADD YOUR RESUME HERE
└── README.md
```

---

## ✨ Features

- **Dark / Light Mode** — toggle persists via localStorage
- **Sticky Navbar** with active section highlighting
- **Scroll animations** via IntersectionObserver
- **Typing animation** on hero title
- **Responsive** — works on mobile, tablet, desktop
- **Resume download** button
- **Contact form** (client-side demo)
- **All sections**: Hero, About, Skills, Projects, Experience, Education, Certifications, Achievements, GitHub, Contact

---

## 🚀 Deploy on GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `your-username.github.io`  
   *(e.g., `Tanishk2534.github.io`)* for a root domain, **or** any name for a project page.
3. Set visibility to **Public**
4. Click **Create repository**

### Step 2 — Add your files

```bash
# Clone the repo
git clone https://github.com/Tanishk2534/Tanishk2534.github.io.git
cd Tanishk2534.github.io

# Copy your portfolio files here
cp /path/to/portfolio/* .

# Add your resume PDF
cp /path/to/your-resume.pdf resume.pdf
```

### Step 3 — Push to GitHub

```bash
git add .
git commit -m "🚀 Launch portfolio"
git push origin main
```

### Step 4 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → `/ (root)` → **Save**
4. Wait ~2 minutes, then visit: `https://Tanishk2534.github.io`

---

## 📸 Add Your Profile Photo

Replace the photo placeholder in `index.html`:

```html
<!-- Find this div -->
<div class="photo-frame">
  <div class="photo-placeholder">
    ...
  </div>
</div>

<!-- Replace with -->
<div class="photo-frame">
  <img src="photo.jpg" alt="Tanishk Gupta" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

Then add your photo file (e.g., `photo.jpg`) to the project folder.

---

## 🔗 Update Project GitHub Links

In `index.html`, search for `href="https://github.com/Tanishk2534"` inside project cards and replace with direct repo URLs once they're public.

---

## 🎨 Customization

| What | Where |
|------|-------|
| Colors & accent | `style.css` → `:root` variables |
| Fonts | `<link>` in `<head>` of `index.html` |
| Content | `index.html` — all text is clearly labeled |
| Add new project | Copy a `.project-card` block in `index.html` |
| Add achievement | Copy an `.achieve-card` block |

---

## 📬 Contact Form (Real Emails)

The current form shows a success message (demo only). To receive real emails, replace the form submission handler in `script.js` with one of:

- **[Formspree](https://formspree.io)** — free tier, no server needed
- **[EmailJS](https://www.emailjs.com)** — client-side email sending
- **[Web3Forms](https://web3forms.com)** — simple & free

### Formspree example:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 📄 License

MIT — free to use and customize for personal use.
