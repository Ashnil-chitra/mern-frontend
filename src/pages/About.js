import React from 'react';

function About() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">About This Project</h2>
      <p className="text-gray-700 mb-2">
        This project is a full-stack MERN application showing CRUD functionality with a beautiful UI built using Tailwind CSS.
      </p>
      <p className="text-gray-700">
        It includes a React frontend, Express backend, MongoDB database, and is ready to be deployed to free hosting platforms.
      </p>
    </div>
  );
}

export default About;
