import {
  ArrowRight,
  BarChart3,
  Clock3,
  Eye,
  MonitorPlay,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { DataFootnote, FootnoteMark } from "@/components/data-footnote";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  monthlyData,
  processSteps,
  rotationStats,
  seasonalOffer,
  siteConfig,
  venueInfo,
} from "@/lib/site-data";
import { formatNumber } from "@/lib/utils";

function euro(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function percent(value: number) {
  return new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

const stepsIcons = [ShoppingCart, MonitorPlay, Eye];

const quickProofs = [
  "Punto altamente turistico",
  "Flusso reale e continuo",
  "Massimo 10 attività in rotazione",
];

const whyItWorks = [
  {
    title: "Posizione forte",
    text: "Lo schermo è nel punto più sensibile del supermercato: sopra la cassa, davanti alla fila.",
    icon: Eye,
  },
  {
    title: "Rotazione corta",
    text: `Con 10 slot da 10 secondi, il giro completo dura circa ${rotationStats.rotationSecondsAtFullCapacity} secondi.`,
    icon: Clock3,
  },
  {
    title: "Territorio giusto",
    text: "Parli a persone già presenti in zona, già fuori casa e spesso già in un momento di spesa.",
    icon: Users,
  },
];

const commercialCards = [
  {
    eyebrow: "Formula mese",
    title: "Dal giorno 1 al giorno 30 o 31",
    text: `Prezzi mensili da ${monthlyData[0].monthlyPrice} euro a ${monthlyData[3].monthlyPrice} euro, in base alla forza del periodo.`,
    href: "/prezzi",
    label: "Vedi i mesi",
  },
  {
    eyebrow: "Formula settimana",
    title: "Blocchi chiari da 7 giorni",
    text: "2 settimane = sconto totale del 10%. 3 settimane = sconto totale del 20%. Dalla quarta si passa al mese.",
    href: "/contatti",
    label: "Scegli il periodo",
  },
  {
    eyebrow: "Stagione completa",
    title: `${percent(seasonalOffer.discountPercent)}% di sconto sul totale`,
    text: `Sull'intero periodo ${seasonalOffer.period} il totale passa da ${euro(seasonalOffer.fullPrice)} a ${euro(seasonalOffer.discountedPrice)}.`,
    href: "/prezzi",
    label: "Guarda l'offerta",
  },
];

export default function HomePage() {
  const july = monthlyData.find((item) => item.month === "Luglio") ?? monthlyData[2];
  const august = monthlyData.find((item) => item.month === "Agosto") ?? monthlyData[3];
  const seasonReceipts = monthlyData.reduce((sum, item) => sum + item.monthlyReceipts, 0);
  const seasonPeople = monthlyData.reduce((sum, item) => sum + item.monthlyPeopleMin, 0);

  return (
    <>
      <section className="mesh-panel relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <Reveal>
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                {quickProofs.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/35 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.94] tracking-tight text-white md:text-7xl">
                La tua pubblicita nel pieno del flusso turistico di Torre Lapillo.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74 md:text-xl">
                Il tuo annuncio gira ogni giorno a {venueInfo.place}, in un punto vendita inserito in un'area molto vissuta, fortemente turistica e con passaggio costante per tutta la stagione.
                Parliamo di oltre {formatNumber(seasonPeople)} presenze reali stimate in stagione<FootnoteMark />: persone vere, presenti davvero sul posto, non traffico online generico.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contatti">{siteConfig.primaryCta}</ButtonLink>
                <ButtonLink href="/prezzi" variant="secondary">
                  Vedi prezzi e periodi
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-3xl font-bold text-white">{formatNumber(seasonReceipts)}</div>
                  <p className="mt-2 text-sm font-medium text-white/70">Scontrini registrati sull'intera stagione</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">Maggio - Settembre<FootnoteMark /></p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-3xl font-bold text-white">{formatNumber(seasonPeople)}+</div>
                  <p className="mt-2 text-sm font-medium text-white/70">Presenze reali stimate e verificate nello store</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">Maggio - Settembre<FootnoteMark /></p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-3xl font-bold text-white">522</div>
                  <p className="mt-2 text-sm font-medium text-white/70">Visualizzazioni del tuo annuncio al giorno</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">Con rotazione piena</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:pl-8">
            <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 shadow-glow">
              <div className="rounded-[30px] border border-white/10 bg-black/30 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Impatto stagionale</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                  Una posizione che concentra flusso, attesa e attenzione.
                </h2>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/45">Scontrini stagionali</p>
                    <div className="mt-3 font-display text-5xl font-bold text-white">
                      <AnimatedCounter value={seasonReceipts} />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      Totale registrato da maggio a settembre<FootnoteMark />, in un supermercato ad alta affluenza.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-white">
                      <ShoppingCart className="h-5 w-5 text-gold" />
                      <span className="text-sm font-semibold">Punto reale ad alta intensita turistica</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {venueInfo.name} intercetta pubblico locale, turistico e di passaggio, con un flusso che cresce fortemente nei mesi centrali della stagione.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-white">
                      <MonitorPlay className="h-5 w-5 text-gold" />
                      <span className="text-sm font-semibold">Schermo sopra la cassa</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Il messaggio gira nel punto in cui la gente rallenta, guarda e resta esposta allo schermo piu a lungo.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-coral/25 bg-coral/10 px-4 py-4 text-sm text-white/82">
                  <ArrowRight className="h-5 w-5 text-coral" />
                  <span>Se il tuo concorrente blocca prima il periodo, quello spazio non e piu tuo.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <DataFootnote />
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Come Funziona"
              title="Tre passaggi. Nessun giro lungo."
              description="La pagina deve farti capire subito come si compra e cosa succede dopo."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = stepsIcons[index];
              return (
                <Reveal key={step.title}>
                  <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/45">Step {index + 1}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Perche Conviene"
              title="Il vantaggio non e teorico. E nella posizione dello schermo."
              description="Qui il punto non e solo quante persone passano. E come, dove e per quanto tempo vedono il messaggio."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {whyItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3 text-white">
                      <Icon className="h-5 w-5 text-gold" />
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
          <Reveal>
            <SectionHeading
              eyebrow="Numeri Reali"
              title="Pochi numeri, ma quelli che servono."
              description="Il messaggio chiave deve essere semplice: persone reali nel supermercato, visualizzazioni ripetute, slot limitati."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Reveal>
              <div className="rounded-[28px] border border-gold/25 bg-gold/10 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Luglio</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={july.monthlyPeopleMin} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-white/68">Presenze minime stimate nel mese<FootnoteMark />.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[28px] border border-gold/35 bg-gradient-to-br from-gold/18 to-mint/10 p-6 shadow-glow">
                <div className="flex items-center gap-3 text-white">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Agosto</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">
                  <AnimatedCounter value={august.monthlyPeopleMin} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-white/68">
                  Basate su {formatNumber(august.monthlyReceipts)} scontrini<FootnoteMark /> nel mese piu forte.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Eye className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Passaggi spot</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">{rotationStats.playsPerDayAtFullCapacity}</div>
                <p className="mt-2 text-sm text-white/68">Visualizzazioni del tuo annuncio al giorno con rotazione piena.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Scarsita reale</span>
                </div>
                <div className="mt-4 font-display text-4xl font-bold text-white">{rotationStats.maxSlots}</div>
                <p className="mt-2 text-sm text-white/68">Attivita massime in rotazione. Quando finiscono, finiscono davvero.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/dati-visibilita">Vedi tutti i dati</ButtonLink>
            <ButtonLink href="/progetto" variant="secondary">
              Approfondisci il progetto
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Formule"
              title="Si compra in modo semplice."
              description="Chi arriva qui deve capire al volo se gli serve il mese, la settimana o l'intera stagione."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {commercialCards.map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{item.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
                  <div className="mt-6">
                    <ButtonLink href={item.href} variant="secondary">
                      {item.label}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-gold/20 bg-gold/10 p-6 text-sm leading-7 text-white/82">
            Vuoi partire da un evento, da una promo o da una singola settimana? Vai ai contatti, scegli il periodo e ricevi subito un riepilogo chiaro.
          </div>
        </div>
      </section>

      <CtaBanner
        title="Hai capito come funziona. Ora ti serve solo il periodo giusto."
        text="Controlla disponibilita, prezzo e possibile esclusiva direttamente nella pagina contatti."
      />
    </>
  );
}
