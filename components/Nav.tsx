"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "./icons";

const LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

const WHATS = "https://wa.me/55XXXXXXXXXXX";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(8,8,10,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-[68px] max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ContabilApp">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-display text-lg font-bold">
            C
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            ContabilApp
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contato" className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]">
            Entrar em contato
          </a>
          <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <IconWhatsApp width={16} height={16} />
            Falar no WhatsApp
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`h-[1.5px] w-5 bg-current transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-5 bg-current transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[rgba(8,8,10,0.95)] backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-3">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              <IconWhatsApp width={16} height={16} />
              Falar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
