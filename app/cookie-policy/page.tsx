import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.name}`,
  description: "Informativa sull'uso dei cookie del sito InVista.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Informativa sull’uso dei cookie"
      description="Questa pagina spiega quali cookie o tecnologie simili possono essere utilizzati dal sito."
    >
      <section>
        <h2 className="font-display text-2xl font-bold text-white">1. Cosa sono i cookie</h2>
        <p className="mt-3">
          I cookie sono piccoli file di testo che i siti web possono salvare sul dispositivo dell’utente per garantire
          funzionalità tecniche, migliorare l’esperienza di navigazione o raccogliere dati statistici.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">2. Cookie utilizzati da questo sito</h2>
        <p className="mt-3">
          Allo stato attuale, questo sito utilizza esclusivamente cookie tecnici o strumenti equivalenti strettamente necessari al
          funzionamento della piattaforma e alla corretta erogazione delle pagine.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">3. Cookie di profilazione</h2>
        <p className="mt-3">
          Questo sito non utilizza cookie di profilazione, pubblicitari o di tracciamento per finalità di marketing diretto.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">4. Cookie di terze parti</h2>
        <p className="mt-3">
          Alla data di pubblicazione di questa informativa non risultano integrati servizi di analytics, advertising o pixel di
          terze parti che rilascino cookie di profilazione.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">5. Gestione dei cookie</h2>
        <p className="mt-3">
          L’utente può gestire o disabilitare i cookie tecnici tramite le impostazioni del proprio browser, tenendo presente che la
          loro disattivazione potrebbe compromettere il corretto funzionamento del sito.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white">6. Aggiornamenti</h2>
        <p className="mt-3">
          Qualora il sito integri in futuro strumenti che richiedano cookie ulteriori o consenso specifico, questa pagina sarà
          aggiornata di conseguenza.
        </p>
      </section>
    </LegalPage>
  );
}
