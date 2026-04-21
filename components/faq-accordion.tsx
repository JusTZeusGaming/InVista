"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="rounded-[26px] border border-white/10 bg-white/5 px-5 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-base font-semibold text-white md:text-lg">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 text-gold transition", open ? "rotate-180" : "")} />
            </button>
            {open ? <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
