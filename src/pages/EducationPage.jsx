import React from 'react';

function EducationPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text animate-glow">
            Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in Data Science and Computer Science
          </p>
        </div>
        
        {/* Main Education Card */}
        <div className="bg-white/5 border border-white/10 p-12 md:p-16 rounded-lg shadow-lg hover:shadow-neon-blue hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden mb-12">
          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            🎓
          </div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10">
            {/* Institution */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                BS Data Science
              </h2>
              <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text font-semibold mb-6">
                PUCIT (New Campus), Lahore
              </h3>
              <div className="inline-block bg-white/5 border border-neon-blue/50 px-8 py-4 rounded-lg">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">
                  CGPA: 3.71/4.0
                </span>
              </div>
              <div className="mt-4 text-lg text-gray-300">
                2024 - 2028 (Currently Enrolled)
              </div>
            </div>
            
            {/* Academic Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-neon-blue mb-4">Core Subjects</h4>
                <ul className="space-y-3">
                  {[
                    'Data Structures & Algorithms',
                    'Machine Learning',
                    'Statistical Analysis',
                    'Database Systems',
                    'Software Engineering',
                    'Data Mining & Warehousing'
                  ].map((subject, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-neon-pink text-lg">📚</span>
                      <span className="text-lg">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-neon-pink mb-4">Academic Achievements</h4>
                <ul className="space-y-3">
                  {[
                    'Strong CGPA 3.71/4.0 in Data Science',
                    'Excellent Performance in ICS (83.8%)',
                    'Outstanding Matric Results (94.4%)',
                    'Computer Science Foundation Since Matric',
                    'Consistent Academic Excellence',
                    'Currently Pursuing Advanced Data Science'
                  ].map((achievement, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-neon-blue text-lg">🏆</span>
                      <span className="text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Academic Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-neon-blue to-neon-pink text-transparent bg-clip-text">Academic Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-white/10" />
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1 - Current BS */}
              <div className="relative flex items-center justify-start md:justify-center">
                <div className="md:w-1/2 md:pr-8 text-left md:text-right">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-blue transition-shadow duration-300">
                    <p className="text-lg font-bold text-neon-blue">2024 - 2028</p>
                    <p className="text-xl font-semibold">BS Data Science</p>
                    <p className="text-gray-400">PUCIT (New Campus), Lahore</p>
                    <p className="text-sm text-neon-blue mt-2">Current CGPA: 3.71/4.0</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Currently Enrolled</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full border-4 border-dark-primary shadow-neon-blue" />
              </div>
              
              {/* Item 2 - Intermediate */}
              <div className="relative flex items-center justify-end md:justify-center">
                <div className="md:w-1/2 md:pl-8 text-left">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-pink transition-shadow duration-300">
                    <p className="text-lg font-bold text-neon-pink">2024</p>
                    <p className="text-xl font-semibold">Intermediate (ICS)</p>
                    <p className="text-gray-400">Punjab College, Lahore</p>
                    <p className="text-sm text-neon-pink mt-2">Score: 1006/1200</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">Completed</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-neon-pink rounded-full border-4 border-dark-primary shadow-neon-pink" />
              </div>
              
              {/* Item 3 - Matric */}
              <div className="relative flex items-center justify-start md:justify-center">
                <div className="md:w-1/2 md:pr-8 text-left md:text-right">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-neon-blue transition-shadow duration-300">
                    <p className="text-lg font-bold text-neon-blue">2022</p>
                    <p className="text-xl font-semibold">Matriculation (Computer Science)</p>
                    <p className="text-gray-400">Govt. Central Model High School, Lower Mall, Lahore</p>
                    <p className="text-sm text-neon-blue mt-2">Score: 1038/1100</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">Completed</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full border-4 border-dark-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
