"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price, image }),
    });

    if (res.ok) {
      alert("Menu créé");
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
    } else {
      alert("Erreur création menu");
    }
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Administration</h1>
        <p className="mt-3 text-gray-600">
            Gérez les menus disponibles et les stocks de l’application.
        </p>

      <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-4">
        <input
          className="border p-2"
          placeholder="Titre du menu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="border p-2"
          placeholder="Prix"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border p-2"
          placeholder="URL image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="rounded bg-black p-2 text-white" type="submit">
          Créer le menu
        </button>
      </form>
    </main>
  );
}