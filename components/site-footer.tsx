import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { legalEntity, navLinks, siteConfig } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const legalLinks = [
  { href: "/informazioni-legali", label: "Informazioni legali" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.8fr_0.9fr_1fr] md:px-8">
        <div>
          <div className="font-display text-2xl font-bold text-white">{siteConfig.name}</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">{siteConfig.claim}</p>
          <p className="mt-4 text-sm font-semibold text-gold">
            Massimo 10 attività in rotazione. Quando finiscono, finiscono davvero.
          </p>
          <div className="mt-5 text-xs leading-6 text-white/45">
            <p>{legalEntity.businessName}</p>
            <p>P. IVA {legalEntity.vatNumber}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">Pagine</p>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">Legale</p>
          <div className="mt-5 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">Contatto diretto</p>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-gold" />
              {siteConfig.email}
            </a>
            <a href={siteConfig.whatsappUrl} className="flex items-center gap-3 transition hover:text-white">
              <WhatsAppIcon className="h-4 w-4 text-gold" />
              WhatsApp diretto
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              {legalEntity.addressLine}, {legalEntity.cityLine}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
