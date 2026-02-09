# Mohan Sirvi — Software Engineer Portfolio

A modern, responsive, and elegant portfolio website showcasing professional experience, technical skills, and featured projects. Built with clean HTML, CSS, and JavaScript.

## 🌟 Features

- **Hero Section** — Eye-catching introduction with gradient typography and profile image
- **Technical Skills** — Organized by category (Backend, Cloud, Database, Frontend, Tools, Concepts)
- **Professional Experience** — Detailed career timeline with achievements and tech stack
- **Featured Projects** — Showcase your best work with descriptions and links
- **Contact Section** — Multiple ways to get in touch (email, phone, contact form)
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Modern Aesthetics** — Glassmorphism, smooth animations, gradient effects, and hover states
- **Dark Theme** — Easy on the eyes with a professional color scheme

## 🚀 Quick Start

### Open Locally
Simply double-click `index.html` to open in your browser.

### Serve Locally (Python)
```bash
cd d:\AppDev\App
python -m http.server 8000
# then open http://localhost:8000
```

## 📝 Customization Guide

### 1. Update Your Profile
Edit `script.js` and update the `PROFILE` object:
```javascript
const PROFILE = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio here...',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  email: 'your.email@example.com',
  phone: '+1 (555) 555-5555',
  resume: 'resume.pdf',
  photo: 'image.jpg'  // path to your profile image
}
```

### 2. Add Your Projects
In `script.js`, update the `PROJECTS` array:
```javascript
const PROJECTS = [
  {
    title: 'Project Title',
    desc: 'Brief description of your project',
    link: 'https://github.com/your-username/project'
  },
  // Add more projects...
]
```

### 3. Customize Technical Skills
In `script.js`, update the `SKILLS` object to match your expertise:
```javascript
const SKILLS = {
  backend: ['Your', 'Technologies', 'Here'],
  cloud: ['Azure', 'AWS', 'etc'],
  // ... more categories
}
```

### 4. Add Your Experience
In `script.js`, update the `EXPERIENCE` array with your job history:
```javascript
const EXPERIENCE = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    duration: 'Start - End',
    location: 'City, Country',
    highlights: ['Achievement 1', 'Achievement 2'],
    skills: ['Skill1', 'Skill2']
  },
  // Add more positions...
]
```

### 5. Replace Your Files
- **Profile Image**: Replace `mohan.jpg` with your photo (or update the `photo` path in `script.js`)
- **Resume**: Replace `resume.pdf` with your actual resume

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Portfolio data and interactivity
├── mohan.jpg           # Your profile photo
├── resume.pdf          # Your resume (downloadable)
├── images/
│   └── profile.svg     # Placeholder profile image
└── README.md           # This file
```

## 🎨 Design Highlights

- **Glassmorphism**: Semi-transparent cards with blur effects
- **Gradient Text**: Modern text effects on headings
- **Smooth Animations**: Hover effects with transforms and transitions
- **Dark Theme**: Professional dark background with accent colors (Purple & Cyan)
- **Responsive Grid Layouts**: Auto-adjusting columns for any screen size

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔗 Connect Your Links

Make sure to update:
- GitHub URL in `PROFILE.github`
- LinkedIn URL in `PROFILE.linkedin`
- Email in `PROFILE.email`
- Phone number in `PROFILE.phone`

## 📤 Deploy

### GitHub Pages
1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Select **main** branch as source
4. Your site will be live at `https://your-username.github.io/portfolio`

### Other Hosting
- **Netlify**: Drag & drop your folder
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: Use `firebase deploy`

## 💡 Tips

- Keep your bio concise and impactful (2-3 sentences)
- List projects that best represent your skills
- Use clear, professional language in achievements
- Update your resume regularly
- Test on mobile devices before sharing
- Use high-quality profile photo (square format, 220x220px+)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styles with gradients, filters, and animations
- **Vanilla JavaScript**: No dependencies, fast and lightweight

## 📄 License

Feel free to use this template for your own portfolio!

---

**Made with ❤️ for developers who want an impressive online presence.**
