import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      orders: {
        include: {
          menu: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Espace utilisateur</h1>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Mes commandes</h2>

        <div className="mt-4 flex flex-col gap-4">
          {user?.orders.length === 0 && (
            <p>Vous n’avez pas encore passé de commande.</p>
          )}

          {user?.orders.map((order) => (
            <div key={order.id} className="rounded border p-4 shadow">
              <h3 className="text-xl font-bold">{order.menu.title}</h3>

              <p>Nombre de personnes : {order.quantity}</p>
              <p>Prix total : {order.totalPrice} €</p>
              <p>Statut : {order.status}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}