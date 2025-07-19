import React from 'react';
import passportPhoto from '../assets/passport.jpg';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      
      {/* Hero Section with Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <motion.img
          src={passportPhoto}
          alt="Ashnil Chitravanshi"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Ashnil Chitravanshi</h1>
          <p className="text-gray-600 mt-2 text-lg">
            MERN Stack Developer from Noida, India. Passionate about building fast, responsive web apps and constantly learning new technologies.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🚀 Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'JavaScript', 'REST APIs'].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-blue-50 rounded-xl p-4 text-center shadow hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-600 font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">💼 Experience</h2>
        <ul className="space-y-4">
          <motion.li
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">UI Developer @ ProProfs</h3>
            <p className="text-gray-600">
              Worked on responsive design, optimized Core Web Vitals, developed pages with React + Tailwind, and contributed to frontend performance.
            </p>
          </motion.li>
        </ul>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎓 Education</h2>
        <p className="text-gray-700">Bachelor of Computer Applications – [Your College Name]</p>
      </motion.section>
    </div>
  );
}

export default AboutPage;
