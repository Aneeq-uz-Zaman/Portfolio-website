import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-500 ${
          isScrolled || isMenuOpen 
            ? 'bg-dark-primary/95 backdrop-blur-xl border border-white/20 shadow-2xl' 
            : 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg'
        } ${isMenuOpen ? 'rounded-2xl' : 'rounded-full'} px-6 py-4`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className={`font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
              }`}
            >
              Aneeq Uz Zaman
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-1 items-center">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                      isActive 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-pink text-white shadow-neon-blue' 
                        : 'text-gray-300 hover:text-white hover:bg-white/15 hover:shadow-lg'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="hidden xl:inline whitespace-nowrap">{item.label}</span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`} />
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} />
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-1 gap-2 max-h-[28rem] overflow-y-auto">
                {navItems.map(item => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105 ${
                        isActive 
                          ? 'bg-gradient-to-r from-neon-blue to-neon-pink text-white shadow-neon-blue' 
                          : 'text-gray-300 hover:text-white hover:bg-white/15'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
