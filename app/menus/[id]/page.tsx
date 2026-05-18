import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MenuDetailPage({ params }: Props) {
  const { id } = await params;

  const menu = await prisma.menu.findUnique({
    where: {
      id,
    },
  });

  if (!menu) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl rounded-lg border p-8 shadow">
        <h1 className="text-4xl font-bold">{menu.title}</h1>

        <p className="mt-4 text-lg text-gray-600">{menu.description}</p>

        <div className="mt-6">
          <p className="text-2xl font-semibold">{menu.price} €</p>

          <p className="mt-2 text-gray-500">
            Stock disponible : {menu.stock}
          </p>
        </div>

        <Link
          href={`/order/${menu.id}`}
          className="mt-8 inline-block rounded bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Commander
        </Link>
      </div>
    </main>
  );
}