export default function CgvPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold">
        Conditions générales de vente
      </h1>

      <p className="text-gray-600">
        Ces conditions générales sont fournies à titre pédagogique dans le cadre
        du projet ECF Vite & Gourmand.
      </p>

      <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Commandes</h2>
          <p className="text-gray-600">
            Les commandes de menus sont effectuées en ligne via l’application.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Paiement</h2>
          <p className="text-gray-600">
            Les prix affichés sont exprimés en euros TTC.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Annulation</h2>
          <p className="text-gray-600">
            Toute demande d’annulation doit être effectuée avant validation
            définitive de la commande.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Projet pédagogique</h2>
          <p className="text-gray-600">
            Cette application a été développée dans le cadre d’une évaluation de
            formation Développeur Web et Web Mobile.
          </p>
        </div>
      </div>
    </section>
  );
}