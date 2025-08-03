import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; 
import Dashboard from './pages/Dashboard';
import AdminContacts from './pages/admin/AdminContacts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedback from './pages/Feedback';





function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
   
  <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/dashboard" element={<Dashboard />} /> 
                 <Route path="/admin/contacts" element={<AdminContacts />} />
                          <Route path="/feedback" element={<Feedback />} />
                      


      </Routes>
      </div>
    </Router>
  );
}

export default App;
