import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000); // Remove thank-you after 4s
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">📬 Contact Me</h2>

      {submitted && (
        <div className="text-green-600 font-semibold text-center mb-4 animate-bounce">
          Thank you! Your message has been sent 💌
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
