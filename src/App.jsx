// Importing core React and React Router components
import React, { useState } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    // Setting up the main Router component for routing in the application
    <Router>
      {/* Header section with navigation bar */}
      <header className="header">
        <div className="header-content">
            {/* Logo with link to homepage */}
            <Link to="/my-portfolio"><img src={reactLogo} alt="Suchira Dhar" className="logo" />
            </Link>

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon */}
          <div className={`hamburger ${menuOpen ? "hamburger--open" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

        </div>

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
