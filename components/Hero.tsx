import Reveal from "./Reveal";
import {
  IconWhatsApp,
  IconArrowRight,
  IconCheck,
  IconBell,
} from "./icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow absolute left-1/2 top-[-120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full" />
      </div>

      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="chip">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Feito para contabilidades
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">Holerites entregues</span>
              <br />
              de forma automática,{" "}
              <span className="text-[var(--color-accent)]">individual e assinada</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base text-[var(--color-muted)] md:text-lg">
              O ContabilApp desmembra o PDF da folha em documentos individuais,
              entrega a cada funcionário no celular, coleta a assinatura digital
              com validade jurídica e mostra, em tempo real, quem já visualizou e
              assinou.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <IconWhatsApp width={16} height={16} />
                Falar no WhatsApp
              </a>
              <a href="#como-funciona" className="btn btn-ghost">
                Ver como funciona
                <IconArrowRight width={16} height={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-faint)]">
              {["Teste grátis por 30 dias", "Sem fidelidade", "Conforme a LGPD"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <IconCheck width={15} height={15} className="text-[var(--color-accent)]" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>

        {/* product mockup */}
        <Reveal delay={200} className="mt-16 md:mt-20">
          <HeroMockup />
        </Reveal>

        {/* logos marquee */}
        <Reveal delay={120} className="mt-16">
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}

function HeroMockup() {
  const rows = [
    { name: "Ana Beatriz Souza", role: "Recursos Humanos", status: "assinado" },
    { name: "Carlos Henrique Lima", role: "Operações", status: "visualizado" },
    { name: "Fernanda Oliveira", role: "Comercial", status: "assinado" },
    { name: "João Pedro Martins", role: "Financeiro", status: "enviado" },
    { name: "Mariana Costa", role: "Logística", status: "assinado" },
  ] as const;

  const badge = (status: string) => {
    if (status === "assinado")
      return "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]";
    if (status === "visualizado")
      return "border-sky-400/30 bg-sky-400/10 text-sky-300";
    return "border-white/10 bg-white/5 text-[var(--color-muted)]";
  };

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="glow absolute inset-x-10 -bottom-10 top-20 -z-10 rounded-full opacity-60" />
      <div className="card overflow-hidden p-2 shadow-2xl">
        {/* window bar */}
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[var(--color-faint)]">
            ContabilApp · Painel da contabilidade
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-[1fr_320px]">
          {/* main panel */}
          <div className="bg-[var(--color-bg-soft)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Folha · Junho/2026</p>
                <p className="text-xs text-[var(--color-faint)]">
                  Distribuidora Aurora Ltda · 48 funcionários
                </p>
              </div>
              <span className="chip text-xs">Holerite</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
              {rows.map((r, i) => (
                <div
                  key={r.name}
                  className={`flex items-center justify-between gap-3 px-4 py-3 ${
                    i !== rows.length - 1 ? "border-b border-[var(--color-border)]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-xs font-medium text-[var(--color-muted)]">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm leading-tight">{r.name}</p>
                      <p className="text-xs text-[var(--color-faint)]">{r.role}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize ${badge(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* side panel */}
          <div className="flex flex-col gap-4 bg-[var(--color-surface)] p-5">
            <div>
              <p className="text-xs text-[var(--color-faint)]">Progresso do lote</p>
              <p className="mt-1 font-display text-3xl font-semibold">
                72<span className="text-[var(--color-muted)]">%</span>
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-[var(--color-accent)]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Assinados", v: "35" },
                { k: "Visualizados", v: "41" },
                { k: "Pendentes", v: "13" },
                { k: "Enviados", v: "48" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-3">
                  <p className="font-display text-xl font-semibold">{s.v}</p>
                  <p className="text-[11px] text-[var(--color-faint)]">{s.k}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] p-3">
              <IconBell width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <p className="text-xs text-[var(--color-muted)]">
                <span className="text-[var(--color-text)]">Mariana Costa</span> assinou o
                holerite há 2 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoMarquee() {
  const names = ["Domínio", "Alterdata", "Questor", "Folhamatic", "Sage", "Prosoft", "Nasajon"];
  const list = [...names, ...names];
  return (
    <div className="relative">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-[var(--color-faint)]">
        Processa os PDFs dos principais sistemas contábeis do mercado
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-12">
          {list.map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="font-display text-lg font-medium text-[var(--color-faint)] transition-colors hover:text-[var(--color-muted)]"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
