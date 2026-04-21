import { ButtonLink } from "@/components/button-link";

type CtaBannerProps = {
  title: string;
  text: string;
};

export function CtaBanner({ title, text }: CtaBannerProps) {
  return (
    <section className="px-5 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-gold/25 bg-gradient-to-r from-gold/14 via-white/5 to-mint/10 p-8 shadow-glow md:p-10">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Ultimi slot</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{text}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <ButtonLink href="/contatti" className="w-full justify-center md:w-auto">
              Richiedi il tuo spazio
            </ButtonLink>
            <ButtonLink href="/prezzi" variant="secondary" className="w-full justify-center md:w-auto">
              Vedi i pacchetti
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
