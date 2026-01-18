import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const stats = [
    { number: '17+', label: 'Projects Completed', icon: '🚀' },
    { number: '3.60', label: 'CGPA', icon: '🎯' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Available', icon: '⏰' }
  ];

  const featuredSkills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Web Development', icon: '🌐' },
    { name: 'Web Automation', icon: '⚡' },
    { name: 'Data Science', icon: '📊' }
  ];

  return (
    <div className="min-h-screen pt-32 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-pink-500/20 animate-spin-slow" />
      
      {/* Enhanced Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-pink rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full animate-bounce" />
      <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-neon-blue/50 rounded-full animate-ping delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-pink/70 rounded-full animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div className="mb-16">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-gradient-to-br from-neon-blue to-neon-pink rounded-full p-1">
            <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-1xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            Muhammad Aneeq Uz Zaman
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 mb-6 opacity-90">
            BS Data Science Student | Web Developer | Python Developer 
          </h2>
          
          {/* Quote */}
          <p className="text-lg md:text-xl lg:text-2xl text-neon-blue font-medium mb-8 animate-pulse">
            "Transforming ideas into intelligent solutions through code and data"
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-lg hover:shadow-neon-blue transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-neon-blue mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Featured Skills */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-lg hover:shadow-neon-blue transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:animate-bounce">{skill.icon}</div>
                <div className="font-semibold text-white mb-2">{skill.name}</div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-neon-blue to-neon-pink h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold text-lg px-8 py-4 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-neon-blue"
          >
            🚀 Let's Work Together
          </Link>
          
          <Link 
            to="/projects"
            className="border-2 border-neon-blue text-neon-blue font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-neon-blue/10 hover:shadow-neon-blue"
          >
            🎯 View My Work
          </Link>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-neon-pink text-neon-pink font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-neon-pink/10 hover:shadow-neon-pink"
          >
            📄 Download Resume
          </a>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { to: '/about', icon: '👨‍💻', label: 'About Me' },
            { to: '/experience', icon: '💼', label: 'Experience' },
            { to: '/skills', icon: '⚡', label: 'Skills' },
            { to: '/education', icon: '🎓', label: 'Education' }
          ].map((link, index) => (
            <Link 
              key={index}
              to={link.to}
              className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-lg hover:shadow-neon-blue transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-2 group-hover:animate-bounce">{link.icon}</div>
              <div className="text-sm font-medium text-gray-300">{link.label}</div>
            </Link>
          ))}
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-xs text-gray-400 mt-2">Scroll to explore</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
