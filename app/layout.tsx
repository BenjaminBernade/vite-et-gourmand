import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vite & Gourmand",
  description: "Application de commande de menus événementiels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-100 text-black">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
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
                Mon espace
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

        <footer className="mt-20 border-t bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-black">
                Vite & Gourmand
              </p>

              <p className="mt-2">
                Menus événementiels pour vos repas, fêtes et réceptions.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                Horaires
              </p>

              <p className="mt-2">
                Lundi - Dimanche : 9h00 - 20h00
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/mentions-legales">
                Mentions légales
              </Link>

              <Link href="/cvg">
                CGV
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}