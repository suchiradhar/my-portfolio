// Importing core React and React Router components
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing logo asset and CSS for styling
import reactLogo from './assets/logo.svg';
import './App.css';

// Importing components for main sections of the homepage
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Importing pages for standalone sections (About, Blog, Gallery, Education, Experience)
import About from './pages/About/About';
import Blog from './pages/blog/Blog';
import Gallery from './pages/gallery/Gallery';
import Videos from './pages/videos/Videos';
import Resume from './pages/resume/Resume';

// Importing individual blog pages for detailed blog posts
import BlogPostOne from './pages/blog/blog-pages/BlogOne/BlogOne';
import BlogPostTwo from './pages/blog/blog-pages/BlogTwo/BlogTwo';
import BlogPostThree from './pages/blog/blog-pages/BlogThree/BlogThree';

function App() {
  return (
    // Setting up the main Router component for routing in the application
    <Router>
      {/* Header section with navigation bar */}
      <header className="header">
        <nav className="navbar">
          <div className="logo-container">
            {/* Logo with link to homepage */}
            <Link to="/my-portfolio"><img src={reactLogo} alt="Suchira Dhar" className="logo react-logo" /></Link>
          </div>

          {/* Navigation links to different sections of the site */}
          <ul className='nav-links'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content area where different components will render based on routes */}
      <main className="main">
        <Routes>
          {/* Route for the homepage, rendering multiple components */}
          <Route path="/my-portfolio" element={<>
            <Home />
            <Projects />
            <Skills />
            <Contact />
          </>} />

          {/* Defining routes for individual pages */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/resume" element={<Resume />} />

          {/* Routes for individual blog posts */}
          <Route path="/blog/professional-headshot" element={<BlogPostOne />} />
          <Route path="/blog/aesthetic-shot" element={<BlogPostTwo />} />
          <Route path="/blog/tellastory-shot" element={<BlogPostThree />} />
        </Routes>
      </main>

      {/* Footer component to appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
