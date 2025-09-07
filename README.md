# Data Analytics Portfolio Website

A modern, responsive portfolio website showcasing data analytics dashboards and data engineering projects. Built with Next.js, React, and Tailwind CSS.

![Website Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Data+Analytics+Portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark mode support
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Engaging UI elements and smooth animations
- **Project Showcase**: Detailed presentation of analytics dashboards and data pipelines
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Structured for search engine optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Footer.js          # Footer with social links
│   └── Layout.js          # Main layout wrapper
├── pages/
│   ├── _app.js           # Next.js app component
│   ├── index.js          # Homepage with hero and featured projects
│   ├── about.js          # About page with experience and skills
│   └── projects.js       # Projects showcase page
└── styles/
    └── globals.css       # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-analytics-portfolio.git
   cd data-analytics-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

1. **Update Header Brand**
   - Edit `src/components/Header.js`
   - Change the brand name from "Data Analytics Pro" to your name

2. **Homepage Content**
   - Edit `src/pages/index.js`
   - Update hero section, stats, and featured projects

3. **About Page**
   - Edit `src/pages/about.js`
   - Add your experience, education, and skills

4. **Projects**
   - Edit `src/pages/projects.js`
   - Replace example projects with your actual work

5. **Contact Information**
   - Update social media links in `src/components/Footer.js`
   - Add your email and LinkedIn URLs throughout the site

### Styling Customization

1. **Colors**
   - Edit `tailwind.config.js` to change the color scheme
   - Modify CSS custom properties in `src/styles/globals.css`

2. **Fonts**
   - Update font imports in `src/styles/globals.css`
   - Modify font family in `tailwind.config.js`

## 📊 Featured Sections

### Homepage
- Hero section with call-to-action
- Key statistics and achievements
- Skills overview with icons
- Featured project previews
- Client testimonials
- Contact section

### About Page
- Professional profile and photo
- Detailed experience timeline
- Technical skills breakdown
- Education and certifications
- Personal interests

### Projects Page
- Project statistics dashboard
- Categorized project showcase
- Detailed project cards with:
  - Technology stack
  - Key features
  - Performance metrics
  - Links to code and live demos

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure settings

2. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Other Deployment Options

- **Netlify**: Drag and drop the `build` folder after running `npm run build`
- **AWS Amplify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `npm run export` to generate static files

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup
- Optimized images with alt text
- Fast loading times with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing the website:

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- 🐙 GitHub: [github.com/yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ If you found this helpful, please give it a star on GitHub!

## 🔧 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs the linter to check for code issues

## 🌟 Features to Add

Future enhancements you might consider:

- [ ] Blog section for technical articles
- [ ] Interactive data visualizations
- [ ] Contact form with email integration
- [ ] Multi-language support
- [ ] Advanced animations and transitions
- [ ] Analytics tracking (Google Analytics)
- [ ] Newsletter signup
- [ ] Project filtering and search
- [ ] Dark/light mode toggle
- [ ] Progressive Web App (PWA) features