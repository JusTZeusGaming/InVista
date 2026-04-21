import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Richiedi informazioni",
  primaryHref = "/contatti",
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-20 md:px-8 md:pb-20 md:pt-24">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-gold/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryHref ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
