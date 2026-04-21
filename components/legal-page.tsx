import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { legalEntity } from "@/lib/site-data";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} primaryLabel="Vai ai contatti" primaryHref="/contatti" />
      <section className="px-5 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Titolare</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              <p className="font-semibold text-white">{legalEntity.businessName}</p>
              <p>{legalEntity.legalForm}</p>
              <p>P. IVA {legalEntity.vatNumber}</p>
              <p>C.F. {legalEntity.taxCode}</p>
              <p>{legalEntity.addressLine}</p>
              <p>{legalEntity.cityLine}</p>
            </div>
          </aside>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="space-y-8 text-sm leading-7 text-white/74">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
