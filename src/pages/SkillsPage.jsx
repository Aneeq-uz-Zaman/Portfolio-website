import React from 'react';

function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95, description: 'Advanced automation & data science' },
        { name: 'JavaScript', level: 85, description: 'Frontend & backend development' },
        { name: 'C++', level: 75, description: 'Algorithm & data structures' },
        { name: 'SQL', level: 80, description: 'Database management & queries' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: '🛠️',
      skills: [
        { name: 'React.js', level: 90, description: 'Modern UI development' },
        { name: 'Pandas', level: 95, description: 'Data manipulation & analysis' },
        { name: 'NumPy', level: 90, description: 'Numerical computing' },
        { name: 'Selenium', level: 95, description: 'Web automation & scraping' },
        { name: 'PyAutoGUI', level: 80, description: 'Machine learning models' },
        { name: 'Express.js', level: 70, description: 'Deep learning frameworks' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'HTML5', level: 95, description: 'Semantic markup' },
        { name: 'CSS3', level: 90, description: 'Modern styling & animations' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' },
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript' },
        { name: 'REST APIs', level: 80, description: 'API design & integration' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '⚙️',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control & collaboration' },
        { name: 'VS Code', level: 95, description: 'Development environment' },
        { name: 'Jupyter Notebooks', level: 90, description: 'Data science workflow' },
        { name: 'AWS', level: 65, description: 'Cloud computing basics' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🧠',
      skills: [
        { name: 'Problem Solving', level: 95, description: 'Analytical thinking & debugging' },
        { name: 'Communication', level: 90, description: 'Technical & client communication' },
        { name: 'Team Collaboration', level: 85, description: 'Agile & remote work' },
        { name: 'Project Management', level: 80, description: 'Planning & execution' },
        { name: 'Learning Agility', level: 95, description: 'Adapting to new technologies' }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-neon-blue to-neon-pink';
    if (level >= 80) return 'from-neon-blue to-blue-400';
    if (level >= 70) return 'from-blue-400 to-purple-400';
    return 'from-purple-400 to-gray-400';
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            Skills & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern development and data science
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/5 border border-white/10 p-8 rounded-lg shadow-lg hover:shadow-neon-blue hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg text-gray-200">{skill.name}</span>
                      <span className="text-sm font-mono text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-3 relative overflow-hidden border border-white/10">
                      <div 
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-500 group-hover/skill:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
