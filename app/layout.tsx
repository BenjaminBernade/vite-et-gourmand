import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vite & Gourmand",
  description: "Application de commande de menus événementiels",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="text-xl font-bold sm:text-2xl"
            >
              Vite & Gourmand
            </Link>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href="/"
                className="rounded border px-3 py-2 text-center transition hover:bg-black hover:text-white sm:px-4"
              >
                Accueil
              </Link>

              <Link
                href="/menus"
                className="rounded border px-3 py-2 text-center transition hover:bg-black hover:text-white sm:px-4"
              >
                Menus
              </Link>

              <Link
                href="/dashboard"
                className="rounded border px-3 py-2 text-center transition hover:bg-black hover:text-white sm:px-4"
              >
                Mon espace
              </Link>

              <Link
                href="/admin"
                className="rounded border px-3 py-2 text-center transition hover:bg-black hover:text-white sm:px-4"
              >
                Admin
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          {children}
        </main>

        <footer className="mt-16 border-t bg-white sm:mt-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm text-gray-600 sm:px-6 md:flex-row md:items-center md:justify-between">
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

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Link href="/mentions-legales">
                Mentions légales
              </Link>

              <Link href="/cgv">
                CGV
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}