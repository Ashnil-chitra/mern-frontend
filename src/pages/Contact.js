// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">Contact Me</h1>
        <p className="mt-2 text-gray-600">Feel free to reach out via email or connect on socials.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-gray-800">📧 Email</p>
            <p className="text-gray-600">ashnil@example.com</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">🌐 LinkedIn</p>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-500">linkedin.com/in/yourprofile</a>
          </div>
          <div>
            <p className="font-semibold text-gray-800">💻 GitHub</p>
            <a href="https://github.com/Ashnil-chitra" target="_blank" className="text-blue-500">github.com/Ashnil-chitra</a>
          </div>
        </div>

        {/* Optional Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded p-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded p-2" />
          <textarea placeholder="Your Message" className="w-full border rounded p-2 h-32" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;