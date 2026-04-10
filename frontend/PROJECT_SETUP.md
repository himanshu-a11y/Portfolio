# Portfolio Website

A modern, fully-featured MERN stack portfolio website showcasing projects, skills, education, and contact capabilities.

## Features

### ✨ Frontend Features
- **Hero Section** - Animated introduction with typewriter effect and call-to-action buttons
- **About Me** - Professional bio with stats and downloadable CV (PDF & Word formats)
- **Skills Section** - Animated skill bars with categorization and proficiency levels
- **Projects Showcase** - Interactive project cards with GitHub and demo links
- **Education & Timeline** - Visual timeline of education and certifications
- **Contact Form** - Functional form with validation for inquiries
- **Dark/Light Mode** - Theme toggle with local storage persistence
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Smooth Animations** - Framer Motion animations and scroll triggers

### 🛠️ Technical Stack
- **Frontend**: React 19, Vite, Framer Motion, Lucide React
- **Styling**: Modern CSS with CSS variables and gradients
- **Animation**: Framer Motion for interactive elements
- **Icons**: Lucide React + Inline SVGs
- **CV Export**: jsPDF and docx libraries for PDF/Word generation

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section with CV downloads
│   ├── Contact.jsx          # Contact form
│   ├── Education.jsx        # Education and certifications
│   ├── Hero.jsx             # Hero section
│   ├── Navbar.jsx           # Navigation with theme toggle
│   ├── Projects.jsx         # Project showcase
│   └── Skills.jsx           # Skills section
├── context/
│   └── ThemeContext.jsx     # Dark/Light mode context
├── utils/
│   └── cvGenerator.js       # PDF and Word CV generation
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point with ThemeProvider
├── index.css                # Global styles with theme variables
```

## Key Features Implementation

### Theme System
The portfolio includes a global theme context that manages dark and light modes:
- Uses CSS custom properties (variables) for dynamic theming
- Persists user preference to localStorage
- Respects system preference on first visit

### CV Download
Users can download their CV in two formats:
- **PDF Format** - High-quality document
- **Word Format** (.docx) - Editable document

### Contact Form
The contact form includes:
- Form validation
- Success/error notifications
- Ready for backend integration

### Animations
- Section entrance animations on scroll
- Smooth hover effects on interactive elements
- Animated skill progress bars
- Project card hover animations
- Button and link transitions

## Customization

### Update Personal Information

Edit the component files to add your information:
- **Hero.jsx** - Your name, title, and overview
- **About.jsx** - Bio, stats, and CV data
- **Skills.jsx** - Your skills and proficiency levels
- **Projects.jsx** - Your projects with links
- **Education.jsx** - Education and certifications
- **Contact.jsx** - Contact information

### Customize Colors

Modify CSS variables in `index.css`:
- Dark theme variables (`:root`)
- Light theme variables (`.light-mode`)

## Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Code Quality
npm run lint:fix     # Fix linting issues
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized bundle size with code splitting
- Lazy loading for images and components
- CSS animations for smooth performance
- Efficient re-renders with React optimization

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for keyboard users

## Deployment

### Frontend Deployment Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect your GitHub repository
   - Auto-deploy on push

3. **GitHub Pages**
   ```bash
   npm run build
   # Deploy the dist/ folder
   ```

### Environment Variables

Create a `.env` file for any environment-specific settings:
```
VITE_API_URL=https://your-backend-api.com
```

## Future Enhancements

- [ ] Backend integration for contact form (Node.js + MongoDB)
- [ ] Blog section
- [ ] Project filtering and search
- [ ] Social media links
- [ ] Analytics integration
- [ ] Performance optimizations
- [ ] SEO improvements
- [ ] Internationalization (i18n)

## Contributing

Feel free to fork and customize this portfolio for your needs.

## License

This project is open source and available under the MIT License.

## Contact

Have questions or suggestions? Feel free to reach out!

- Email: harsanahimanshu21@gmail.com
- GitHub: [himanshu-a11y](https://github.com/himanshu-a11y)
- LinkedIn: [Himanshu Gurjar](https://linkedin.com/in/himanshu-gurjar)

---

**Happy coding and best of luck with your portfolio! 🚀**
