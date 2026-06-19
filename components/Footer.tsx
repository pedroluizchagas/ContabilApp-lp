import { IconArrowRight } from "./icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

const COLS = [
  {
    title: "Navegação",
    links: [
      { label: "Solução", href: "#solucao" },
      { label: "Processo", href: "#processo" },
      { label: "Recursos", href: "#recursos" },
      { label: "Segurança", href: "#seguranca" },
      { label: "Planos", href: "#planos" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Perguntas frequentes", href: "#faq" },
      { label: "Falar com a gente", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Comece hoje</p>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="ulink mt-5 inline-flex items-center gap-3 font-grotesk text-2xl font-medium md:text-3xl"
            >
              Falar com a gente
              <IconArrowRight width={22} height={22} />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--color-dim)]">
              Automação de holerites e recibos de férias para contabilidades — do
              upload à assinatura, com rastreabilidade em tempo real.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-3 md:col-start-auto">
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[var(--color-dim)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* oversized wordmark */}
      <div className="wrap overflow-hidden border-t border-[var(--color-line)] pt-10">
        <p className="display select-none text-[20vw] leading-none tracking-tight text-[var(--color-panel-2)] md:text-[15vw]">
          ContabilApp
        </p>
      </div>

      <div className="wrap flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] py-7 text-xs text-[var(--color-faint)] sm:flex-row sm:items-center">
        <p>© 2026 ContabilApp. Todos os direitos reservados.</p>
        <p className="index">Brasil — Plataforma para contabilidades</p>
      </div>
    </footer>
  );
}
