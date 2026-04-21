import { Eye, Receipt, Repeat, Users2 } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { CtaBanner } from "@/components/cta-banner";
import { DataFootnote, FootnoteMark } from "@/components/data-footnote";
import { MonthlyChart } from "@/components/monthly-chart";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { keyMessages, monthlyData, rotationStats, venueInfo } from "@/lib/site-data";
import { formatNumber } from "@/lib/utils";

export default function DataPage() {
  const totalReceipts = monthlyData.reduce((sum, item) => sum + item.monthlyReceipts, 0);
  const totalPeopleMin = monthlyData.reduce((sum, item) => sum + item.monthlyPeopleMin, 0);

  return (
    <>
      <PageHero
        eyebrow="Dati e visibilità"
        title="Numeri reali, posizione forte, rotazione corta."
        description={`Qui i dati non servono a decorare la pagina: servono a capire quanta esposizione può avere il tuo annuncio dentro ${venueInfo.name}, nel pieno della stagione.`}
        secondaryLabel="Vedi i prezzi"
        secondaryHref="/prezzi"
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Base di calcolo"
              title={
                "Scontrini reali"
              }
              description="Le stime partono dai corrispettivi ufficiali della stagione precedente. Ogni scontrino viene considerato come almeno 2 presenze nel supermercato: è una lettura prudenziale, non gonfiata."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <Receipt className="h-6 w-6 text-gold" />
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={totalReceipts} />
                </div>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  Scontrini<FootnoteMark /> complessivi nel periodo analizzato.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[28px] border border-gold/25 bg-gold/10 p-6">
                <Users2 className="h-6 w-6 text-gold" />
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={totalPeopleMin} suffix="+" />
                </div>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  Presenze minime stimate<FootnoteMark /> nello stesso periodo.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <Repeat className="h-6 w-6 text-gold" />
                <div className="mt-4 font-display text-4xl font-bold text-white">{rotationStats.playsPerDayAtFullCapacity}</div>
                <p className="mt-2 text-sm leading-7 text-white/68">Visualizzazioni giornaliere del tuo annuncio, con 10 slot attivi.</p>
              </div>
            </Reveal>
          </div>
        </div>
        <DataFootnote />
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Breakdown mensile"
              title="I picchi estivi si vedono subito"
              description="Luglio e agosto sono i mesi in cui la pressione sul punto vendita sale in modo evidente. E quando il flusso aumenta, il tuo spot continua a girare nello stesso punto strategico."
            />
          </Reveal>
          <div className="mt-10">
            <MonthlyChart data={monthlyData} />
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[36px] border border-gold/25 bg-gradient-to-br from-gold/14 to-transparent p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Rotazione giornaliera</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Uno slot da 10 secondi può ottenere circa {rotationStats.playsPerDayAtFullCapacity} visualizzazioni al giorno.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Con 10 slot massimi la rotazione completa dura {rotationStats.rotationSecondsAtFullCapacity} secondi. In un’apertura da{" "}
                {rotationStats.openingHoursLabel}, il tuo annuncio torna in continuazione per tutta la giornata.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-white/76">
                  10 slot massimi
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-white/76">
                  100 secondi a rotazione piena
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-white/76">
                  15.660 visualizzazioni circa in 30 giorni
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="flex items-center gap-3 text-white">
                <Eye className="h-5 w-5 text-gold" />
                <span className="text-sm font-semibold">Perché si nota</span>
              </div>
              <div className="mt-6 space-y-5 text-sm leading-7 text-white/72">
                <p>{keyMessages.real}</p>
                <p>
                  Il televisore è posizionato sopra la cassa, quindi intercetta la fila in modo naturale. Nei momenti di affluenza più alta, le persone restano davanti allo schermo per minuti.
                </p>
                <p>
                  Questo è il dettaglio che cambia tutto: non conta solo quanta gente entra. Conta anche quante volte il messaggio torna mentre quella gente aspetta.
                </p>
              </div>
              <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/65">
                  Agosto, per esempio, parte da {formatNumber(29430)} scontrini<FootnoteMark /> mensili e arriva già a{" "}
                  <span className="font-semibold text-white">{formatNumber(58860)} presenze minime stimate</span>
                  <FootnoteMark />.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Vuoi un periodo con tanto passaggio o preferisci una settimana mirata?"
        text="Puoi scegliere il mese più adatto o usare un blocco da 7 giorni interno allo stesso mese per spingere un evento, un’offerta o un locale."
      />
    </>
  );
}
