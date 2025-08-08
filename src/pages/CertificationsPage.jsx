import React from 'react';

function CertificationsPage() {
  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['Python (Programming Language)'],
      credentialId: 'UC-4fe63977-2f9b-415e-b812-02d74b85cf49',
      icon: '🐍'
    },
    {
      title: 'ReactJs',
      issuer: 'Udemy',
      date: 'Aug 2025',
      skills: ['React.js'],
      credentialId: 'UC-f1b1d487-b2b0-4d81-82d8-f413658e585f',
      icon: '⚛️'
    },
    {
      title: 'Tailwind CSS',
      issuer: 'Udemy',
      date: 'Aug 2025',
      skills: ['Tailwind CSS'],
      credentialId: 'UC-c61cf04b-5117-4912-b723-16e6e600c4f6',
      icon: '🎨'
    },
    {
      title: 'MERN Stack',
      issuer: 'SimpliLearn',
      date: 'Aug 2025',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      credentialId: '8747427_91276281754506409553',
      icon: '🎨'
    },
    {
      title: 'Master Python Web Scraping & Automation using Selenium',
      issuer: 'Udemy',
      date: 'Mar 2025',
      skills: ['Web Automation', 'Web Crawling', 'Web Scraping', 'Selenium WebDriver', 'Data Scraping', 'Selenium'],
      credentialId: 'UC-c0001811-9b65-4d42-b558-212cd0a17da5',
      icon: '🕷️'
    },
    {
      title: 'MOS 2019',
      issuer: 'Microsoft',
      date: 'Mar 2022',
      skills: ['Microsoft Office Specialist'],
      credentialId: 'nGsu-uTb3',
      icon: '📄'
    },
    {
      title: 'Master of Essential C++ Programming Beginner to Advanced',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['C++'],
      credentialId: 'UC-4458e861-3241-4f28-9121-4c77a9af1bbd',
      icon: '⚡'
    },
    {
      title: 'CSS & JavaScript',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['Cascading Style Sheets (CSS)', 'JavaScript'],
      credentialId: 'UC-c790f22f-c28d-4dca-81d8-53616bc2d3d5',
      icon: '📱'
    },
    {
      title: 'MongoDB',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['MongoDB'],
      credentialId: 'UC-08f6ad2b-febe-445f-a07c-64da9626338e',
      icon: '📊'
    },
    {
      title: 'HTML & CSS',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['HTML5', 'Cascading Style Sheets (CSS)'],
      credentialId: 'UC-34106a91-8714-44ba-8f69-7c3d98cd8895',
      icon: '🌐'
    },
    {
      title: 'HTML',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['HTML5'],
      credentialId: 'UC-b490ea21-9df1-4b8f-920d-71950339a98e',
      icon: '📄'
    },
    {
      title: 'Microsoft Excel 2023',
      issuer: 'Udemy',
      date: 'Feb 2025',
      skills: ['Microsoft Excel'],
      credentialId: 'UC-f2d1ab1c-8a8c-40b5-a9d5-5a3b28f1a70f',
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
            Certifications
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-blue hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:animate-bounce">
                  {cert.icon}
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-neon-blue">{cert.date}</span>
                </div>
              </div>
              
              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {cert.title}
              </h3>
              
              {/* Issuer */}
              <p className="text-lg font-semibold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text mb-3">
                {cert.issuer}
              </p>
              
              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neon-pink mb-2">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Credential ID */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">
                  ID: {cert.credentialId}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">{certifications.length}</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">150+</div>
              <div className="text-gray-400">Hours Learned</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">3</div>
              <div className="text-gray-400">Platform</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">2025</div>
              <div className="text-gray-400">Latest Year</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
              Always Learning
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I believe in continuous improvement and staying updated with the latest technologies.
            </p>
            <a 
              href="/skills"
              className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
            >
              View My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationsPage;
