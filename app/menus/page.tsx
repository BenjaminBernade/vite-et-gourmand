import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function MenusPage() {
  const menus = await prisma.menu.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-8 text-4xl font-bold">Nos menus</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <div key={menu.id} className="rounded-lg border p-4 shadow">
            <h2 className="text-2xl font-bold">{menu.title}</h2>

            <p className="mt-2 text-gray-600">
              {menu.description}
            </p>

            <p className="mt-4 text-xl font-semibold">
              {menu.price} €
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Stock disponible : {menu.stock}
            </p>

            <Link
              href={`/menus/${menu.id}`}
              className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
            >
              Voir le détail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}