"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-white/5 text-sm font-bold text-gold shadow-glow">
            SL
          </div>
          <div>
            <div className="font-display text-lg font-bold text-white">{siteConfig.name}</div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">Pubblicità reale</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === link.href ? "bg-white/10 text-white" : "text-white/65 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contatti">{siteConfig.primaryCta}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/30 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition",
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/5 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contatti" className="mt-2 w-full" variant="primary">
              {siteConfig.primaryCta}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
