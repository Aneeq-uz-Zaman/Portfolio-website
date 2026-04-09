import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  const projects = [
    {
      title: 'Real Estate Data Scraper',
      description: 'Automated web scraping tool for real estate listings using Python and Selenium',
      technologies: ['Python', 'Selenium', 'Pandas', 'BeautifulSoup'],
      status: 'Completed',
      category: 'Automation'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      status: 'Completed',
      category: 'Frontend'
    },
    {
      title: 'Automated Report Generator',
      description: 'Excel/CSV report generation system with custom formatting and data analysis',
      technologies: ['Python', 'Pandas', 'Excel API', 'Data Processing'],
      status: 'Completed',
      category: 'Data Tooling'
    },
    {
      title: 'App for Software Agency in MERN',
      description: 'Full-stack web application for managing software projects and teams',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      status: 'Completed',
      category: 'Full Stack'
    },
    {
      title: 'MERN PasteApp',
      description: 'Interactive dashboard for data visualization and analysis',
      technologies: ['React', 'MongoDB', 'Express.js', 'Node.js'],
      status: 'In Progress',
      category: 'Product'
    },
    {
      title: 'POS Management System',
      description: 'Point-of-sale platform for inventory, billing, receipts, and sales tracking for retail stores.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      status: 'Completed',
      category: 'Business App'
    },
    {
      title: 'Tic-tac-toe Game in C++',
      description: 'A simple console-based Tic-tac-toe game implemented in C++',
      technologies: ['C++', 'OOP', 'Game Development'],
      status: 'Completed',
      category: 'Systems'
    }
  ];

  return (
    <div className="section-shell">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 heading-gradient rise-up">
            My Projects
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto rise-up rise-delay-1">
            20+ shipped projects across automation, web apps, data tooling, and business software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 rise-up rise-delay-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="glass-card p-6 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-accent-1 bg-accent-1/20 px-3 py-1 rounded-full border border-accent-1/40">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Completed'
                    ? 'bg-accent-1/20 text-accent-1 border border-accent-1/40'
                    : 'bg-accent-2/20 text-accent-2 border border-accent-2/40'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent-2 mb-2">Tech Stack</h4>
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

              <div className="h-px bg-white/10 my-4" />
              <p className="text-sm text-gray-400">Built with a focus on reliability, speed, and maintainability.</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rise-up rise-delay-3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 heading-gradient">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm always excited to work on new challenges and innovative solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 transition-transform duration-300 hover:scale-105"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
