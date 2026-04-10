# Quick Start Guide 🚀

## What You Have

Your portfolio comes with all the essential features for a modern developer portfolio:

### Pre-built Sections
✅ **Hero** - Eye-catching landing section
✅ **About** - Your bio with CV download
✅ **Skills** - Animated skill display
✅ **Projects** - Project showcase with links
✅ **Education** - Timeline and certifications
✅ **Contact** - Contact form and social links

### Features
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive (mobile to desktop)
- ✨ Smooth animations
- 📄 CV export (PDF & Word)
- 📧 Contact form ready for backend
- 💾 Persists user preferences

## Immediate Actions

### 1. Start the Server (Already Running!)
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser

### 2. Update Your Information

**Step by step:**

1. **Replace Your Name**
   - Open `src/components/Hero.jsx`
   - Find line 21: `<span className="gradient-text">Himanshu</span>`
   - Replace "Himanshu" with your first name
   - Find line 22: `<span className="gradient-text">Gurjar</span>`
   - Replace "Gurjar" with your last name

2. **Update Your Title**
   - Same file, around line 28
   - Change "Full Stack Developer and Cyber Security" to your title

3. **Edit Your Bio**
   - File: `src/components/About.jsx`
   - Update the biography section (around line 41)
   - Change or remove the skill tags

4. **Add Your Skills**
   - File: `src/components/Skills.jsx`
   - Update skill names and proficiency levels (1-100)

5. **Update Projects**
   - File: `src/components/Projects.jsx`
   - Edit project titles, descriptions, and technologies
   - Add your GitHub repository links
   - Add live demo links

6. **Update Contact Info**
   - File: `src/components/Contact.jsx`
   - Change email address (line 61)
   - Update GitHub profile link (line 82)
   - Update LinkedIn profile link (line 63)

### 3. Verify Your Changes

1. **In Browser:**
   - Check all sections render correctly
   - Test dark/light mode toggle
   - Try clicking GitHub/LinkedIn links
   - Test CV download
   - Fill out contact form (shows demo response)

2. **Check Mobile:**
   - Open DevTools (F12)
   - Click device toolbar (Ctrl+Shift+M)
   - Test on different screen sizes

## Customization Quick Tips

### Colors
Change theme colors in `src/index.css`:
- Dark mode: `:root` variables
- Light mode: `.light-mode` variables

### Add Your Photo
Replace the "HG" placeholder in About section:
1. Replace in `src/components/About.jsx` line 24 `<span>HG</span>`
2. Add an image: `<img src="/path/to/photo.jpg" alt="Your Name" />`

### Change Fonts
Update Google Fonts import in `src/index.css` line 1

### Modify Social Links
Update all URLs in `src/components/Contact.jsx` to your profiles

## Next: Connect Backend (Optional)

When ready to handle contact form submissions:

1. Set up Node.js/Express backend
2. Set up MongoDB database
3. Create API endpoint: `POST /api/contact`
4. Update `handleSubmit` in `src/components/Contact.jsx`

Example backend endpoint:
```javascript
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Save to MongoDB
  // Send email notification (optional)
  res.json({ success: true });
});
```

## Before Deployment

### Checklist
- [ ] All personal information updated
- [ ] All links working and pointing to correct URLs
- [ ] CV files created or generated
- [ ] Tested on mobile devices
- [ ] Dark and light modes working
- [ ] No console errors (F12 → Console)
- [ ] All animations smooth

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy Options

**Option 1: Vercel (Easiest)**
- Sign up at vercel.com
- Import your GitHub repository
- Auto-deploys on every push

**Option 2: Netlify**
- Sign up at netlify.com
- Connect GitHub repository
- Configure build settings (automatic)

**Option 3: Traditional Hosting**
- Upload the `dist/` folder after build

## File Structure Quick Guide

```
src/
├── components/          ← Edit your content here
│   ├── About.jsx       ← Bio and CV
│   ├── Contact.jsx     ← Contact form
│   ├── Education.jsx   ← Education/Certs
│   ├── Hero.jsx        ← Hero/Intro
│   ├── Navbar.jsx      ← Navigation
│   ├── Projects.jsx    ← Your projects
│   └── Skills.jsx      ← Your skills
│
├── context/
│   └── ThemeContext.jsx ← Theme management
│
├── utils/
│   └── cvGenerator.js  ← CV export
│
├── App.jsx             ← Main app
├── main.jsx            ← Entry point
└── index.css           ← Global styles
```

## Useful Commands

```bash
# Development
npm run dev             # Start dev server

# Production
npm run build           # Create production build
npm run preview         # Test production locally
npm run lint            # Check code quality

# Cleanup
npm install             # Install dependencies
rm -rf node_modules     # Remove dependencies
```

## FAQ

**Q: How do I add a real photo?**
A: Replace the "HG" text in About.jsx with an `<img>` tag pointing to your photo.

**Q: Can I add more projects?**
A: Yes! Edit the `projects` array in `src/components/Projects.jsx`

**Q: How do I change colors?**
A: Edit CSS variables in `src/index.css` for both dark and light themes.

**Q: Works offline?**
A: After build, the website can be hosted anywhere that serves static files.

**Q: How to hide a section?**
A: Comment it out in `src/App.jsx` or set `display: none` in CSS.

## Need Help?

Check these files for more details:
- `PROJECT_SETUP.md` - Complete project documentation
- `FEATURES.md` - Feature verification checklist
- `README.md` - Original project info

## You're All Set! 🎉

Your portfolio is ready. Now just:
1. Update your information
2. Test it out
3. Deploy it
4. Share with employers

Good luck with your portfolio! 🚀
