"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#solucao", label: "Solução", n: "01" },
  { href: "#processo", label: "Processo", n: "02" },
  { href: "#recursos", label: "Recursos", n: "03" },
  { href: "#seguranca", label: "Segurança", n: "04" },
  { href: "#planos", label: "Planos", n: "05" },
];

const WHATS = "https://wa.me/55XXXXXXXXXXX";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[rgba(10,9,8,0.7)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ContabilApp">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-line-2)] font-grotesk text-sm font-semibold">
            C
          </span>
          <span className="font-grotesk text-[0.95rem] font-medium tracking-tight">
            ContabilApp
          </span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-grotesk text-[0.85rem] text-[var(--color-dim)] transition-colors hover:text-[var(--color-ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Falar com a gente
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[var(--color-line)] bg-[rgba(10,9,8,0.96)] backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-[420px]" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="wrap flex flex-col py-3">
          {LINKS.map((l) => (
            <li key={l.href} className="rule first:border-t-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4"
              >
                <span className="font-grotesk text-base">{l.label}</span>
                <span className="index">({l.n})</span>
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-solid w-full"
            >
              Falar com a gente
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
