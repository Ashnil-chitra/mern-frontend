// src/api/api.js

const BASE_URL = process.env.REACT_APP_BASE_URL;

// ✅ Get all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

// ✅ Add new user
export const addUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  return data;
};

// ✅ Update user
export const updateUser = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });
  return await response.json();
};

// ✅ Delete user
export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE"
  });
  return await response.json();
};


// Get feedbacks
export const getFeedbacks = async () => {
  const response = await fetch(`${BASE_URL}/feedbacks`);
  return await response.json();
};

// Post feedback
export const addFeedback = async (feedback) => {
  const response = await fetch(`${BASE_URL}/feedbacks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(feedback),
  });
  return await response.json();
};