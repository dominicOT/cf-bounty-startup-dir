import { db } from "../../../lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, description, website, contact } = req.body;
    
    if (!name || !description || !contact) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await db.collection("startups").add({
      name,
      description,
      website: website || "",
      contact,
      createdAt: new Date(),
    });

    return res.status(201).json({ message: "Startup added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
}
