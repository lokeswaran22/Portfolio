import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

      </main>

      {/* Footer - Coming Soon */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
               All rights reserved © 2026 <br/> Made with <span className="heart-beat">❤️</span> by Lokeswaran | Deployed on <a href="https://trojanx.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Trojan <span style={{ color: '#ff0000' }}>X</span></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
