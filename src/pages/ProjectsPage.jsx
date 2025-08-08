import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'Real Estate Data Scraper',
      description: 'Automated web scraping tool for real estate listings using Python and Selenium',
      technologies: ['Python', 'Selenium', 'Pandas', 'BeautifulSoup'],
      status: 'Completed',
      icon: '🏠'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      status: 'Completed',
      icon: '💻'
    },
    {
      title: 'Automated Report Generator',
      description: 'Excel/CSV report generation system with custom formatting and data analysis',
      technologies: ['Python', 'Pandas', 'Excel API', 'Data Processing'],
      status: 'Completed',
      icon: '📈'
    },
    {
      title: 'App for Software Agency in MERN',
      description: 'Full-stack web application for managing software projects and teams',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      status: 'Completed',
      icon: '🛠️'
    },
    {
      title: 'MERN PasteApp',
      description: 'Interactive dashboard for data visualization and analysis',
      technologies: ['React', 'MongoDB', 'Express.js', 'Node.js'],
      status: 'In Progress',
      icon: '📊'
    },
    {
      title: 'Tic-tac-toe Game in C++',
      description: 'A simple console-based Tic-tac-toe game implemented in C++',
      technologies: ['C++', 'OOP', 'Game Development'],
      status: 'Completed',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in automation, data science, and web development
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-blue hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Project Icon */}
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {project.icon}
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neon-pink mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm always excited to work on new challenges and innovative solutions.
            </p>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
