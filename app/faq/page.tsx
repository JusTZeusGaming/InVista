import { CtaBanner } from "@/components/cta-banner";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Domande intelligenti, risposte chiare."
        description="Questa sezione serve a togliere dubbi in fretta e a far capire che il progetto è semplice, serio e pensato per attività reali."
        secondaryLabel="Contattami"
        secondaryHref="/contatti"
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Dubbi frequenti"
              title="Il progetto è semplice. La differenza la fanno i dettagli."
              description="Se non trovi qui la risposta che ti serve, possiamo parlarne direttamente e capire in pochi minuti se questa soluzione ha senso per la tua attività."
            />
            <div className="mt-8 rounded-[30px] border border-gold/25 bg-gold/10 p-6 text-sm leading-7 text-white/76">
              Gli slot sono pochi per scelta, non per caso. Il sito è costruito per selezionare attività che vogliono davvero una presenza
              locale visibile, non solo “provare una pubblicità”.
            </div>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Hai un dubbio specifico sul tuo settore o sulla tua categoria?"
        text="Scrivimi ora. Possiamo verificare insieme disponibilità, compatibilità col progetto e tempi di partenza."
      />
    </>
  );
}
