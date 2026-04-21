"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CalendarDays, Check, Mail } from "lucide-react";
import { monthlyData, seasonalOffer, siteConfig } from "@/lib/site-data";

type BookingMode = "mese" | "settimana";

type WeekOption = {
  value: string;
  label: string;
  month: string;
  price: number;
};

const monthLabelMap = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
const seasonYear = 2026;
const monthIndexMap: Record<string, number> = {
  Maggio: 4,
  Giugno: 5,
  Luglio: 6,
  Agosto: 7,
  Settembre: 8,
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDateRange(start: Date, end: Date) {
  return `${start.getDate()} ${monthLabelMap[start.getMonth()]} - ${end.getDate()} ${monthLabelMap[end.getMonth()]}`;
}

function getDaysInMonth(monthName: string) {
  const monthIndex = monthIndexMap[monthName];
  return new Date(seasonYear, monthIndex + 1, 0).getDate();
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createWeeklyOptions(): WeekOption[] {
  const options: WeekOption[] = [];

  for (const month of monthlyData) {
    const monthIndex = monthIndexMap[month.month];
    let current = new Date(seasonYear, monthIndex, 1);

    while (current.getMonth() === monthIndex) {
      const end = new Date(current);
      end.setDate(end.getDate() + 6);

      if (end.getMonth() !== monthIndex) {
        break;
      }

      options.push({
        value: toDateKey(current),
        label: `${formatDateRange(current, end)} · ${formatCurrency(month.weeklyPrice)}`,
        month: month.month,
        price: month.weeklyPrice,
      });

      current = new Date(current);
      current.setDate(current.getDate() + 7);
    }
  }

  return options;
}

const weeklyOptions = createWeeklyOptions();
const weeklyOptionsByMonth = monthlyData.map((month) => ({
  month: month.month,
  options: weeklyOptions.filter((item) => item.month === month.month),
}));

export function ContactForm() {
  const [bookingMode, setBookingMode] = useState<BookingMode>("mese");
  const [selectedMonth, setSelectedMonth] = useState(monthlyData[0].month);
  const [selectedWeeks, setSelectedWeeks] = useState<string[]>(weeklyOptions[0] ? [weeklyOptions[0].value] : []);
  const [exclusive, setExclusive] = useState(false);

  const selectedMonthData = monthlyData.find((item) => item.month === selectedMonth) ?? monthlyData[0];
  const selectedWeekDetails = weeklyOptions.filter((item) => selectedWeeks.includes(item.value));
  const weeklySubtotal = selectedWeekDetails.reduce((sum, item) => sum + item.price, 0);
  const weeklyDiscountPercent = Math.min(20, Math.max(0, (selectedWeekDetails.length - 1) * 10));
  const weeklyDiscountAmount = weeklySubtotal * (weeklyDiscountPercent / 100);
  const weeklyTotalAfterDiscount = weeklySubtotal - weeklyDiscountAmount;
  const basePrice = bookingMode === "mese" ? selectedMonthData.monthlyPrice : weeklyTotalAfterDiscount;
  const exclusiveMarkup = exclusive ? basePrice * 0.35 : 0;
  const finalPrice = basePrice + exclusiveMarkup;
  const reachedWeeklyLimit = selectedWeekDetails.length >= 3;

  const periodLabel =
    bookingMode === "mese"
      ? `${selectedMonthData.month} · ${formatCurrency(selectedMonthData.monthlyPrice)}`
      : `${selectedWeekDetails.length} settimana${selectedWeekDetails.length === 1 ? "" : "e"} selezionate${exclusive ? " + esclusiva" : ""}`;

  const summaryLines = [
    bookingMode === "mese"
      ? `Periodo scelto: ${selectedMonthData.month} (dal giorno 1 al giorno ${getDaysInMonth(selectedMonthData.month)})`
      : `Settimane selezionate: ${selectedWeekDetails.length}`,
    bookingMode === "mese"
      ? `Prezzo base: ${formatCurrency(selectedMonthData.monthlyPrice)}`
      : `Subtotale settimane: ${formatCurrency(weeklySubtotal)}`,
    bookingMode === "mese"
      ? `Sconto multi-settimana: non applicato`
      : `Sconto multi-settimana: -${weeklyDiscountPercent}% (${formatCurrency(weeklyDiscountAmount)})`,
    bookingMode === "mese"
      ? `Totale periodo: ${formatCurrency(selectedMonthData.monthlyPrice)}`
      : `Totale periodo: ${formatCurrency(weeklyTotalAfterDiscount)}`,
    exclusive ? `Esclusiva categoria: +35%` : `Esclusiva categoria: non richiesta`,
    `Totale stimato: ${formatCurrency(finalPrice)}`,
  ];

  const toggleWeek = (value: string) => {
    const nextWeek = weeklyOptions.find((item) => item.value === value);
    if (!nextWeek) {
      return;
    }

    setSelectedWeeks((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }

      if (current.length < 3) {
        return [...current, value];
      }

      const currentWeekDetails = weeklyOptions.filter((item) => current.includes(item.value));
      const sameMonthSelection = currentWeekDetails.every((item) => item.month === nextWeek.month);

      if (sameMonthSelection) {
        setSelectedMonth(nextWeek.month);
        setBookingMode("mese");
        window.alert(`Dalla quarta settimana in ${nextWeek.month} si passa direttamente alla formula mensile.`);
        return current;
      }

      window.alert("La formula settimanale arriva fino a 3 settimane totali. Dalla quarta si passa al mese.");
      return current;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (bookingMode === "settimana" && selectedWeekDetails.length === 0) {
      window.alert("Seleziona almeno una settimana prima di inviare la richiesta.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const business = String(formData.get("business") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const body = [
      `Nome: ${name}`,
      `Attività: ${business}`,
      `Email: ${email}`,
      `Telefono/WhatsApp: ${phone}`,
      `Formula: ${bookingMode === "mese" ? "Mensile" : "Settimanale"}`,
      `Periodo: ${periodLabel}`,
      ...(bookingMode === "settimana"
        ? [
            "Settimane selezionate:",
            ...selectedWeekDetails.map((item) => `- ${item.label}`),
            `Subtotale settimane: ${formatCurrency(weeklySubtotal)}`,
            `Sconto multi-settimana: -${weeklyDiscountPercent}% (${formatCurrency(weeklyDiscountAmount)})`,
            `Totale periodo: ${formatCurrency(weeklyTotalAfterDiscount)}`,
          ]
        : []),
      `Esclusiva categoria: ${exclusive ? "Sì" : "No"}`,
      `Totale stimato: ${formatCurrency(finalPrice)}`,
      "",
      "Messaggio:",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Richiesta disponibilità - ${business || "Nuovo contatto"}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-glow">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/70">
          Nome
          <input
            required
            name="name"
            type="text"
            placeholder="Il tuo nome"
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-gold/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Attività
          <input
            required
            name="business"
            type="text"
            placeholder="Nome attività"
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-gold/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Email
          <input
            required
            name="email"
            type="email"
            placeholder="nome@attivita.it"
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-gold/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Telefono o WhatsApp
          <input
            required
            name="phone"
            type="tel"
            placeholder="+39"
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-gold/40"
          />
        </label>
      </div>

      <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-5">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-gold" />
          <p className="text-sm font-semibold text-white">Scegli il periodo</p>
        </div>
        <p className="mt-3 text-sm text-white/58">Ti bastano 2 minuti per selezionare formula, periodo ed eventuale esclusiva.</p>
        <p className="mt-2 text-sm font-medium text-gold">
          Il mese copre sempre il mese solare completo, dal giorno 1 al 30 o 31.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="grid gap-3">
            <span className="text-sm text-white/70">Formula</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setBookingMode("mese")}
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                  bookingMode === "mese"
                    ? "border-gold/40 bg-gold/12 text-white"
                    : "border-white/10 bg-white/5 text-white/65"
                }`}
              >
                Mese
              </button>
              <button
                type="button"
                onClick={() => setBookingMode("settimana")}
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                  bookingMode === "settimana"
                    ? "border-gold/40 bg-gold/12 text-white"
                    : "border-white/10 bg-white/5 text-white/65"
                }`}
              >
                Settimana
              </button>
            </div>
          </div>

          <label className="grid gap-2 text-sm text-white/70">
            {bookingMode === "mese" ? "Mese disponibile" : "Settimane selezionabili"}
            {bookingMode === "mese" ? (
              <select
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-gold/40"
              >
                {monthlyData.map((item) => (
                  <option key={item.month} value={item.month}>
                    {item.month} · {formatCurrency(item.monthlyPrice)}
                  </option>
                ))}
              </select>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/70">
                Seleziona il periodo che ti interessa direttamente dai blocchi qui sotto.
              </div>
            )}
          </label>
        </div>

        {bookingMode === "settimana" ? (
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-4 text-sm leading-7 text-white/80">
              2 settimane = sconto totale del 10%. 3 settimane = sconto totale del 20%. Se vuoi coprire tutto il periodo disponibile, resta attivo anche il prezzo scontato per l'intera stagione.
            </div>
            {weeklyOptionsByMonth.map(({ month, options }) => (
              <div key={month}>
                <p className="text-sm font-semibold text-white">{month}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {options.map((item) => {
                    const selected = selectedWeeks.includes(item.value);
                    const disabled = reachedWeeklyLimit && !selected;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => toggleWeek(item.value)}
                        disabled={disabled}
                        className={`rounded-[22px] border px-4 py-4 text-left transition ${
                          selected
                            ? "border-gold/40 bg-gold/12 text-white"
                            : disabled
                              ? "cursor-not-allowed border-white/10 bg-white/[0.03] text-white/28"
                              : "border-white/10 bg-white/5 text-white/72"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold">{item.label.split("·")[0].trim()}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{month}</p>
                          </div>
                          <div className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold">
                            {formatCurrency(item.price)}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <label className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/74">
          <input
            type="checkbox"
            checked={exclusive}
            onChange={(event) => setExclusive(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-black/20 text-gold"
          />
          <span>
            Richiedo l’esclusiva di categoria (+35%). Esempio: se sei un ristorante di carne, per il periodo scelto sarai l’unico ristorante di carne sullo schermo.
          </span>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm text-white/70">
        Cosa vuoi promuovere
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Dimmi cosa vuoi pubblicizzare, se hai già lo spot pronto e se si tratta di un’attività, un evento o una promozione."
          className="rounded-3xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-gold/40"
        />
      </label>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/78">
          Lo spazio pubblicitario viene venduto solo per contenuti già pronti. Ogni slot ha una durata massima di 10 secondi, ma puoi acquistare più slot se vuoi una presenza più lunga o più creatività nello stesso periodo.
        </div>
        <div className="rounded-3xl border border-gold/20 bg-gold/10 p-4 shadow-glow">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Check className="h-4 w-4 text-white" />
            Riepilogo rapido
          </div>
          <div className="mt-3 space-y-2 text-sm text-white/82">
            {summaryLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72">
        Se preferisci fare prima, puoi anche scrivermi direttamente su WhatsApp al <span className="font-semibold text-white">{siteConfig.whatsappDisplay}</span>.
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/74">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Mail className="h-4 w-4 text-gold" />
          Stagione completa
        </div>
        <p className="mt-2">
          Se prenoti l’intera stagione disponibile ({seasonalOffer.period}), il totale passa da {formatCurrency(seasonalOffer.fullPrice)} a{" "}
          <span className="font-semibold text-white">{formatCurrency(seasonalOffer.discountedPrice)}</span> grazie allo sconto del{" "}
          {seasonalOffer.discountPercent}%.
        </p>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold/90"
      >
        Invia richiesta con il periodo selezionato
      </button>
    </form>
  );
}
