import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/experience', label: 'Experience', icon: '🛠️' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/education', label: 'Education', icon: '🎓' },
    { path: '/certifications', label: 'Certifications', icon: '🏆' },
    { path: '/hobbies', label: 'Hobbies', icon: '🎨' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className={`bg-white/5 backdrop-blur-xl px-6 py-4 border border-white/10 shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'rounded-2xl' : 'rounded-full'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
          >
            Aneeq Uz Zaman
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2 items-center">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-pink text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-pink text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
