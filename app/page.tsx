import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-12">
      <section className="rounded-3xl bg-linear-to-r from-black to-gray-800 px-10 py-20 text-white shadow-xl">
        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Vite & Gourmand
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Commandez facilement vos menus événementiels pour vos repas de
          famille, fêtes et réceptions.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/menus"
            className="rounded bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Découvrir les menus
          </Link>

          <Link
            href="/register"
            className="rounded border border-white px-6 py-3 transition hover:bg-white hover:text-black"
          >
            Créer un compte
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold">
          Une expérience simple et rapide
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Vite & Gourmand vous accompagne pour tous vos événements avec des
          menus savoureux et une gestion simplifiée des commandes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Menus variés</h3>

            <p className="mt-2 text-gray-600">
              Découvrez des menus adaptés à tous vos événements.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Commande rapide</h3>

            <p className="mt-2 text-gray-600">
              Réservez vos menus en quelques clics simplement.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Suivi client</h3>

            <p className="mt-2 text-gray-600">
              Retrouvez facilement vos commandes dans votre espace personnel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}