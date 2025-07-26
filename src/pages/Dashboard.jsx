import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardChart from "../components/DashboardChart";

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, contacts: 0, projects: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("https://mern-backend-xl9k.onrender.com/api/dashboard/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching dashboard stats", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <DashboardChart stats={stats} />
    </div>
  );
};

export default Dashboard;
