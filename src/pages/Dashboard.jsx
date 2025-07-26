import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, contacts: 0, projects: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mern-backend-xl9k.onrender.com/api/dashboard/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading dashboard data", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading stats...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl text-blue-600">{stats.users}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Total Contacts</h2>
            <p className="text-3xl text-green-600">{stats.contacts}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Total Projects</h2>
            <p className="text-3xl text-purple-600">{stats.projects}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
