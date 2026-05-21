export default function MentionsLegalesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold">Mentions légales</h1>

      <p className="text-gray-600">
        Site réalisé dans le cadre de l’ECF Développeur Web et Web Mobile.
      </p>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p><strong>Nom du projet :</strong> Vite & Gourmand</p>
        <p><strong>Développeur :</strong> Benjamin Bernade</p>
        <p><strong>Hébergement :</strong> Vercel</p>
        <p><strong>Base de données :</strong> Neon PostgreSQL</p>
      </div>
    </section>
  );
}