import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalEntity, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "Informativa sul trattamento dei dati personali del sito InVista.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Informativa sul trattamento dei dati personali"
      description="Questa informativa descrive come vengono trattati i dati personali raccolti attraverso il sito e i suoi canali di contatto."
    >
      <section>
        <h2 className="font-display text-2xl font-bold text-white">1. Titolare del trattamento</h2>
        <p className="mt-3">
          Il titolare del trattamento è <strong className="text-white">{legalEntity.businessName}</strong>, con sede in{" "}
          {legalEntity.addressLine}, {legalEntity.cityLine}, P. IVA {legalEntity.vatNumber}, C.F. {legalEntity.taxCode}.
        </p>
        <p className="mt-3">Per richieste relative alla privacy è possibile scrivere a {siteConfig.email}.</p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">2. Dati trattati</h2>
        <p className="mt-3">
          Il sito può trattare dati identificativi e di contatto forniti volontariamente dall’utente, come nome, attività,
          indirizzo email, numero di telefono e contenuto del messaggio inviato tramite form o contatti diretti.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">3. Finalità del trattamento</h2>
        <p className="mt-3">I dati vengono trattati per:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>rispondere a richieste di informazioni o preventivi;</li>
          <li>gestire contatti commerciali relativi agli spazi pubblicitari offerti;</li>
          <li>adempiere a eventuali obblighi di legge, fiscali o amministrativi.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">4. Base giuridica</h2>
        <p className="mt-3">
          La base giuridica del trattamento è l’esecuzione di misure precontrattuali adottate su richiesta dell’interessato,
          nonché l’adempimento di obblighi legali ove applicabili.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">5. Modalità di trattamento</h2>
        <p className="mt-3">
          I dati sono trattati con strumenti elettronici e organizzativi adeguati a garantirne la sicurezza, la riservatezza e
          la pertinenza rispetto alle finalità sopra indicate.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">6. Conservazione dei dati</h2>
        <p className="mt-3">
          I dati vengono conservati per il tempo strettamente necessario a gestire la richiesta ricevuta e, se necessario, per i
          tempi previsti dagli obblighi normativi o fiscali applicabili.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">7. Comunicazione dei dati</h2>
        <p className="mt-3">
          I dati non vengono diffusi. Possono essere comunicati a soggetti tecnici o professionali che supportano la gestione del
          sito o dell’attività, nei limiti strettamente necessari e nel rispetto della normativa vigente.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">8. Diritti dell’interessato</h2>
        <p className="mt-3">
          L’interessato può esercitare i diritti previsti dagli articoli 15 e seguenti del Regolamento UE 2016/679, tra cui
          accesso, rettifica, cancellazione, limitazione, opposizione e reclamo al Garante per la protezione dei dati personali.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">9. Aggiornamenti</h2>
        <p className="mt-3">
          La presente informativa può essere aggiornata nel tempo. Eventuali modifiche saranno pubblicate su questa pagina.
        </p>
      </section>
    </LegalPage>
  );
}
