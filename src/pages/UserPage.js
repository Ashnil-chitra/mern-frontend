import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert('Please fill all fields');

    if (editUser) {
      await axios.put(`http://localhost:5000/api/users/${editUser._id}`, formData);
      setEditUser(null);
    } else {
      await axios.post('http://localhost:5000/api/users', formData);
    }

    setFormData({ name: '', email: '' });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to MERN Site</h1>
      <p className="mt-2 text-gray-700">This is the homepage where you can display your user data or dashboard.</p>
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
  );
}

export default UserPage;
