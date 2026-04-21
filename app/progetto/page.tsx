import { ArrowRight, Clock3, MonitorPlay, ShoppingCart, Tv2 } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contentRules, processSteps, rotationStats, venueInfo } from "@/lib/site-data";

const icons = [ShoppingCart, Tv2, MonitorPlay];

export default function ProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Il progetto"
        title="Uno schermo sopra la cassa, acceso tutto il giorno, nel punto più sensibile del supermercato."
        description={`Il primo schermo è dentro ${venueInfo.name}, a ${venueInfo.place}. Chi entra, chi aspetta in fila e chi passa nell’area cassa lo ha sempre davanti.`}
        secondaryLabel="Vai ai dati reali"
        secondaryHref="/dati-visibilita"
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Come funziona"
              title="Pochi passaggi per spiegarlo. Molti passaggi per farlo vedere."
              description="Il sistema è semplice: acquisti uno slot, invii un contenuto già pronto e il tuo annuncio entra in rotazione durante tutto l’orario di apertura."
            />
          </Reveal>

          <div className="grid gap-4">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={step.title}>
                  <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/40">Step {index + 1}</p>
                        <h3 className="font-display text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/70">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[34px] border border-gold/25 bg-gradient-to-br from-gold/14 to-transparent p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Perché la posizione conta</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white">Sopra la cassa, davanti alla fila, sempre acceso.</h2>
              <p className="mt-5 text-base leading-8 text-white/74">{venueInfo.screenPosition}</p>
              <p className="mt-4 text-base leading-8 text-white/68">
                Nei picchi di giugno, luglio e agosto la fila può durare anche diversi minuti. Questo allunga il tempo di esposizione e rende il
                messaggio molto più memorabile.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[34px] border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="flex items-center gap-3 text-white">
                <Clock3 className="h-5 w-5 text-gold" />
                <span className="text-sm font-semibold">Rotazione completa</span>
              </div>
              <div className="mt-5 font-display text-5xl font-bold text-white">1:40</div>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Con 10 slot attivi da 10 secondi ciascuno, il giro completo dura {rotationStats.rotationSecondsAtFullCapacity} secondi. Il tuo annuncio torna quindi circa{" "}
                <span className="font-semibold text-white">{rotationStats.playsPerDayAtFullCapacity} visualizzazioni al giorno</span>.
              </p>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7 text-white/68">
                  Questo calcolo è già prudenziale, perché considera la rotazione piena con tutti e 10 gli slot occupati. Se gli inserzionisti attivi sono meno, il ciclo è ancora più rapido.
                </p>
              </div>
              <p className="mt-4 text-sm text-white/58">Vuoi capire quanti slot ti servono davvero? Nella pagina prezzi trovi gli esempi più immediati.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Formato annunci"
              title="Regole semplici, spazio chiaro."
              description="Qui non si produce il contenuto: si vende lo spazio. Per questo gli annunci devono arrivare già pronti."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {contentRules.map((item) => (
              <Reveal key={item}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm leading-7 text-white/72">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Perché interessa a un’attività locale</p>
              <div className="mt-6 space-y-4">
                {[
                  "Presidi un punto vendita turistico, con pubblico locale e passaggio stagionale molto forte.",
                  "Resti visibile mentre le persone aspettano in cassa, non per una frazione di secondo.",
                  "Entri in una rotazione corta, non in un blocco infinito di annunci impersonali.",
                  "Puoi usare il mese o la settimana, anche solo per un evento o una promo precisa.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/72">
                    <ArrowRight className="mt-1 h-4 w-4 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[32px] border border-gold/25 bg-gradient-to-br from-gold/12 to-transparent p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Messaggio chiave</p>
              <h2 className="mt-5 font-display text-4xl font-bold text-white">
                Se i tuoi clienti passano di qui, non ha senso lasciar parlare solo gli altri.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70">
                In un supermercato come {venueInfo.name}, a {venueInfo.place}, il messaggio non cerca attenzione: la intercetta già nel punto in cui la gente si ferma davvero.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Vuoi capire quale periodo ha più senso per la tua attività?"
        text="Puoi partire con un mese, testare una settimana o bloccare più slot. La pagina contatti ti permette già di selezionare il periodo da richiedere."
      />
    </>
  );
}
