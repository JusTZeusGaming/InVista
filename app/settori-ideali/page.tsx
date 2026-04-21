import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sectorCards } from "@/lib/site-data";

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="A chi è adatto"
        title="Se lavori nel territorio e vuoi clienti veri, qui puoi esserci anche tu."
        description="Questa soluzione è pensata per attività e professionisti che vogliono essere visibili nel mondo reale, non per brand che cercano solo metriche vuote."
        secondaryLabel="Richiedi disponibilità"
        secondaryHref="/contatti"
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Settori ideali"
              title="Il punto non è il settore. Il punto è avere qualcosa da far scegliere, ricordare o prenotare."
              description="Se la tua attività lavora sul territorio, ha un’offerta chiara e vuole intercettare persone già fuori casa, il progetto può avere molto senso."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectorCards.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[32px] border border-gold/25 bg-gradient-to-br from-gold/12 to-transparent p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Il pensiero giusto</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white">Potrei esserci anch’io.</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">
                Esattamente. Se hai un servizio locale, un prodotto, un’offerta, un evento o una promozione da portare davanti a persone reali,
                questo spazio può diventare un presidio molto concreto.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Chi si trova meglio qui</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                <p>Attività con un territorio definito e una proposta semplice da capire.</p>
                <p>Brand che vogliono entrare nella mente del pubblico con ripetizione e contesto fisico.</p>
                <p>Chi sa che la presenza locale vale di più quando viene vista dal vivo, non solo online.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Vuoi capire se il tuo settore è perfetto per questo spazio?"
        text="Scrivimi e vediamo subito se la tua attività rientra nel progetto, se la categoria è libera e con quale formula puoi partire."
      />
    </>
  );
}
