import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  const profileImage = '/WhatsApp Image 2026-04-09 at 8.15.30 PM.jpeg';

  const stats = [
    { number: '3.60', label: 'CGPA' },
    { number: '20+', label: 'Projects Completed' },
    { number: '1.5+', label: 'Years Experience' },
    { number: '100%', label: 'Commitment to Delivery' }
  ];

  return (
    <div className="section-shell">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black mb-8 heading-gradient rise-up">
          About Me
        </h1>

        <div className="glass-card p-6 md:p-8 mb-8 rise-up rise-delay-2 text-left max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-4 md:gap-5 items-center">
            <div>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 mb-6 font-light">
                I am a <span className="text-accent-1 font-semibold">BS Data Science student</span> at PUCIT with practical experience in
                <span className="text-accent-2 font-semibold"> Python automation, web scraping, and product-focused web development</span>.
              </p>

              <p className="text-base md:text-xl leading-relaxed text-gray-300">
                My work combines fast execution and long-term maintainability, so each build is useful today and easy to scale tomorrow.
              </p>
            </div>

            <div className="mx-auto md:mx-0 md:justify-self-end w-44 sm:w-52 md:w-56 aspect-[4/5] rounded-[1.5rem] p-[2px] bg-gradient-to-br from-[#8cf1de] via-[#dfffea] to-[#ffcfaa] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
              <div className="w-full h-full rounded-[1.35rem] overflow-hidden border border-white/25 bg-[#081722]">
                <img
                  src={profileImage}
                  alt="Muhammad Aneeq Uz Zaman"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 md:p-8 mb-12 rise-up rise-delay-2">
          <h2 className="text-xl md:text-3xl font-semibold heading-gradient italic">
            "Build useful systems. Keep them elegant. Keep them fast."
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 mb-14 rise-up rise-delay-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 md:p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold heading-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rise-up rise-delay-3">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 heading-gradient">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python','Data Science', 'Data Scraping', 'Web Automation', 'MERN STACK Development', 'C/C++','Desktop Automation'].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-3 glass-card text-sm md:text-base font-medium transition-all duration-300 hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 rise-up rise-delay-3">
          <div className="glass-card p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 heading-gradient">Ready to Collaborate?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Let us turn your idea into a product that ships quickly and scales cleanly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
