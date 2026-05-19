import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Vite & Gourmand",
  description: "Application de commande de menus événementiels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold">
              Vite & Gourmand
            </Link>

            <div className="flex gap-4">
              <Link
                href="/"
                className="rounded border px-4 py-2 hover:bg-black hover:text-white"
              >
                Accueil
              </Link>

              <Link
                href="/menus"
                className="rounded border px-4 py-2 hover:bg-black hover:text-white"
              >
                Menus
              </Link>

              <Link
                href="/dashboard"
                className="rounded border px-4 py-2 hover:bg-black hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                href="/admin"
                className="rounded border px-4 py-2 hover:bg-black hover:text-white"
              >
                Admin
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl p-6">{children}</main>
      </body>
    </html>
  );
}