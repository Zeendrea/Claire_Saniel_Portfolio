# Claire Saniel - Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a beautiful UI with smooth animations, showcasing projects, skills, and contact information.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📱 Mobile-friendly layout
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills and technologies display
- 📧 Contact form

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom properties, Grid, Flexbox)
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Modify the about text
   - Update statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust skill levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects
   - Update project details and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Connect the form to a backend service

### Styling

The color scheme can be customized in `src/index.css` by modifying the CSS variables:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

## License

This project is open source and available under the MIT License.

## Contact

Claire Saniel - claire@example.com

Project Link: [https://github.com/claire-saniel/portfolio](https://github.com/claire-saniel/portfolio)



