import React, { useEffect, useState } from 'react';
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from '../api/api'; // adjust path if needed

function UserPage() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (editUser) {
      setFormData({ name: editUser.name, email: editUser.email });
    }
  }, [editUser]);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert('Please fill all fields');

    if (editUser) {
      await updateUser(editUser._id, formData);
      setEditUser(null);
    } else {
      await addUser(formData);
    }

    setFormData({ name: '', email: '' });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to Ashnil React+MongoDB Site</h1>
        <p className="mt-2 text-gray-700">
          This is the homepage where you can display your user data or dashboard.
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users from MongoDB</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="space-y-3 mb-10">
        {filteredUsers.map((u) => (
          <li
            key={u._id}
            className="flex justify-between items-center bg-white border p-4 rounded shadow-sm"
          >
            <span className="font-medium text-gray-700">
              {u.name} - <span className="text-gray-500">{u.email}</span>
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleDelete(u._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                ❌ Delete
              </button>
              <button
                onClick={() => setEditUser(u)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
              >
                ✏️ Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {editUser ? 'Edit User' : 'Add New User'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          {editUser ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>

    <div className="text-white bg-gray-900 font-sans">
      
      {/* 🌟 Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-800 to-purple-700 px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ashnil Chitravanshi</h1>
        <p className="text-xl mb-6">UI Developer | MERN Stack Enthusiast</p>
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
          View My Projects
        </a>
      </section>

      {/* 👤 About Section */}
      <section className="py-20 px-6 bg-gray-800 text-center" id="about">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          I'm a passionate UI Developer with experience in the MERN Stack.
          I enjoy creating responsive web applications and continuously learning new technologies.
        </p>
      </section>

      {/* 🧠 Tech Stack / Skills */}
      <section className="py-20 px-6 bg-gray-900 text-center" id="skills">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <span className="bg-gray-700 px-4 py-2 rounded-full">HTML</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">CSS</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Express</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">MongoDB</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Tailwind CSS</span>
        </div>
      </section>

      {/* 💼 Projects Section */}
      <section className="py-20 px-6 bg-gray-800 text-center" id="projects">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-700 p-6 rounded-lg w-72 shadow-md">
            <h3 className="text-xl font-bold mb-2">MERN CRUD App</h3>
            <p className="text-gray-300 mb-4">A full MERN app to add, edit, delete users with a styled UI.</p>
            <a href="https://mern-frontend-alpha-dun.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-400 underline">
              Live Demo
            </a>
            <br />
            <a href="https://github.com/Ashnil-chitra/mern-frontend" target="_blank" rel="noreferrer" className="text-blue-400 underline">
              GitHub Code
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="py-20 px-6 bg-gray-900 text-center" id="contact">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-4">Email: ashnil@example.com</p>
        <div className="flex justify-center gap-6 text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/Ashnil-chitra" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="mailto:ashnil@example.com" className="hover:text-blue-400">Mail</a>
        </div>
      </section>

      {/* ⚓ Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>© 2025 Ashnil Chitravanshi | All rights reserved</p>
      </footer>
    </div>
    </>
  );
}

export default UserPage;
