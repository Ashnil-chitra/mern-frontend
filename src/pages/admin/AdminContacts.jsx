import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('https://mern-backend-xl9k.onrender.com/api/contact');
      setContacts(res.data);
    } catch (err) {
      alert('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://mern-backend-xl9k.onrender.com/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📬 Contact Messages</h2>
      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Message</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c._id} className="border-b">
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.message}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteContact(c._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContacts;
