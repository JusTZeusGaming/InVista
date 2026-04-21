import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Crown,
  Dumbbell,
  Landmark,
  PartyPopper,
  Pizza,
  Sparkles,
  Store,
  Waves,
} from "lucide-react";

export type MonthlyDatum = {
  month: string;
  dailyReceipts: number;
  monthlyReceipts: number;
  monthlyPeopleMin: number;
  monthlyPrice: number;
  weeklyPrice: number;
  peopleRange?: string;
  highlight?: boolean;
};

export const siteConfig = {
  name: "InVista",
  claim: "Se i tuoi clienti passano da qui, la tua pubblicità dovrebbe esserci.",
  primaryCta: "Blocca uno dei 10 slot",
  whatsappUrl: "https://wa.me/393293236473",
  whatsappDisplay: "329 323 6473",
  email: "info@schermolocale.it",
};

export const legalEntity = {
  brandName: "InVista",
  businessName: "SIC PARVIS MAGNA DI NICO SUEZ",
  ownerName: "Nico Suez",
  vatNumber: "05470680751",
  taxCode: "SZUNCI00R26E506H",
  legalForm: "Ditta individuale",
  addressLine: "Via San Martino 132",
  cityLine: "73010 Veglie (LE), Italia",
  atecoCode: "621000 - Attività di programmazione informatica",
  businessStartDate: "15/04/2026",
};

export const venueInfo = {
  name: "L'Angolo dei Sapori",
  place: "Torre Lapillo",
  type: "supermercato",
  audience: "Pubblico locale e turistico",
  screenPosition:
    "Il primo schermo è installato sopra la cassa, in una posizione visibile lungo la fila e da altri punti del supermercato.",
};

