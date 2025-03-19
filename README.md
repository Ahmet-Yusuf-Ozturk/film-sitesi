# Film Sitesi

A modern web application for browsing and discovering films, built with React and Vite.

## Features

- Browse popular and trending films
- Search for movies by title, genre, or actor
- View detailed information about films
- Responsive design for desktop and mobile devices
- User-friendly interface with modern UI components

## Technologies Used

- React 18
- Vite (for fast development and optimized builds)
- React Router Dom (for navigation)
- CSS (for styling)
- Vitest (for testing)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahmet-Yusuf-Ozturk/film-sitesi.git
   cd film-sitesi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the application on [http://localhost:5173](http://localhost:5173).

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

### Testing

To run tests:

```bash
npm run test
```

## Project Structure

```
film-sitesi/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── styles/       # CSS files
│   ├── App.jsx       # Main app component
│   └── index.jsx     # Entry point
├── .gitignore        # Git ignore file
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped with this project
- Inspiration from other film browsing platforms
