import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '3.60', label: 'Current CGPA' },
    { number: '100%', label: 'Delivery Commitment' },
    { number: '24/7', label: 'Problem Solving Mode' }
  ];

  const featuredSkills = [
    { name: 'Python Automation', level: 93 },
    { name: 'MERN Development', level: 88 },
    { name: 'Data Science', level: 84 },
    { name: 'Web Scraping', level: 91 }
  ];

  return (
    <div className="section-shell flex items-center text-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-14 rise-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight heading-gradient">
            Muhammad Aneeq Uz Zaman
          </h1>

          <h2 className="mt-5 text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 rise-up rise-delay-1">
            Data Science Student, Web Developer, and Automation Builder
          </h2>

          <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-gray-300 rise-up rise-delay-2">
            I design practical digital products that combine robust engineering with data-driven thinking.
            From dashboards to automation pipelines, I build systems that move work faster.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 rise-up rise-delay-2">
            {['Available for Freelance', 'FULL STACK DEVELOPER + Python Workflow', 'Fast Delivery Mindset'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-semibold rounded-full border border-white/20 bg-white/5 text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 rise-up rise-delay-2">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-5 md:p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold heading-gradient mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm text-gray-300 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 md:p-8 mb-14 rise-up rise-delay-3">
          <h3 className="text-2xl md:text-3xl font-bold mb-7 heading-gradient">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredSkills.map((skill, index) => (
              <div key={index} className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 rise-up rise-delay-3">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 hover:scale-105 transition-transform duration-300"
          >
            Start a Conversation
          </Link>

          <Link
            to="/projects"
            className="px-8 py-3 rounded-full font-bold border border-white/25 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Explore Projects
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold border border-accent-2/40 text-accent-2 hover:bg-accent-2/20 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rise-up rise-delay-3">
          {[
            { to: '/about', label: 'About' },
            { to: '/experience', label: 'Experience' },
            { to: '/skills', label: 'Skills' },
            { to: '/education', label: 'Education' }
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="glass-card p-4 md:p-5 text-sm md:text-base font-semibold text-gray-200 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
