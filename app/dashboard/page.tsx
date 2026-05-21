import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  const orders = await prisma.order.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    include: {
      menu: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="min-h-screen">
      <h1 className="text-4xl font-bold">Mon espace</h1>

      <p className="mt-3 text-gray-600">
        Retrouvez ici l’historique de vos commandes et le suivi de vos
        réservations.
      </p>

      <div className="mt-10 space-y-6">
        {orders.length === 0 ? (
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p>Aucune commande enregistrée.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold">{order.menu.title}</h2>

              <p className="mt-3 text-gray-700">
                Nombre de personnes : {order.quantity}
              </p>

              <p className="mt-2 text-gray-700">
                Prix total : {order.totalPrice} €
              </p>

              <p className="mt-2">
                Statut :
                <span className="ml-2 rounded bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-800">
                  {order.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}