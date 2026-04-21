import {
  ArrowUpRight,
  BarChart3,
  Clock3,
  Eye,
  MonitorPlay,
  Users,
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { DataFootnote, FootnoteMark } from "@/components/data-footnote";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  categoryIcons,
  contentRules,
  differentiation,
  heroMetrics,
  monthlyData,
  purchaseExamples,
  rotationStats,
  scarcityPoints,
  siteConfig,
  trustPoints,
  venueInfo,
} from "@/lib/site-data";
import { formatNumber } from "@/lib/utils";

export default function HomePage() {
  const peakMonth = monthlyData.find((item) => item.month === "Agosto") ?? monthlyData[3];

  return (
    <>
      <section className="mesh-panel relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal>
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  Schermo sopra la cassa
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                  {venueInfo.name} · {venueInfo.place}
                </span>
              </div>

              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
                Se i tuoi clienti passano da qui,
                <span className="text-gold"> la tua pubblicità dovrebbe esserci.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Uno schermo dentro {venueInfo.name}, a {venueInfo.place}, in un supermercato turistico dove il pubblico locale e quello di passaggio
                si fermano davvero. Il tuo annuncio gira tutto il giorno, proprio sopra la cassa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contatti">{siteConfig.primaryCta}</ButtonLink>
                <ButtonLink href="/progetto" variant="secondary">
                  Scopri come funziona
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm text-white/58">
                Oppure verifica al volo se la tua categoria è ancora libera.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="font-display text-3xl font-bold text-white">{metric.value}</div>
                    <p className="mt-2 text-sm font-medium text-white/70">{metric.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:pl-8">
            <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 shadow-glow">
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-gold/30 bg-gold/10 blur-sm md:block" />
              <div className="absolute -bottom-4 left-10 hidden h-16 w-16 rounded-full bg-mint/15 blur-xl md:block" />
              <div className="rounded-[30px] border border-white/10 bg-black/30 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Picco stagionale</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-white">{peakMonth.month}</h2>
                  </div>
                  <div className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    Supermercato fisico
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-gold/20 bg-gradient-to-br from-gold/12 to-transparent p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">Presenze minime stimate / mese</p>
                  <div className="mt-3 font-display text-5xl font-bold text-white">
                    <AnimatedCounter value={peakMonth.monthlyPeopleMin} suffix="+" />
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
                    Basate su {formatNumber(peakMonth.monthlyReceipts)} scontrini<FootnoteMark /> mensili e almeno 2 persone per scontrino.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <Clock3 className="h-5 w-5 text-gold" />
                      <span className="text-sm font-semibold">Rotazione breve</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      Con 10 slot da 10 secondi, il giro completo dura circa 1 minuto e 40.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <Eye className="h-5 w-5 text-gold" />
                      <span className="text-sm font-semibold">Fila alla cassa</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      Lo schermo è sopra la cassa: chi aspetta lo vede per tutta la permanenza in fila.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-coral/25 bg-coral/10 px-4 py-4 text-sm text-white/80">
                  <ArrowUpRight className="h-5 w-5 text-coral" />
                  <span>Se il tuo concorrente entra prima, quel punto lo occupa lui.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <DataFootnote />
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Perché funziona"
              title="Il supermercato fa il resto."
              description="Pubblico in zona, orario esteso, fila alla cassa, schermo sempre acceso e passaggi continui dello stesso messaggio."
            />
          </Reveal>
          <div className="grid gap-4">
            {differentiation.map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
          <Reveal>
            <SectionHeading
              eyebrow="Dati che contano"
              title="Qui i numeri partono dal registratore, non dalla fantasia."
              description="Ogni scontrino diventa una base concreta per stimare il passaggio nel punto vendita. Luglio e agosto sono i mesi in cui il potenziale si alza davvero."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <Reveal key={point}>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72">
                  {point}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="rounded-[28px] border border-gold/25 bg-gold/10 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Luglio</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={52980} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-white/65">Presenze minime stimate nel mese<FootnoteMark />.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[28px] border border-gold/35 bg-gradient-to-br from-gold/18 to-mint/10 p-6 shadow-glow">
                <div className="flex items-center gap-3 text-white">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Agosto</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={58860} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-white/65">Presenze minime stimate nel mese più forte<FootnoteMark />.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                <div className="flex items-center gap-3 text-white">
                  <MonitorPlay className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Passaggi spot</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-white">
                  Circa {rotationStats.playsPerDayAtFullCapacity} visualizzazioni del tuo annuncio al giorno.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/dati-visibilita">Esplora i dati completi</ButtonLink>
            <ButtonLink href="/prezzi" variant="secondary">
              Vedi i prezzi
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Esempi semplici"
              title="Come si compra, in pratica"
              description="Chi arriva qui deve capire subito come trasformare l’idea in una prenotazione concreta."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {purchaseExamples.map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/prezzi" variant="secondary">
              Guarda gli esempi nei prezzi
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Rotazione"
              title="Dieci slot massimi. Dieci secondi ciascuno."
              description="Questo è il punto commerciale più forte: la rotazione resta corta, il messaggio torna spesso e l’attenzione non si disperde."
            />
            <div className="mt-8 rounded-[30px] border border-gold/25 bg-gradient-to-b from-gold/14 to-transparent p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Massimo 10 slot</p>
              <div className="mt-4 flex gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-12 flex-1 rounded-2xl ${index < 6 ? "animate-pulseLine bg-gold/85" : "bg-white/10"}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {rotationStats.secondsPerSlot} secondi per slot. {rotationStats.rotationSecondsAtFullCapacity} secondi per un giro completo. Se gli slot attivi sono meno di 10, le visualizzazioni del tuo annuncio aumentano ancora.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {scarcityPoints.map((item) => (
              <Reveal key={item}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm leading-7 text-white/72">{item}</p>
                </div>
              </Reveal>
            ))}
            {contentRules.slice(0, 2).map((item) => (
              <Reveal key={item}>
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                  <p className="text-sm leading-7 text-white/72">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="A chi è utile"
              title="Attività locali, eventi, promo, serate, locali."
              description="Il formato si adatta bene a chi vuole essere notato nel posto giusto: ristoranti, lidi, negozi, discoteche, palestre, centri estetici e servizi del territorio."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryIcons.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label}>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-center">
                    <div className="mx-auto flex h-14 w-14 animate-float items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">{item.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/settori-ideali" variant="secondary">
              Vedi i settori ideali
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Pochi slot, posizione forte, rotazione continua."
        text="Se vuoi capire subito quale mese o quale settimana ha più senso per la tua attività, vai ai contatti e seleziona il periodo direttamente nel form."
      />
    </>
  );
}
