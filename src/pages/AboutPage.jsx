import React from 'react';

function AboutPage() {
  const stats = [
    { number: '3.60', label: 'CGPA', icon: '🎯' },
    { number: '17+', label: 'Projects Completed', icon: '🚀' },
    { number: '1.5+', label: 'Years Experience', icon: '⏱️' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
          About Me
        </h1>
        
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto mb-16 bg-gradient-to-br from-neon-blue to-neon-pink rounded-full flex items-center justify-center text-8xl shadow-neon-blue border-4 border-white/10 animate-glow">
          👨‍💻
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 mb-12 rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-neon-blue">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8 font-light">
            I'm a passionate <span className="text-neon-blue font-semibold">BS Data Science student</span> at PUCIT, 
            with hands-on experience in <span className="text-neon-pink font-semibold">Python automation</span>, 
            web scraping, and real-world freelance projects. I love building smart systems that make things easier and faster.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
            My journey in technology started with curiosity about how data can transform decision-making. 
            Today, I specialize in creating automated solutions that bridge the gap between complex data and actionable insights.
          </p>
        </div>
        
        {/* Quote Section */}
        <div className="bg-white/5 border border-neon-blue/30 p-8 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text italic relative z-10">
            "Striving to automate, innovate, and elevate."
          </h2>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg group cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-neon-blue"
            >
              <div className="text-4xl md:text-5xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2 group-hover:text-neon-pink transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Skills Preview */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python','Data Science', 'Data Scraping', 'Web Automation', 'MERN STACK Development', 'C/C++','Desktop Automation'].map((skill, i) => (
              <span 
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base font-medium transition-all duration-300 cursor-default hover:scale-110 hover:shadow-neon-blue"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-white/5 border border-neon-blue/50 p-8 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-pink/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">Ready to Collaborate?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Let's build something amazing together and turn your ideas into reality.
            </p>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold py-2 px-4 rounded-full inline-block transition-transform duration-300 hover:scale-105"
            >
              Get In Touch ✨
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
