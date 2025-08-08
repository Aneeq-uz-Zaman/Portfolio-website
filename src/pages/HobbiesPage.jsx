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
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            Hobbies & Interests
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Beyond coding - exploring creativity, learning, and personal growth
          </p>
        </div>
        
        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-blue hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Hobby Icon */}
              <div className="text-4xl mb-4 group-hover:animate-bounce">
                {hobby.icon}
              </div>
              
              {/* Hobby Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {hobby.title}
              </h3>
              
              {/* Hobby Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {hobby.description}
              </p>
              
              {/* Activities */}
              <div>
                <h4 className="text-sm font-semibold text-neon-pink mb-2">Activities:</h4>
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
        
        {/* Personal Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
            Personal Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personalValues.map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-center hover:shadow-neon-blue transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:animate-bounce">{item.icon}</div>
                <div className="text-sm font-semibold text-gray-300">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fun Facts Section */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
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
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
              Let's Connect!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Always open to discussing technology, sharing ideas, or just having a friendly chat.
            </p>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold py-3 px-8 rounded-full inline-block transition-transform duration-300 hover:scale-105"
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
