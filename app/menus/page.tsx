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
  <section className="mx-auto max-w-6xl p-6">
    <div className="mb-10">
      <h1 className="text-5xl font-bold">Nos menus</h1>

      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Découvrez nos menus événementiels préparés pour vos repas de
        famille, fêtes, réceptions et moments gourmands.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold">{menu.title}</h2>

              <p className="mt-3 text-gray-600">
                {menu.description}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                menu.stock <= 5
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {menu.stock <= 5 ? "Stock faible" : "Disponible"}
            </span>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">
                {menu.price} €
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Stock disponible : {menu.stock}
              </p>
            </div>

            <Link
              href={`/menus/${menu.id}`}
              className="rounded-xl bg-black px-5 py-3 text-white transition hover:bg-gray-800"
            >
              Voir le détail
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}