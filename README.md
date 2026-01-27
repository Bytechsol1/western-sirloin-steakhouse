# 🥩 Western Sirloin Steakhouse

A modern, responsive restaurant website built with React, TypeScript, and Vite. This project showcases the Western Sirloin Steakhouse restaurant with an elegant design, interactive menu, and seamless user experience.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Menu**: Browse through our extensive menu with detailed descriptions and pricing
- **Modern UI/UX**: Clean, premium design with smooth animations and transitions
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Type-Safe**: Developed with TypeScript for robust code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🚀 Tech Stack

- **React** 19.2.3 - Modern UI library
- **TypeScript** 5.8.2 - Type-safe JavaScript
- **Vite** 6.2.0 - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd western-sirloin-steakhouse
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env.local` file in the root directory
   - Add your configuration (if needed):
     ```
     VITE_API_URL=your_api_url_here
     ```

## 🏃‍♂️ Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
western-sirloin-steakhouse/
├── components/           # Reusable React components
│   ├── HeroSection.tsx
│   ├── MenuSection.tsx
│   ├── AboutSection.tsx
│   └── ...
├── public/              # Static assets
├── constants.tsx        # Menu items, restaurant info, and constants
├── types.ts            # TypeScript type definitions
├── index.css           # Global styles and Tailwind imports
├── index.tsx           # Application entry point
├── App.tsx             # Main App component
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Update Restaurant Information

Edit `constants.tsx` to update:
- Menu items and pricing
- Restaurant contact information
- Operating hours
- Social media links

### Modify Styles

- **Global Styles**: Edit `index.css`
- **Component Styles**: Use Tailwind utility classes in components
- **Theme Colors**: Update `tailwind.config.js`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from 'dist' folder
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Western Sirloin Steakhouse
- **Website**: [Your Website URL]
- **Email**: [Contact Email]
- **Phone**: [Contact Phone]

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ for Western Sirloin Steakhouse**
