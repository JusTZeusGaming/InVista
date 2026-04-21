import { CalendarRange, Clock3, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { postContactSteps, siteConfig, venueInfo } from "@/lib/site-data";

const contactCards = [
  {
    title: "Risposta rapida",
    text: "Ti ricontatto per capire settore, periodo, disponibilità e se vuoi anche l’esclusiva di categoria.",
    icon: Clock3,
  },
  {
    title: "Contatto diretto",
    text: "Puoi scrivere anche su WhatsApp se vuoi una risposta immediata e senza passaggi inutili.",
    icon: WhatsAppIcon,
  },
  {
    title: "Calendario selettivo",
    text: "Nel form puoi scegliere direttamente mese o settimana. Il mese va sempre dal giorno 1 al 30 o 31, mentre le settimane seguono blocchi da 7 giorni dentro lo stesso mese, fino a un massimo di 3.",
    icon: CalendarRange,
  },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Vuoi bloccare uno dei pochi slot disponibili?"
        description={`Parliamone adesso. Puoi scegliere il periodo da richiedere per lo schermo di ${venueInfo.name}, verificare la categoria e muoverti prima che entri un concorrente.`}
      />

      <section className="px-5 py-8 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="grid gap-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                    <Icon className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}

            <Reveal>
              <div className="rounded-[28px] border border-gold/25 bg-gradient-to-br from-gold/12 to-transparent p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Canali diretti</p>
                <div className="mt-5 space-y-4 text-sm">
                  <a href={siteConfig.whatsappUrl} className="flex items-center gap-3 text-white/78 transition hover:text-white">
                    <WhatsAppIcon className="h-5 w-5 text-gold" />
                    WhatsApp diretto
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/78 transition hover:text-white">
                    <Mail className="h-5 w-5 text-gold" />
                    {siteConfig.email}
                  </a>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Molto utile anche per eventi, serate in discoteca, promo lampo o aperture: puoi richiedere una sola settimana e concentrare il messaggio quando serve.
                </p>
                <p className="mt-3 text-sm text-white/58">Ti rispondo con disponibilità e costo finale, senza giri inutili.</p>
                <div className="mt-6">
                  <ButtonLink href={siteConfig.whatsappUrl} className="w-full justify-center">
                    Scrivimi su WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Cosa succede dopo</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {postContactSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">Step {index + 1}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
