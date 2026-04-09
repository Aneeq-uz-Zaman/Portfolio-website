import React from 'react';

function HobbiesPage() {
  const hobbies = [
    {
      title: 'Coding & Programming',
      description: 'Exploring new programming languages, frameworks, and building personal projects in my free time.',
      icon: '💻',
      activities: ['Open Source Contributions', 'Personal Projects', 'Code Challenges', 'Tech Experiments']
    },
    {
      title: 'Gaming',
      description: 'Strategy games and problem-solving games that enhance logical thinking and decision-making skills.',
      icon: '🎮',
      activities: ['Strategy Games', 'Puzzle Games', 'Competitive Gaming', 'Game Development']
    },
    {
      title: 'Reading & Learning',
      description: 'Constantly reading tech blogs, research papers, and books about data science, AI, and technology trends.',
      icon: '📚',
      activities: ['Tech Blogs', 'Research Papers', 'Programming Books', 'Online Courses']
    },
    {
      title: 'Photography',
      description: 'Capturing moments and exploring the world through different perspectives and creative compositions.',
      icon: '📸',
      activities: ['Landscape Photography', 'Street Photography', 'Photo Editing', 'Visual Storytelling']
    },
    {
      title: 'Fitness & Sports',
      description: 'Staying active and healthy through various sports and fitness activities for better productivity.',
      icon: '🏃‍♂️',
      activities: ['Running', 'Cricket', 'Gym Workouts', 'Outdoor Activities']
    },
    {
      title: 'Music & Technology',
      description: 'Exploring the intersection of music and technology, from audio processing to digital music creation.',
      icon: '🎵',
      activities: ['Music Production', 'Audio Analysis', 'Playlist Algorithms', 'Sound Design']
    }
  ];

  const personalValues = [
    { value: 'Continuous Learning', icon: '🧠' },
    { value: 'Innovation', icon: '💡' },
    { value: 'Problem Solving', icon: '🔧' },
    { value: 'Creativity', icon: '🎨' },
    { value: 'Collaboration', icon: '🤝' },
    { value: 'Excellence', icon: '⭐' }
  ];

  return (
    <div className="section-shell">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 heading-gradient">
            Hobbies & Interests
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Beyond coding - exploring creativity, learning, and personal growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {hobby.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {hobby.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {hobby.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-accent-2 mb-2">Activities:</h4>
                <div className="flex flex-wrap gap-2">
                  {hobby.activities.map((activity, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center heading-gradient">
            Personal Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personalValues.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-4 text-center transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">{item.icon}</div>
                <div className="text-sm font-semibold text-gray-300">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center heading-gradient">
            Fun Facts About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☕</span>
                <span className="text-gray-300">Can't code without Tea </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌙</span>
                <span className="text-gray-300">Night owl - most productive between 10 PM - 4 AM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-300">Completed 10+ automation projects on Fiverr</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span className="text-gray-300">Dream: Contributing to AI/ML research</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-300">Enjoys creating digital art in free time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <span className="text-gray-300">Goal: Build a tech startup by 2027</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="glass-card p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 heading-gradient">
              Let's Connect!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Always open to discussing technology, sharing ideas, or just having a friendly chat.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 transition-transform duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbiesPage;