export const rotationStats = {
  openingHoursLabel: "7:00 - 21:30",
  openingSecondsPerDay: 52200,
  maxSlots: 10,
  secondsPerSlot: 10,
  rotationSecondsAtFullCapacity: 100,
  playsPerDayAtFullCapacity: 522,
  playsPerMonthAtFullCapacity: 15660,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/progetto", label: "Il Progetto" },
  { href: "/dati-visibilita", label: "Dati e Visibilità" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/settori-ideali", label: "A Chi È Adatto" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

export const monthlyData: MonthlyDatum[] = [
  {
    month: "Maggio",
    dailyReceipts: 216,
    monthlyReceipts: 6480,
    monthlyPeopleMin: 12960,
    peopleRange: "12.960+",
    monthlyPrice: 59,
    weeklyPrice: 19,
  },
  {
    month: "Giugno",
    dailyReceipts: 536,
    monthlyReceipts: 16080,
    monthlyPeopleMin: 32160,
    peopleRange: "32.160+",
    monthlyPrice: 109,
    weeklyPrice: 33,
  },
  {
    month: "Luglio",
    dailyReceipts: 883,
    monthlyReceipts: 26490,
    monthlyPeopleMin: 52980,
    peopleRange: "52.980+",
    highlight: true,
    monthlyPrice: 150,
    weeklyPrice: 45,
  },
  {
    month: "Agosto",
    dailyReceipts: 981,
    monthlyReceipts: 29430,
    monthlyPeopleMin: 58860,
    peopleRange: "58.860+",
    highlight: true,
    monthlyPrice: 179,
    weeklyPrice: 54,
  },
  {
    month: "Settembre",
    dailyReceipts: 490,
    monthlyReceipts: 14700,
    monthlyPeopleMin: 29400,
    peopleRange: "29.400+",
    monthlyPrice: 109,
    weeklyPrice: 33,
  },
];

export const heroMetrics = [
  {
    label: "Scontrini medi al giorno nel mese più forte",
    value: "981",
    description: "Agosto",
  },
  {
    label: "Presenze minime stimate al mese",
    value: "58.860+",
    description: "Dato prudenziale",
  },
  {
    label: "Visualizzazioni del tuo annuncio al giorno",
    value: "522",
    description: "Con 10 slot attivi",
  },
];

export const trustPoints = [
  "I dati arrivano dai corrispettivi ufficiali della stagione precedente.",
  "Ogni scontrino viene considerato come almeno 2 presenze nel punto vendita.",
  "La stima è prudenziale: nei momenti di punta entrano spesso gruppi e famiglie.",
];

export const differentiation = [
  {
    title: "Non è una campagna da feed",
    text: "Il messaggio passa su uno schermo sempre acceso dentro un supermercato reale, non tra contenuti che spariscono con uno scroll.",
  },
  {
    title: "Non è un volantino usa e getta",
    text: "Chi aspetta in fila alla cassa ha davanti lo schermo per minuti. Nei picchi estivi, l’attenzione dura molto più di un colpo d’occhio.",
  },
  {
    title: "È esposizione continua",
    text: "Con una rotazione completa da 100 secondi, lo stesso annuncio torna più e più volte durante tutta la fascia di apertura.",
  },
];

export const processSteps = [
  {
    title: "Scegli il tuo slot",
    text: "Definiamo il pacchetto, la durata e l’eventuale esclusiva di categoria.",
  },
  {
    title: "Invii il tuo contenuto",
    text: "Lo spot deve essere già pronto: video, immagine statica o più immagini statiche, purché legali e coerenti col contesto.",
  },
  {
    title: "Vai in rotazione ogni giorno",
    text: "Il tuo annuncio entra sullo schermo e gira in continuazione per tutta l’apertura del supermercato.",
  },
];

export const scarcityPoints = [
  "Massimo 10 attività in rotazione.",
  "Pochi annunci significa più attenzione per ogni brand.",
  "Se il tuo concorrente blocca lo slot, l’occasione sparisce.",
  "Possibilità di esclusiva di categoria su richiesta.",
];

export const pricingPlans = [
  {
    name: "Periodo mensile",
    price: "da 59 €",
    period: "/mese",
    highlight: true,
    badge: "Prezzo stagionale",
    description: "Prezzi diversi in base al mese, seguendo l’intensità del flusso reale nel supermercato.",
    features: [
      "1 slot da massimo 10 secondi",
      "Riproduzione continua tra le 7:00 e le 21:30",
      "Posizionamento sopra la cassa",
      "Formato video o immagine già pronta",
      "Periodo prenotabile solo nei mesi disponibili",
    ],
  },
  {
    name: "Esclusiva di categoria",
    price: "+35%",
    period: "extra",
    description: "L’unico extra disponibile: blocchi i concorrenti diretti nella tua categoria per il periodo scelto.",
    features: [
      "Esclusiva di categoria",
      "Valida solo sul periodo acquistato",
      "Prezzo calcolato sul pacchetto scelto",
      "Ideale per ristoranti, locali, beauty, fitness e servizi",
    ],
  },
];

export const faqs = [
  {
    question: "Come funziona la pubblicità sullo schermo?",
    answer:
      "Acquisti uno slot, invii il contenuto già pronto e il tuo annuncio entra in rotazione sullo schermo del supermercato durante tutto l’orario di apertura.",
  },
  {
    question: "Quante attività possono essere presenti?",
    answer:
      "Massimo 10. È una scelta precisa: pochi annunci, più visibilità per ogni inserzionista e meno rumore in rotazione.",
  },
  {
    question: "Quante volte passa un annuncio in un giorno?",
    answer:
      "Con 10 slot da 10 secondi, una rotazione completa dura circa 100 secondi. In una giornata tipo di apertura, il tuo annuncio può ottenere circa 522 visualizzazioni. Se gli inserzionisti attivi sono meno di 10, la frequenza aumenta ancora.",
  },
  {
    question: "Che contenuti posso inviare?",
    answer:
      "Puoi inviare un video, una singola immagine o più immagini statiche. Il contenuto deve essere legale, già pronto e con durata massima di 10 secondi per slot.",
  },
  {
    question: "Posso avere uno spot più lungo di 10 secondi?",
    answer:
      "Sì. Puoi acquistare più slot consecutivi. Per esempio, se vuoi uno spot da 20 secondi, puoi prendere 2 slot.",
  },
  {
    question: "Posso avere l’esclusiva per la mia categoria?",
    answer:
      "Sì. Costa il 35% in più sul periodo scelto e ti garantisce di essere l’unica attività della tua categoria presente in rotazione in quel periodo.",
  },
  {
    question: "Offrite anche la creazione del contenuto?",
    answer:
      "No. In questa fase viene offerto solo lo spazio pubblicitario: il contenuto deve essere già pronto quando si conferma la prenotazione.",
  },
  {
    question: "Posso acquistare anche una sola settimana?",
    answer:
      "Sì. Le settimane seguono blocchi da 7 giorni che partono dal giorno 1 del mese e restano sempre dentro lo stesso mese. La formula settimanale arriva comunque fino a 3 settimane: dalla quarta si passa direttamente al mese.",
  },
  {
    question: "Che differenza c’è tra formula mese e formula settimana?",
    answer:
      "La formula mese copre sempre il mese solare completo, quindi va dal giorno 1 al 30 o 31. La formula settimana invece usa blocchi fissi da 7 giorni che partono dal giorno 1 del mese e non attraversano mai il mese successivo.",
  },
];

export const sectorCards: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Ristoranti e pizzerie",
    text: "Per chi vuole riempire tavoli, spingere delivery, promuovere menu o nuove aperture.",
    icon: Pizza,
  },
  {
    title: "Lidi e attività stagionali",
    text: "Perfetto per presidiare il territorio nei mesi in cui la visibilità esplode davvero.",
    icon: Waves,
  },
  {
    title: "Palestre e studi fitness",
    text: "Abbonamenti, open day, corsi o promo stagionali raccontati a un pubblico già attivo.",
    icon: Dumbbell,
  },
  {
    title: "Centri estetici e beauty",
    text: "Promuovi trattamenti, offerte, pacchetti e novità in modo elegante e memorabile.",
    icon: Sparkles,
  },
  {
    title: "Bar, negozi e retail locale",
    text: "Porta traffico reale verso il punto vendita, non solo interazioni che spariscono.",
    icon: Store,
  },
  {
    title: "Souvenir e articoli turistici",
    text: "Perfetto per chi vende prodotti legati al territorio e vuole intercettare turisti già presenti in zona.",
    icon: Waves,
  },
  {
    title: "Siti di vendita online",
    text: "Utile per e-commerce locali o verticali che vogliono trasformare notorietà territoriale in visite e ordini.",
    icon: Sparkles,
  },
  {
    title: "Servizi e professionisti",
    text: "Avvocati, consulenti, agenzie, assicurazioni, studi tecnici: presenza locale con taglio credibile.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Servizi vari del territorio",
    text: "Autonoleggi, transfer, manutenzioni, assistenza, artigiani e servizi locali che hanno bisogno di essere ricordati.",
    icon: BadgeCheck,
  },
  {
    title: "Eventi e serate",
    text: "Discoteche, live, serate a tema, feste, eventi sportivi o promo a data fissa: la formula settimanale è perfetta.",
    icon: PartyPopper,
  },
];

