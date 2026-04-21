import { siteConfig } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-[#1b1b1f]/95 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur md:bottom-6 md:right-6"
      aria-label="Scrivi su WhatsApp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span className="hidden sm:block">
        Scrivimi su WhatsApp
        <span className="block text-xs font-normal text-white/60">{siteConfig.whatsappDisplay}</span>
      </span>
    </a>
  );
}
