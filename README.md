# Mitul Aghara - Portfolio Website

A modern, responsive personal portfolio website showcasing projects, skills, and professional information with beautiful animations and smooth interactions.

## 🌐 Live Demo

[View Portfolio](https://mitulaghara-portfolio.netlify.app/) *(Update with your actual deployment URL)*

## ✨ Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging fade-up animations and transitions throughout the site
- **Mobile Menu** - Hamburger menu for easy navigation on mobile devices
- **Scroll Effects** - Header changes on scroll with smooth scrolling to sections
- **Project Showcase** - Display of featured projects with links to GitHub and live demos
- **Contact Form** - Interactive contact form for visitor inquiries
- **Social Links** - Quick access to GitHub, LinkedIn, and other profiles
- **Modern UI** - Clean and professional design with smooth color transitions
- **Intersection Observer** - Project cards animate into view as you scroll
- **Typing Effect** - Animated hero title with typewriter effect

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file with page structure
├── css/
│   └── style.css       # Complete styling with animations and responsive design
├── js/
│   └── script.js       # Interactive features and animations
├── image/
│   └── IMG_1784.JPG    # Profile image
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with animations and media queries
- **JavaScript** - DOM manipulation and interactive features
- **Font Awesome** - Icon library for professional icons
- **Google Fonts** - Poppins font family for typography

## 📋 Sections

### Header & Navigation
- Fixed navigation bar with smooth scroll effects
- Mobile-responsive hamburger menu
- Logo with animated icon
- Navigation links to all sections

### Hero Section
- Eye-catching hero banner with gradient background
- Animated title with typewriter effect
- Call-to-action button
- Geometric background shapes

### About Section
- Personal introduction and professional summary
- Skills showcase with animated tags
- Profile image with floating animation
- Responsive two-column layout

### Projects Section
- Grid layout of featured projects
- Project cards with hover effects
- Links to GitHub repositories and live demos
- Projects included:
  - E-Commerce Platform (My Cara)
  - Task Management App
  - Weather Dashboard

### Contact Section
- Contact information with icons
- Contact form with validation
- Social media links
- Two-column layout on desktop, stacked on mobile

### Footer
- Footer navigation links
- Copyright information
- Social link references

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mitulaghara/Portfolio.git
   cd Portfolio
   ```

2. **Open the portfolio**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js with http-server
     npx http-server
     ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or the port shown in terminal)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 991px
- **Mobile**: Below 768px
- **Small Mobile**: Below 576px

## 🎨 Customization

### Update Personal Information

1. **Edit Name and Title** in `index.html`:
   ```html
   <h1>Hi, I'm [Your Name]</h1>
   ```

2. **Update Profile Image**:
   - Replace `image/IMG_1784.JPG` with your photo
   - Or update the image path in the HTML

3. **Modify Skills** in the About section:
   ```html
   <div class="skill">Your Skill</div>
   ```

4. **Update Projects** with your own projects and links

5. **Change Contact Information**:
   - Email address
   - Location
   - Social media links

### Customize Colors

Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary: #2563eb;        /* Main blue color */
    --secondary: #1e40af;      /* Darker blue */
    --dark: #1f2937;           /* Dark gray */
    --light: #f9fafb;          /* Light gray */
    --gray: #6b7280;           /* Medium gray */
    --accent: #f59e0b;         /* Gold accent */
}
```

## 🔧 Features Explained

### Mobile Menu Toggle
- Hamburger menu appears on screens smaller than 768px
- Click to toggle menu visibility
- Auto-closes when a link is clicked

### Header Scroll Effect
- Header background becomes more opaque when scrolling
- Provides visual feedback during navigation

### Form Submission
- Contact form shows confirmation message
- Form resets after submission
- Currently uses alert (can be replaced with backend integration)

### Smooth Scrolling
- Clicking navigation links smoothly scrolls to sections
- Offset accounts for fixed header height

### Project Card Animation
- Cards fade in and slide up as they come into view
- Uses Intersection Observer API for performance

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with automatic builds on push

### GitHub Pages

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `username.github.io/Portfolio`

### Vercel

1. Import your GitHub repository
2. Select default settings
3. Deploy

## 📧 Contact Form Integration

The current contact form shows an alert. To enable real email functionality:

1. **Using Formspree**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS**:
   - Add EmailJS library to HTML
   - Configure with your service ID

3. **Using Backend**:
   - Create a backend API endpoint
   - Update form action to point to your endpoint

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Technology stack indicators
- [ ] Testimonials section
- [ ] Experience/Timeline section
- [ ] Newsletter subscription
- [ ] PDF resume download
- [ ] Real email backend integration
- [ ] Search functionality
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License. Feel free to use this template for your own portfolio!

## 🤝 Contributing

If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 👨‍💻 Author

**Mitul Aghara**
- GitHub: [@mitulaghara](https://github.com/mitulaghara)
- LinkedIn: [Mitul Aghara](https://in.linkedin.com/in/mitul-aghara-602a72332)
- Email: mitul@example.com
- Location: Gujarat, India

## 📞 Support

If you have any questions or issues:
- Open an issue on GitHub
- Check existing documentation
- Contact via email or social media

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images
- All visitors and supporters

---

**Last Updated**: November 2025

Happy coding! 🚀