export const comparisonCards = [
  {
    title: "Social ads",
    downside: "Si scorrono in un secondo e competono con tutto il rumore del feed.",
    upside: "Qui il tuo messaggio è fisico, nel territorio giusto, davanti a persone presenti davvero.",
  },
  {
    title: "Volantini",
    downside: "Spesso finiscono ignorati o buttati senza attenzione.",
    upside: "Lo schermo rimette il tuo brand davanti agli occhi più volte durante la permanenza.",
  },
  {
    title: "Banner online",
    downside: "Generano impression generiche che raramente lasciano il segno.",
    upside: "Questa è visibilità concreta: persone vere, in un locale vero, nel tuo stesso territorio.",
  },
];

export const keyMessages = {
  real:
    "Queste non sono impression online. Sono passaggi davanti a uno schermo acceso nel supermercato, per tutta la giornata.",
  impact:
    "Nei mesi più forti puoi sommare un flusso molto alto di clienti e oltre 15.000 visualizzazioni mensili del tuo annuncio sullo stesso schermo.",
  push: "Non stai pagando per click casuali. Stai comprando presenza continua nel punto giusto.",
};

export const highlightBadges = [
  { label: "Dati reali" },
  { label: "Max 10 slot" },
  { label: "Presenza locale" },
];

export const categoryIcons = [
  { icon: Building2, label: "Attività locali" },
  { icon: CircleDollarSign, label: "Clienti già in spesa" },
  { icon: Landmark, label: "Territorio giusto" },
  { icon: BadgeCheck, label: "Visibilità concreta" },
  { icon: BarChart3, label: "Stime misurabili" },
  { icon: Crown, label: "Possibile esclusiva" },
];

export const contentRules = [
  "1 slot = massimo 10 secondi",
  "Video, immagine statica o più immagini statiche",
  "Contenuto già pronto e conforme alla legge",
  "Puoi acquistare più slot per aumentare la durata",
];

export const seasonalOffer = {
  label: "Intera stagione disponibile",
  period: "Maggio - Settembre",
  fullPrice: 606,
  discountedPrice: 515.1,
  discountPercent: 15,
};

export const exclusivityExample = {
  category: "Ristorante di carne",
  text: "Se acquisti l’esclusiva, per il periodo scelto sarai l’unico ristorante di carne presente sullo schermo.",
};

export const weeklyRules = [
  "Le settimane seguono blocchi fissi da 7 giorni che partono dal giorno 1 del mese.",
  "Il mese copre sempre il mese solare completo, dal giorno 1 al 30 o 31.",
  "Ogni blocco resta sempre dentro lo stesso mese, senza mescolare giorni di mesi diversi.",
  "La formula settimanale è ottima per eventi, serate e promozioni a data fissa.",
  "La seconda settimana sblocca il 10% di sconto, la terza il 20% totale.",
  "Dalla quarta settimana si passa direttamente alla formula mensile.",
  "Se gli slot attivi sono meno di 10, la frequenza del tuo annuncio cresce ulteriormente.",
];

export const purchaseExamples = [
  {
    title: "Vuoi uno spot da 20 secondi?",
    text: "Ti bastano 2 slot consecutivi da 10 secondi ciascuno.",
  },
  {
    title: "Hai due attività diverse?",
    text: "Puoi acquistare più slot nello stesso periodo e far girare messaggi separati.",
  },
  {
    title: "Vuoi promuovere una serata?",
    text: "Puoi prendere un blocco da 7 giorni dentro lo stesso mese e concentrare li tutta la spinta.",
  },
  {
    title: "Vuoi blindare il settore?",
    text: "Con il +35% di esclusiva eviti concorrenti diretti nella tua categoria per il periodo acquistato.",
  },
];

export const postContactSteps = [
  {
    title: "Mi scrivi o invii il form",
    text: "Ricevo il periodo che ti interessa e verifico disponibilità ed eventuale esclusiva.",
  },
  {
    title: "Ti confermo slot e costo finale",
    text: "Ti rispondo in modo semplice, con periodo disponibile e importo chiaro.",
  },
  {
    title: "Invii il contenuto già pronto",
    text: "Se va bene, mandi il video o le immagini e lo slot entra in rotazione.",
  },
];
