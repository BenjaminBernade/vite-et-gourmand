"use client";

import { use, useState } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function OrderPage({ params }: Props) {
  const { id } = use(params);
  const [quantity, setQuantity] = useState("");

  async function handleOrder() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menuId: id,
        quantity,
      }),
    });

    if (res.ok) {
      alert("Commande enregistrée");
      setQuantity("");
    } else {
      alert("Erreur commande");
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl rounded-lg border p-8 shadow">
        <h1 className="text-3xl font-bold">Commander ce menu</h1>

        <div className="mt-8 flex flex-col gap-4">
          <input
            className="border p-2"
            placeholder="Nombre de personnes"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            onClick={handleOrder}
            className="rounded bg-black px-6 py-3 text-white"
          >
            Valider la commande
          </button>
        </div>
      </div>
    </main>
  );
}