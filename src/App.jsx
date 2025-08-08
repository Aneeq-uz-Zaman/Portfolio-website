import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import HobbiesPage from './pages/HobbiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-white relative overflow-x-hidden">
        {/* Global Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary -z-50" />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* Back to Top Button */}
        <BackToTop />
        
        {/* Footer */}
        <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10 py-8 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-400 text-lg">
              © 2025 Muhammad Aneeq Uz Zaman. All rights reserved. ✨
            </p>
            <div className="flex justify-center gap-6 mt-4">
              {[
                { icon: '📧', href: 'mailto:aneeq24dec@gmail.com' },
                { icon: '💻', href: 'https://github.com/Aneeq-uz-Zaman' },
                { icon: '🔗', href: 'https://linkedin.com/in/aneeq-uz-zaman' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-2xl hover:text-neon-blue transition-colors duration-300 hover:scale-125 transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
