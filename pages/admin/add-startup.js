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
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Startup</h2>
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Startup Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          value={formData.website}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={formData.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Adding..." : "Add Startup"}
        </button>
      </form>
    </div>
  );
}
