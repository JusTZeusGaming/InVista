import { AnimatedCounter } from "@/components/animated-counter";
import { FootnoteMark } from "@/components/data-footnote";
import { MonthlyDatum } from "@/lib/site-data";
import { cn, formatNumber } from "@/lib/utils";

type MonthlyChartProps = {
  data: MonthlyDatum[];
};

export function MonthlyChart({ data }: MonthlyChartProps) {
  const max = Math.max(...data.map((item) => item.monthlyPeopleMin));

  return (
    <div className="grid gap-5">
      {data.map((item) => {
        const width = (item.monthlyPeopleMin / max) * 100;

        return (
          <div
            key={item.month}
            className={cn(
              "rounded-[28px] border p-5 md:p-6",
              item.highlight ? "border-gold/35 bg-gold/10" : "border-white/10 bg-white/5",
            )}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-bold text-white">{item.month}</h3>
                  {item.highlight ? (
                    <span className="rounded-full border border-gold/35 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      Picco
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-white/70">
                  {formatNumber(item.dailyReceipts)} scontrini/giorno<FootnoteMark /> · {formatNumber(item.monthlyReceipts)} scontrini/mese<FootnoteMark />
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Persone reali stimate</p>
                <div className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter value={item.monthlyPeopleMin} suffix="+" />
                </div>
              </div>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/8">
              <div
                className={cn(
                  "h-full rounded-full",
                  item.highlight
                    ? "bg-gradient-to-r from-gold via-[#ffd89f] to-mint"
                    : "bg-gradient-to-r from-white/50 via-gold/60 to-gold",
                )}
                style={{ width: `${width}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3 text-sm text-white/75 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-white/45">Dato reale</span>
                <div className="mt-1 font-semibold text-white">{formatNumber(item.dailyReceipts)} scontrini al giorno<FootnoteMark /></div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-white/45">Stima mensile</span>
                <div className="mt-1 font-semibold text-white">{formatNumber(item.monthlyReceipts)} scontrini<FootnoteMark /></div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-white/45">Stima prudenziale</span>
                <div className="mt-1 font-semibold text-white">Almeno {formatNumber(item.monthlyPeopleMin)} presenze<FootnoteMark /></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
