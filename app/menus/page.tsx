import { prisma } from "@/lib/prisma";

import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function MenusPage() {
  const menus = await prisma.menu.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
  <section className="min-h-screen">
    <div className="mb-8">
      <h1 className="text-4xl font-bold">Nos menus</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        Découvrez nos menus événementiels préparés pour vos repas de famille,
        fêtes, réceptions et moments gourmands.
      </p>
    </div>

    {menus.length === 0 ? (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p>Aucun menu disponible pour le moment.</p>
      </div>
    ) : (
      <div className="grid gap-6 md:grid-cols-2">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-bold">{menu.title}</h2>

            <p className="mt-3 text-gray-600">{menu.description}</p>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">{menu.price} €</p>
                <p className="mt-1 text-sm text-gray-500">
                  Stock disponible : {menu.stock}
                </p>
              </div>

              <Link
                href={`/menus/${menu.id}`}
                className="rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800"
              >
                Voir le détail
              </Link>
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);
}