import { IconWhatsApp } from "./icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

const COLS = [
  {
    title: "Produto",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Segurança e LGPD", href: "#seguranca" },
      { label: "Planos", href: "#planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Perguntas frequentes", href: "#faq" },
      { label: "Entrar em contato", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-display text-lg font-bold">
                C
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                ContabilApp
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--color-muted)]">
              Automação de holerites e recibos de férias para contabilidades — do
              upload à assinatura, com rastreabilidade em tempo real.
            </p>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-6"
            >
              <IconWhatsApp width={16} height={16} />
              Falar no WhatsApp
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-[var(--color-text)]">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-faint)] sm:flex-row">
          <p>© 2026 ContabilApp. Todos os direitos reservados.</p>
          <p>Holerites e recibos de férias entregues com profissionalismo.</p>
        </div>
      </div>
    </footer>
  );
}
