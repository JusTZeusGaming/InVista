import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalEntity, siteConfig, venueInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Informazioni Legali | ${siteConfig.name}`,
  description: "Dati identificativi e informazioni legali del progetto InVista.",
};

export default function LegalInfoPage() {
  return (
    <LegalPage
      eyebrow="Informazioni Legali"
      title="Dati identificativi del titolare"
      description="Questa pagina raccoglie le principali informazioni societarie e fiscali riferite al titolare del sito."
    >
      <section>
        <h2 className="font-display text-2xl font-bold text-white">1. Titolare del sito</h2>
        <p className="mt-3">
          Il sito e il progetto commerciale <strong className="text-white">{legalEntity.brandName}</strong> fanno capo a{" "}
          <strong className="text-white">{legalEntity.businessName}</strong>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">2. Dati fiscali</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Forma giuridica: {legalEntity.legalForm}</li>
          <li>P. IVA: {legalEntity.vatNumber}</li>
          <li>Codice fiscale: {legalEntity.taxCode}</li>
          <li>Data inizio attività: {legalEntity.businessStartDate}</li>
          <li>ATECO: {legalEntity.atecoCode}</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">3. Sede fiscale</h2>
        <p className="mt-3">
          {legalEntity.addressLine}, {legalEntity.cityLine}
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">4. Oggetto del sito</h2>
        <p className="mt-3">
          Il sito promuove la vendita di spazi pubblicitari su schermo all’interno del punto vendita indicato nel progetto, con
          primo schermo installato presso {venueInfo.name}, a {venueInfo.place}.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">5. Contatti</h2>
        <p className="mt-3">
          Per richieste informative o commerciali è possibile utilizzare i recapiti indicati nelle pagine del sito, incluso
          l’indirizzo email {siteConfig.email}.
        </p>
      </section>
    </LegalPage>
  );
}
