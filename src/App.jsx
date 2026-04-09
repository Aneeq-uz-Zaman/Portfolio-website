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
      <div className="min-h-screen text-white relative overflow-x-hidden app-noise">
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#061018] via-[#0b1b26] to-[#112838]" />
          <div className="absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-accent-1/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-48 -right-44 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-3xl animate-pulse" />
        </div>
        
        <Navbar />
        
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
        
        <BackToTop />
        
        <footer className="relative z-10 py-10 px-6 text-center border-t border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto glass-card p-6">
            <p className="text-gray-300 text-base md:text-lg">
              © 2026 Muhammad Aneeq Uz Zaman. Crafted with React and motion-first UI design.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {[
                { label: 'Email', href: 'mailto:aneeq24dec@gmail.com' },
                { label: 'GitHub', href: 'https://github.com/Aneeq-uz-Zaman' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/aneeq-uz-zaman' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-4 py-2 rounded-full border border-white/20 text-sm font-semibold text-gray-200 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                >
                  {social.label}
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
