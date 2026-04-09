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
    <div className="section-shell">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 heading-gradient">
            Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building real-world solutions through hands-on development and automation projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 md:p-12 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="text-6xl md:text-8xl group-hover:animate-bounce">
                  {exp.icon}
                </div>

                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="text-xl md:text-2xl font-semibold heading-gradient mb-2">
                      {exp.company}
                    </div>
                    <div className="text-lg text-gray-400 font-medium">
                      {exp.period}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-accent-1 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-gray-300 text-lg group-hover:text-white transition-colors duration-300"
                        >
                          <span className="text-accent-2 text-xl mt-1">🚀</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-accent-2 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default"
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
        
        <div className="text-center mt-16">
          <a 
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 transition-transform duration-300 hover:scale-105"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
