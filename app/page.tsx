import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Vite & Gourmand</h1>
      <p className="mt-4 text-lg">
        Application web de commande de menus événementiels.
      </p>

      <nav className="mt-8 flex gap-4">
        <Link className="rounded bg-black px-4 py-2 text-white" href="/menus">
          Voir les menus
        </Link>

        <Link className="rounded border px-4 py-2" href="/register">
          Créer un compte
        </Link>

        <Link className="rounded border px-4 py-2" href="/api/auth/signin">
          Connexion
        </Link>

        <Link className="rounded border px-4 py-2" href="/dashboard">
          Mon espace
        </Link>
      </nav>
    </main>
  );
}