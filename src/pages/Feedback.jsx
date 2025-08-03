import React, { useEffect, useState } from "react";
import { getFeedbacks, addFeedback } from "../api/api";


function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    getFeedbacks().then(setFeedbacks);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = await addFeedback(form);
    setFeedbacks([newFeedback, ...feedbacks]);
    setForm({ name: "", message: "" });
  };

  const handleVoiceInput = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition not supported in your browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => setRecording(true);
  recognition.onend = () => setRecording(false);

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    setForm((prev) => ({ ...prev, message: prev.message + " " + speechToText }));
  };

  recognition.start();
};


  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Feedback</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your message"
          className="w-full border p-2"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>

    <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={handleVoiceInput}
      className={`flex items-center gap-2 px-4 py-2 rounded transition ${
        recording
          ? "bg-red-500 text-white"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
    >
      <span className="text-lg">🎤</span> {recording ? "Listening..." : "Speak"}
    </button>

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition shadow-sm"
    >
      Submit
    </button>
  </div>
      </form>

      <div className="space-y-3">
        {feedbacks.map((fb) => (
          <div key={fb._id} className="border p-3 shadow-sm">
            <p className="font-semibold">{fb.name}</p>
            <p>{fb.message}</p>
            <p className="text-xs text-gray-400">
              {new Date(fb.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
