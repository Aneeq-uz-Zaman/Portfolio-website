import React from 'react';

function ExperiencePage() {
  const experiences = [
    {
      title: 'Python Developer – Web Scraping & Automation',
      company: 'Fiverr',
      period: 'Aug 2023 – Nov 2024',
      icon: '🛠️',
      achievements: [
        'Automated data scraping with Selenium & Python',
        'Extracted real estate data, company listings, reviews',
        'Generated Excel/CSV reports automatically',
        'Delivered 20+ successful projects with 100% client satisfaction'
      ],
      technologies: ['Python', 'Selenium', 'Pandas', 'BeautifulSoup', 'Excel/CSV']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building real-world solutions through hands-on development and automation projects
          </p>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-lg shadow-lg transition-all duration-500 group hover:-translate-y-2 hover:shadow-neon-blue"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon */}
                <div className="text-6xl md:text-8xl group-hover:animate-bounce">
                  {exp.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text mb-2">
                      {exp.company}
                    </div>
                    <div className="text-lg text-gray-400 font-medium">
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-neon-blue mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-gray-300 text-lg group-hover:text-white transition-colors duration-300"
                        >
                          <span className="text-neon-pink text-xl mt-1">🚀</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-neon-pink mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="/resume.pdf"
            className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
