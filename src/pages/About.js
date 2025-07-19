// src/pages/AboutPage.jsx
import React from 'react';
import passportPhoto from '../assets/passport.jpg'; // Adjust the path if needed

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={passportPhoto}
          alt="Ashnil Chitravanshi"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-500"
        />
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Ashnil Chitravanshi</h1>
          <p className="text-gray-600 mt-2 text-lg">
            MERN Stack Developer from Noida, India. Passionate about building fast, responsive web apps and constantly learning new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🚀 Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'JavaScript', 'REST APIs'].map(skill => (
            <div key={skill} className="bg-blue-50 rounded-xl p-4 text-center shadow hover:scale-105 transition">
              <p className="text-blue-600 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">💼 Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-bold">UI Developer @ ProProfs</h3>
            <p className="text-gray-600">
              Worked on responsive design, optimized Core Web Vitals, developed pages with React + Tailwind, and contributed to frontend performance.
            </p>
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎓 Education</h2>
        <p className="text-gray-700">Bachelor of Computer Applications – [Your College Name]</p>
      </section>
    </div>
  );
}

export default AboutPage;
