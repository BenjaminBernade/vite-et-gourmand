import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-10">
      <section className="rounded-3xl bg-linear-to-r from-black to-gray-800 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16 lg:py-20">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Vite & Gourmand
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Commandez facilement vos menus événementiels pour vos repas de
          famille, fêtes et réceptions.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/menus"
            className="w-full rounded-xl bg-black px-6 py-3 text-center text-white transition hover:opacity-90 sm:w-auto"
          >
            Découvrir les menus
          </Link>

          <Link
            href="/register"
            className="w-full rounded-xl border px-6 py-3 text-center transition hover:bg-black hover:text-white sm:w-auto"
          >
            Créer un compte
          </Link>

          <Link
            href="/api/auth/signin"
            className="w-full rounded-xl border px-6 py-3 text-center transition hover:bg-black hover:text-white sm:w-auto"
          >
            Connexion
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold sm:text-3xl">
          Une expérience simple et rapide
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Vite & Gourmand vous accompagne pour tous vos événements avec des
          menus savoureux et une gestion simplifiée des commandes.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-bold">Menus variés</h3>

            <p className="mt-2 text-gray-600">
              Découvrez des menus adaptés à tous vos événements.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-bold">Commande rapide</h3>

            <p className="mt-2 text-gray-600">
              Réservez vos menus en quelques clics simplement.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm sm:p-6">
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