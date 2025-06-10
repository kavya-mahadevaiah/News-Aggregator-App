# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules







*NewsDaily* is a responsive, single-page news aggregator application that fetches and displays live news headlines and categorized stories using the NewsAPI. Built entirely using *React.js, **Axios, **Tailwind CSS, and **Material UI*, the app is designed to deliver a modern and engaging user experience with dynamic content updates, smooth navigation, and responsive design.
 
Project Overview
 
I built NewsDaily as a personal project to sharpen my frontend development skills, practice real-time API integration, and create an intuitive UI with responsive layout techniques.
 
The app enables users to:
- Explore *trending news* and *breaking headlines*
- Browse stories by category (e.g., Technology, Sports, Business, Health, Science)
- Navigate between sections without page reloads 
- Enjoy a seamless, SPA-like experience with React Router
 
 
Built with - Tech Stack
 
- *Frontend*: React.js
- *Styling*: Tailwind CSS + Material UI
- *Routing*: React Router DOM
- *HTTP Client*: Axios
- *API Source*: [NewsAPI.org](https://newsapi.org)
 
 
✨ Key Features
 
✅ *Dynamic News Fetching*  
Fetches and displays live news based on selected categories using Axios and NewsAPI.
 
✅ *Modern UI/UX*  
Built with Tailwind CSS and Material UI for a clean, mobile-responsive design. Includes dark/light theme support.
 
✅ *Smooth Navigation*  
Uses React Router DOM to deliver a single-page experience while navigating between categories.
 
✅ *Engaging Components*  
Includes interactive carousel sections and skeleton loaders to improve user experience during loading.
 
📸 UI Preview
 
 
![Home Page](./screenshots/news-home.png)  
Trending headlines on the homepage
 
![Category View](./screenshots/category-tech.png)  
Technology news category with smooth navigation
 
📦 How to Run Locally
 
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/newsdaily.git
cd newsdaily
 
# 2. Install dependencies
npm install
 
# 3. Create a .env file and add your NewsAPI key
REACT_APP_NEWS_API_KEY=your_newsapi_key_here
 
# 4. Start the development server
npm start
 
 
🎯 Project Goals
This project helped me:
 
Practice state management and component-based architecture
 
Gain experience with external API integration
 
Build real-world, responsive UIs using utility-first CSS
 
Learn to create a fast, user-friendly SPA with React
 
📮 API Reference
Powered by NewsAPI.org, which provides:
 
Top headlines
 
Category-based articles
 
Real-time updates across countries and topics
 
🧑‍💻 About Me
Hi, I am Kavya.
I'm a frontend developer passionate about building interactive web apps with clean design and intuitive user experiences. NewsDaily is one of my showcase projects for combining API data with modern frontend tools.
 
Feel free to check out my other projects at:
https://github.com/kavya-mahadevaiah/News-Aggregator-App
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
