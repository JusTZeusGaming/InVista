import { Check } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlight?: boolean;
    badge?: string;
  };
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border p-7 shadow-glow",
        plan.highlight ? "border-gold/35 bg-gradient-to-b from-gold/12 to-white/5" : "border-white/10 bg-white/5",
      )}
    >
      {plan.badge ? (
        <span className="rounded-full border border-gold/35 bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-gold">
          {plan.badge}
        </span>
      ) : null}
      <h3 className="mt-5 font-display text-3xl font-bold text-white">{plan.name}</h3>
      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
        <span className="pb-2 text-sm text-white/50">{plan.period}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/70">{plan.description}</p>
      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm leading-6 text-white/75">
            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <ButtonLink href="/contatti" className="mt-8 w-full justify-center">
        Richiedi disponibilità
      </ButtonLink>
    </div>
  );
}
