# Bansal Associates - Financial Services Website

A modern, responsive website for Bansal Associates, a financial services company. Built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Multiple pages including:
  - Home
  - Services
  - Industries
  - Insights
  - About
  - Contact
- Interactive components
- Contact form
- Newsletter subscription
- Team member profiles
- Company timeline

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bansalassociates.git
cd bansalassociates
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
bansalassociates/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Industries.js
│   │   ├── Insights.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- Heroicons
- Framer Motion

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1E40AF',    // Deep blue
      secondary: '#1E293B',  // Slate
      accent: '#F59E0B',     // Amber
    }
  }
}
```

### Images

Replace the placeholder images in the `public/assets/images` directory with your own images. Make sure to maintain the same file names or update the image paths in the components.

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact:
- Email: info@bansalassociates.com
- Phone: +91 11 1234 5678
