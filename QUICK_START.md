# Portfolio Quick Start Guide

## 🚀 Your Portfolio is Running!

**Development Server**: http://localhost:5173/

---

## ⚡ Quick Customization (5 Minutes)

### 1. Update Your Name and Title
**File**: `src/components/sections/Hero.jsx`

Find and replace:
```jsx
// Line 47
<span className="text-gradient">Your Name</span>

// Line 59
Full-Stack Developer & Creative Problem Solver

// Line 68-71
Your description here...
```

### 2. Update Social Links
**File**: `src/components/sections/Hero.jsx` (Lines 109-131)

Replace:
- `https://github.com/yourusername`
- `https://linkedin.com/in/yourusername`
- `your.email@example.com`

**Also update in**: `src/components/layout/Header.jsx` (Lines 28-32)

### 3. Update Page Title
**File**: `index.html` (Line 9)

Replace:
```html
<title>Your Name - Full-Stack Developer | React & Node.js Specialist</title>
```

---

## 📝 Add Your Content (30 Minutes)

### Projects
**File**: `src/data/projects.js`

Replace the 6 sample projects with your own:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Brief description",
  tags: ["React", "Node.js", "MongoDB"],
  metrics: [
    { label: "Impact", value: "45% increase" }
  ],
  links: {
    live: "https://...",
    github: "https://github.com/..."
  }
}
```

### Skills
**File**: `src/data/skills.js`

Update with your actual skills and proficiency levels (0-100).

### Experience
**File**: `src/data/experience.js`

Add your work history with companies, roles, and achievements.

### Testimonials
**File**: `src/data/testimonials.js`

Add real testimonials from clients or colleagues.

---

## 🎨 Customize Colors

**File**: `src/styles/variables.css`

Change brand colors:
```css
--color-accent-purple: #8b5cf6;  /* Your primary brand color */
--color-accent-gold: #d4af37;    /* Your accent color */
--color-accent-green: #10b981;   /* Success color */
```

---

## 📸 Add Images

Create these folders in `public/`:
```
public/
├── images/
│   ├── projects/          # Project screenshots
│   ├── companies/         # Company logos
│   ├── testimonials/      # Testimonial photos
│   └── about/            # Your professional photo
```

Then reference them in your data files:
```javascript
image: "/images/projects/my-project.jpg"
```

---

## 🏗️ Build Remaining Sections

We've built the foundation. Next, we'll create:

1. **Stats Section** - Key metrics display
2. **About Section** - Your story with photo
3. **Projects Section** - Interactive project showcase
4. **Skills Section** - Visual skill representation
5. **Experience Section** - Professional timeline
6. **Contact Section** - Working contact form

**Let me know when you're ready to build these!**

---

## 🔧 Development Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new packages
npm install package-name
```

---

## 📱 Test Responsiveness

1. Open http://localhost:5173/
2. Press `F12` to open DevTools
3. Click the device toolbar icon
4. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1280px

---

## ✅ Pre-Launch Checklist

Before deploying:
- [ ] Updated all personal information
- [ ] Added real projects (minimum 3)
- [ ] Updated skills and experience
- [ ] Added professional photo
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Optimized images
- [ ] Updated meta tags in `index.html`

---

## 🚀 Deploy When Ready

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

### Netlify (Alternative - Free)
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 💡 Pro Tips

1. **Update Regularly**: Add new projects as you complete them
2. **Use Real Metrics**: "Increased performance by 60%" is better than "Made it faster"
3. **Quality Photos**: Use high-resolution, professional images
4. **Test Everything**: Click every link, test every form
5. **Get Feedback**: Share with friends before going live

---

## 🆘 Need Help?

### Common Issues

**Port already in use?**
```bash
# Kill the process and restart
npm run dev
```

**CSS not loading?**
- Check that `src/styles/variables.css` exists
- Verify import path in `src/index.css`

**Images not showing?**
- Images must be in `public/` folder
- Reference with `/images/...` (leading slash)

---

## 📚 Documentation

- **Full Development Plan**: `.agent/portfolio-development-plan.md`
- **Build Summary**: `BUILD_SUMMARY.md`
- **React Docs**: https://react.dev/
- **Framer Motion**: https://www.framer.com/motion/

---

## 🎯 What's Next?

**Option 1**: Customize the existing Hero section with your info  
**Option 2**: Build the next section (Stats, About, or Projects)  
**Option 3**: Add your project data and images  

**Just let me know what you'd like to do next!** 🚀

---

*Your portfolio foundation is complete and running. Time to make it uniquely yours!*
