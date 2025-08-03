import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MERN Site</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
             <Link to="/admin/contacts" className="hover:text-blue-500">AdminContacts</Link>
             <Link to="/feedback" className="hover:text-blue-500">Feedback</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
