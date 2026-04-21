export function FootnoteMark() {
  return (
    <sup className="ml-1 align-super text-[0.7em] font-semibold text-gold">
      <a href="#nota-corrispettivi" aria-label="Vai alla nota sui dati">
        *
      </a>
    </sup>
  );
}

export function DataFootnote() {
  return (
    <div
      id="nota-corrispettivi"
      className="mx-auto mt-10 max-w-7xl rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-xs leading-6 text-white/58"
    >
      * I numeri su scontrini e presenze non sono stime casuali: derivano dai corrispettivi ufficiali della stagione precedente,
      riferiti ai periodi citati nella pagina.
    </div>
  );
}
