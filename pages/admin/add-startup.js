import { useState } from "react";

export default function AddStartup() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/startups/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        setFormData({ name: "", description: "", website: "", contact: "" });
      }
    } catch (error) {
      setMessage("Error adding startup");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Startup</h2>
      {message && <p className="form-message">{message}</p>}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Startup Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          value={formData.website}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={formData.contact}
          onChange={handleChange}
          required
          className="form-input"
        />
        <button
          type="submit"
          disabled={loading}
          className="form-button"
        >
          {loading ? "Adding..." : "Add Startup"}
        </button>
      </form>
      <a href="/" className="back-button">Back to Home</a>


      <style jsx>{`
        .form-container {
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          max-width: 500px;
          margin: 20px auto;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 16px;
          color: #333;
        }

        .form-message {
          color: green;
          margin-bottom: 16px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: #007bff;
        }

        .form-button {
          padding: 12px;
          background-color: #007bff;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .form-button:hover:not(:disabled) {
          background-color: #0056b3;
        }
          .back-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    background-color: #6c757d;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
  }

  .back-button:hover {
    background-color: #5a6268;
  }
      `}</style>
    </div>
  );
}
