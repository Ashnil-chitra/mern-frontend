// components/DashboardChart.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const DashboardChart = ({ stats }) => {
  const data = [
    { name: "Users", value: stats.users },
    { name: "Contacts", value: stats.contacts },
    { name: "Projects", value: stats.projects },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Dashboard Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
