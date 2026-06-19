import Reveal from "./Reveal";
import { IconArrowRight } from "./icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="wrap pt-36 md:pt-44">
        {/* meta row */}
        <Reveal className="flex items-center justify-between">
          <span className="eyebrow">Plataforma para contabilidades</span>
          <span className="index hidden sm:block">Est. 2026 — Brasil</span>
        </Reveal>

        {/* headline */}
        <Reveal className="mt-8 md:mt-12">
          <h1 className="display h1 text-balance">
            <span className="line-mask">
              <span>Holerites entregues</span>
            </span>
            <span className="line-mask">
              <span>
                de forma automática,{" "}
              </span>
            </span>
            <span className="line-mask">
              <span>
                individual e <span className="serif-i">assinada</span>.
              </span>
            </span>
          </h1>
        </Reveal>

        {/* supporting row */}
        <div className="mt-10 grid gap-8 border-t border-[var(--color-line)] pt-8 md:mt-14 md:grid-cols-12 md:items-start">
          <Reveal delay={120} className="md:col-span-7">
            <p className="lede max-w-xl">
              O ContabilApp desmembra o PDF da folha em documentos individuais,
              entrega a cada funcionário no celular e coleta a assinatura digital
              com validade jurídica — com a contabilidade no controle de ponta a
              ponta.
            </p>
          </Reveal>
          <Reveal delay={200} className="md:col-span-5 md:flex md:flex-col md:items-end">
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
              <a
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Falar com a gente
                <IconArrowRight width={16} height={16} />
              </a>
              <a href="#processo" className="btn btn-line">
                Ver o processo
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* product visual */}
      <div className="wrap mt-16 md:mt-24">
        <Reveal>
          <HeroVisual />
        </Reveal>
      </div>

      {/* metric band */}
      <div className="wrap mt-16 md:mt-24">
        <MetricBand />
      </div>

      {/* logos */}
      <div className="mt-16 md:mt-24">
        <LogoMarquee />
      </div>
    </section>
  );
}

function HeroVisual() {
  const rows = [
    { name: "Ana Beatriz Souza", dept: "Recursos Humanos", status: "Assinado", t: "há 2 min" },
    { name: "Carlos Henrique Lima", dept: "Operações", status: "Visualizado", t: "há 8 min" },
    { name: "Fernanda Oliveira", dept: "Comercial", status: "Assinado", t: "há 12 min" },
    { name: "João Pedro Martins", dept: "Financeiro", status: "Enviado", t: "há 20 min" },
    { name: "Mariana Costa", dept: "Logística", status: "Assinado", t: "há 26 min" },
  ];

  const dot = (s: string) =>
    s === "Assinado"
      ? "bg-[var(--color-bone)]"
      : s === "Visualizado"
      ? "bg-[var(--color-dim)]"
      : "bg-[var(--color-faint)]";

  return (
    <div className="panel overflow-hidden rounded-[14px]">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line-2)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line-2)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-line-2)]" />
        </div>
        <span className="index">contabilapp.app / painel</span>
        <span className="hidden sm:block index">Folha · Jun 2026</span>
      </div>

      <div className="grid md:grid-cols-[1.55fr_1fr]">
        {/* table */}
        <div className="border-b border-[var(--color-line)] p-5 md:border-b-0 md:border-r">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="font-grotesk text-sm">Distribuidora Aurora Ltda</p>
              <p className="index mt-1">48 funcionários · holerite</p>
            </div>
            <span className="eyebrow">Em andamento</span>
          </div>

          <div className="rule">
            {rows.map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] py-3.5 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-line-2)] font-grotesk text-[0.7rem] text-[var(--color-dim)]">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-[0.9rem] leading-tight">{r.name}</p>
                    <p className="index mt-0.5">{r.dept}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="index hidden sm:block">{r.t}</span>
                  <span className="flex items-center gap-2 font-grotesk text-[0.78rem] text-[var(--color-ink-2)]">
                    <span className={`h-1.5 w-1.5 rounded-full ${dot(r.status)}`} />
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* summary */}
        <div className="flex flex-col gap-6 p-5">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="index">Assinaturas</span>
              <span className="font-grotesk text-sm text-[var(--color-dim)]">35 / 48</span>
            </div>
            <p className="display mt-2 text-5xl">73%</p>
            <div className="mt-3 h-px w-full bg-[var(--color-line)]">
              <div className="h-px w-[73%] bg-[var(--color-bone)]" />
            </div>
          </div>

          <div className="rule pt-5">
            {[
              ["Visualizados", "41"],
              ["Assinados", "35"],
              ["Pendentes", "13"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-[var(--color-line)] py-3 last:border-b-0"
              >
                <span className="text-[0.85rem] text-[var(--color-dim)]">{k}</span>
                <span className="font-grotesk text-sm tabular-nums">{v}</span>
              </div>
            ))}
          </div>

          <div className="rule flex items-center gap-2 pt-4 text-[0.78rem] text-[var(--color-dim)]">
            <span className="blink h-1.5 w-1.5 rounded-full bg-[var(--color-bone)]" />
            Mariana Costa assinou agora há pouco
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBand() {
  const metrics = [
    ["100%", "do processo automatizado"],
    ["30 dias", "de teste, sem compromisso"],
    ["3 apps", "contabilidade, empresa e funcionário"],
    ["Tempo real", "leitura e assinatura rastreadas"],
  ];
  return (
    <div className="rule grid grid-cols-2 gap-x-8 gap-y-10 pt-10 md:grid-cols-4">
      {metrics.map(([v, k], i) => (
        <Reveal key={k} delay={i * 80}>
          <p className="display text-3xl md:text-4xl">{v}</p>
          <p className="mt-2 text-[0.85rem] leading-snug text-[var(--color-dim)]">{k}</p>
        </Reveal>
      ))}
    </div>
  );
}

function LogoMarquee() {
  const names = [
    "Domínio",
    "Alterdata",
    "Questor",
    "Folhamatic",
    "Sage",
    "Prosoft",
    "Nasajon",
  ];
  const list = [...names, ...names];
  return (
    <div>
      <p className="wrap eyebrow mb-7 text-center">
        Compatível com os principais sistemas contábeis
      </p>
      <div className="relative overflow-hidden border-y border-[var(--color-line)] py-6 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-16">
          {list.map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="font-grotesk text-xl text-[var(--color-faint)]"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
