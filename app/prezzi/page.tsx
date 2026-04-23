import { CalendarRange, Crown, Ticket, TimerReset } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { DataFootnote, FootnoteMark } from "@/components/data-footnote";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  exclusivityExample,
  monthlyData,
  purchaseExamples,
  rotationStats,
  seasonalOffer,
  weeklyRules,
} from "@/lib/site-data";

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

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Prezzi"
        title="Prezzi stagionali, letti in un colpo solo."
        description="Il costo segue il valore del periodo. Nei mesi più forti paghi di più, ma entri anche nel momento in cui il supermercato lavora al massimo."
        secondaryLabel="Seleziona il periodo"
        secondaryHref="/contatti"
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Tabella mensile"
              title="Mese, flusso stimato e prezzo nello stesso blocco"
              description="Qui il confronto è immediato: vedi quanto lavora il punto vendita, quante presenze minime stimate sviluppa e quanto costa essere in rotazione in quel mese."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:hidden">
            {monthlyData.map((item) => (
              <Reveal key={item.month}>
                <div
                  className={`rounded-[28px] border p-6 ${
                    item.highlight ? "border-gold/30 bg-gold/10" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-white">{item.month}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                        {item.highlight ? "Periodo forte" : "Disponibile"}
                      </p>
                    </div>
                    <div className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {euro(item.monthlyPrice)}/mese
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-[22px] border border-white/10 bg-black/20 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">Scontrini al giorno</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {item.dailyReceipts.toLocaleString("it-IT")}
                        <FootnoteMark />
                      </p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-black/20 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">Scontrini nel mese</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {item.monthlyReceipts.toLocaleString("it-IT")}
                        <FootnoteMark />
                      </p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-black/20 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">Presenze stimate nel mese</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {item.monthlyPeopleMin.toLocaleString("it-IT")}+
                        <FootnoteMark />
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">Prezzo mese</p>
                      <p className="mt-2 font-display text-2xl font-bold text-white">{euro(item.monthlyPrice)}</p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                      <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                        -10% per ogni settimana aggiunta
                      </div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">Prezzo settimana</p>
                      <p className="mt-2 font-display text-2xl font-bold text-white">{euro(item.weeklyPrice)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 hidden overflow-hidden rounded-[32px] border border-white/10 bg-white/5 md:block">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-white/78">
                <thead className="bg-black/20 text-xs uppercase tracking-[0.2em] text-white/48">
                  <tr>
                    <th className="px-5 py-4">Mese</th>
                    <th className="px-5 py-4">Scontrini / giorno<FootnoteMark /></th>
                    <th className="px-5 py-4">Scontrini / mese<FootnoteMark /></th>
                    <th className="px-5 py-4">Presenze stimate / mese<FootnoteMark /></th>
                    <th className="px-5 py-4">Prezzo mese</th>
                    <th className="px-5 py-4">
                      <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                        -10% per ogni settimana aggiunta
                      </div>
                      <p className="mt-2">Prezzo settimana</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((item) => (
                    <tr
                      key={item.month}
                      className={`border-t border-white/10 ${item.highlight ? "bg-gold/10" : ""}`}
                    >
                      <td className="px-5 py-5 font-display text-xl font-bold text-white">{item.month}</td>
                      <td className="px-5 py-5">{item.dailyReceipts.toLocaleString("it-IT")}</td>
                      <td className="px-5 py-5">{item.monthlyReceipts.toLocaleString("it-IT")}</td>
                      <td className="px-5 py-5 font-semibold text-white">{item.monthlyPeopleMin.toLocaleString("it-IT")}+</td>
                      <td className="px-5 py-5 font-semibold text-gold">{euro(item.monthlyPrice)}</td>
                      <td className="px-5 py-5">
                        <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                          -10% per ogni settimana aggiunta
                        </div>
                        <p className="mt-2">{euro(item.weeklyPrice)}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <DataFootnote />
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[34px] border border-gold/25 bg-gradient-to-br from-gold/14 to-transparent p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Stagione completa</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white">Se ci sei tutta la stagione, spendi meno.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
                Sull’intero periodo disponibile ({seasonalOffer.period}) viene applicato uno sconto del {percent(seasonalOffer.discountPercent)}%.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Prezzo pieno</p>
                  <div className="mt-3 font-display text-4xl font-bold text-white">{euro(seasonalOffer.fullPrice)}</div>
                </div>
                <div className="rounded-[24px] border border-gold/30 bg-gold/10 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Prezzo scontato</p>
                  <div className="mt-3 font-display text-4xl font-bold text-white">{euro(seasonalOffer.discountedPrice)}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Crown className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Esclusiva di categoria</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  L’unico extra è l’esclusiva: <strong className="text-white">+35%</strong> sul periodo scelto.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/66">{exclusivityExample.text}</p>
                <div className="mt-5 rounded-[22px] border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                  Esempio rapido: agosto a {euro(350)} diventa <span className="font-semibold text-white">{euro(350 * 1.35)}</span> con esclusiva.
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-white">
                  <TimerReset className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">Durata e rotazione</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  1 slot equivale a 10 secondi. Con 10 slot attivi la rotazione completa dura {rotationStats.rotationSecondsAtFullCapacity} secondi, cioè circa 1 minuto e 40.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  In una giornata tipo questo significa circa {rotationStats.playsPerDayAtFullCapacity} visualizzazioni del tuo annuncio. Se vuoi 20 secondi, puoi acquistare 2 slot. Se hai più attività, puoi prenotare più spazi nello stesso periodo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Esempi rapidi"
              title="Chi compra deve capire subito quale formula usare"
              description="Questi casi pratici rendono la scelta più semplice e riducono i dubbi prima del contatto."
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
          <p className="mt-6 text-sm text-white/58">Ti basta scegliere il caso più vicino al tuo e poi selezionare il periodo nella pagina contatti.</p>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <CalendarRange className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white">Formula settimanale</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Le settimane seguono blocchi fissi da 7 giorni che partono dal giorno 1 del mese e restano sempre nello stesso mese. La formula settimanale arriva fino a 3 settimane: oltre, si passa al mese.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/58">La seconda settimana applica il 10% di sconto totale, la terza il 20% totale.</p>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Il mese invece copre sempre il mese solare completo, dal giorno 1 al 30 o 31. I blocchi settimanali non attraversano mai il mese successivo, così il prezzo resta coerente.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <Ticket className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white">Utile per eventi</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Discoteche, live, feste, promo settimanali, serate a tema: compri solo il tempo che ti serve, quando ti serve.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <Crown className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white">Regole rapide</h3>
              <div className="mt-3 space-y-2 text-sm leading-7 text-white/68">
                {weeklyRules.map((rule) => (
                  <p key={rule}>{rule}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Hai già deciso il mese o vuoi bloccare una settimana precisa?"
        text="Vai nella pagina contatti, scegli il periodo direttamente nel calendario e invia la richiesta con il riepilogo già pronto."
      />
    </>
  );
}
