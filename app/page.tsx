import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  IconSplit,
  IconDesktop,
  IconBuilding,
  IconPhone,
  IconSignature,
  IconRadar,
  IconSheet,
  IconLayers,
  IconLock,
  IconShieldCheck,
  IconFolder,
  IconAudit,
  IconConsent,
  IconTrash,
  IconWhatsApp,
  IconCheck,
  IconUpload,
  IconUsers,
  IconBell,
  IconArrowRight,
} from "@/components/icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

const PROBLEMS = [
  {
    emoji: "📄",
    title: "Separação manual",
    text: "Um único PDF da folha precisa ser quebrado funcionário por funcionário, à mão.",
  },
  {
    emoji: "📬",
    title: "Entrega sem comprovação",
    text: "E-mail, WhatsApp ou papel não provam que o documento foi recebido e lido.",
  },
  {
    emoji: "✍️",
    title: "Sem assinatura",
    text: "Nenhuma confirmação formal de que o funcionário recebeu o holerite ou o recibo de férias.",
  },
  {
    emoji: "⚠️",
    title: "Risco com a LGPD",
    text: "Dados sensíveis (CPF, salário) circulando por canais inseguros, sem controle de acesso.",
  },
  {
    emoji: "⏳",
    title: "Tempo perdido",
    text: "Horas todo mês com uma tarefa repetitiva que poderia ser 100% automatizada.",
  },
];

const STEPS = [
  {
    icon: IconUsers,
    title: "Cadastre",
    text: "Cadastre suas empresas clientes e os funcionários — manualmente ou importando uma planilha Excel.",
  },
  {
    icon: IconUpload,
    title: "Suba o lote",
    text: "Selecione a empresa, o tipo (holerite ou férias) e o mês de referência, e faça o upload do PDF único da folha.",
  },
  {
    icon: IconSplit,
    title: "Deixe automatizar",
    text: "A plataforma desmembra o PDF por funcionário, gera o documento individual e envia a notificação.",
  },
  {
    icon: IconBell,
    title: "Acompanhe",
    text: "O funcionário recebe, lê e assina pelo app. Você acompanha visualização e assinatura em tempo real.",
  },
];

const FEATURES = [
  {
    icon: IconSplit,
    title: "Split automático de PDF",
    text: "Desmembra holerites e recibos de férias por funcionário, sem trabalho manual.",
  },
  {
    icon: IconDesktop,
    title: "App para a contabilidade",
    text: "Aplicativo desktop (Windows e macOS) para gerenciar empresas, funcionários, envios e status.",
  },
  {
    icon: IconBuilding,
    title: "App para a empresa cliente",
    text: "A empresa acompanha, com login próprio, a leitura e a assinatura dos seus funcionários.",
  },
  {
    icon: IconPhone,
    title: "App para o funcionário",
    text: "Aplicativo mobile (Android e iOS) com notificação push a cada novo documento.",
  },
  {
    icon: IconSignature,
    title: "Assinatura com validade jurídica",
    text: "Assinatura digital com respaldo legal, integrada à plataforma.",
  },
  {
    icon: IconRadar,
    title: "Rastreabilidade em tempo real",
    text: "Saiba exatamente quem visualizou e quem assinou — e quando.",
  },
  {
    icon: IconSheet,
    title: "Importação via Excel",
    text: "Cadastre funcionários em lote a partir de uma planilha.",
  },
  {
    icon: IconLayers,
    title: "Multiempresa",
    text: "Gerencie quantas empresas clientes a sua contabilidade precisar, tudo em um só lugar.",
  },
];

const SECURITY = [
  {
    icon: IconLock,
    title: "Dados sensíveis com hash",
    text: "CPF e data de nascimento nunca são armazenados em texto puro.",
  },
  {
    icon: IconShieldCheck,
    title: "Isolamento por contabilidade",
    text: "Cada tenant enxerga apenas os seus próprios dados.",
  },
  {
    icon: IconFolder,
    title: "PDFs sem URLs públicas",
    text: "Documentos com caminho estruturado e acesso controlado.",
  },
  {
    icon: IconAudit,
    title: "Trilha de auditoria",
    text: "Registro de quem acessou cada documento, quando e de onde.",
  },
  {
    icon: IconConsent,
    title: "Termo de consentimento",
    text: "Coletado no primeiro acesso do funcionário.",
  },
  {
    icon: IconTrash,
    title: "Direito ao esquecimento",
    text: "Processo de exclusão de dados conforme a LGPD.",
  },
];

const PLANS = [
  {
    name: "Básico",
    ideal: "Contabilidades em início",
    price: "R$ XX",
    companies: "até XX",
    employees: "até XX",
    highlight: false,
  },
  {
    name: "Profissional",
    ideal: "Contabilidades em crescimento",
    price: "R$ XX",
    companies: "até XX",
    employees: "até XX",
    highlight: true,
  },
  {
    name: "Enterprise",
    ideal: "Grandes operações",
    price: "Sob consulta",
    companies: "ilimitado",
    employees: "ilimitado",
    highlight: false,
  },
];

const FOR_WHOM = [
  "Eliminar o envio manual de holerites e recibos de férias",
  "Entregar documentos com comprovação de leitura e assinatura",
  "Reduzir o risco com a LGPD",
  "Oferecer um serviço mais profissional às empresas clientes",
];

const FORM_FIELDS = [
  { label: "Nome", placeholder: "Seu nome", type: "text" },
  { label: "E-mail", placeholder: "voce@contabilidade.com.br", type: "email" },
  { label: "Contabilidade", placeholder: "Nome da sua contabilidade", type: "text" },
  { label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000", type: "tel" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* ---------------- PROBLEMA ---------------- */}
        <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="O problema"
            title={
              <>
                Distribuir holerites ainda é{" "}
                <span className="text-[var(--color-muted)]">manual, lento e arriscado</span>
              </>
            }
            description="Todo mês, a mesma tarefa repetitiva consome horas da equipe — e ainda deixa a contabilidade exposta."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="card h-full p-6">
                  <span className="text-2xl">{p.emoji}</span>
                  <h3 className="mt-4 font-display text-lg font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={PROBLEMS.length * 60}>
              <a
                href="#como-funciona"
                className="card group flex h-full flex-col justify-between border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] p-6"
              >
                <h3 className="font-display text-lg font-medium text-[var(--color-text)]">
                  Existe um jeito melhor.
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                  Ver a solução
                  <IconArrowRight
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------------- COMO FUNCIONA ---------------- */}
        <section id="como-funciona" className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]">
          <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
            <SectionHeading
              eyebrow="Como funciona"
              title="Do upload à assinatura, em 4 passos"
              description="Você sobe um único PDF da folha — a plataforma cuida de todo o resto, automaticamente."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 80}>
                    <div className="card relative h-full p-6">
                      <span className="absolute right-5 top-5 font-display text-5xl font-bold text-white/[0.04]">
                        {i + 1}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                        <Icon width={20} height={20} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-medium">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                        {s.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- FUNCIONALIDADES ---------------- */}
        <section id="funcionalidades" className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo o que a sua contabilidade precisa"
            description="Uma plataforma completa, do cadastro à assinatura, com apps dedicados para cada perfil."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 4) * 60}>
                  <div className="card h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                      <Icon width={20} height={20} />
                    </span>
                    <h3 className="mt-5 font-display text-base font-medium">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ---------------- PARA QUEM É ---------------- */}
        <section className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
          <div className="card relative overflow-hidden p-8 md:p-12">
            <div className="glow absolute -right-20 -top-20 h-80 w-80 rounded-full" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Para quem é"
                  title="Feito para escritórios de contabilidade"
                  description="Pensado para quem cuida da folha de pagamento de múltiplas empresas e quer escalar com profissionalismo."
                />
              </div>
              <ul className="grid gap-3">
                {FOR_WHOM.map((item, i) => (
                  <Reveal key={item} delay={i * 70}>
                    <li className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                        <IconCheck width={14} height={14} />
                      </span>
                      <span className="text-sm text-[var(--color-text)] md:text-base">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- SEGURANÇA E LGPD ---------------- */}
        <section id="seguranca" className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]">
          <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
            <SectionHeading
              eyebrow="Segurança e LGPD"
              title="Proteção de dados desde o primeiro dia"
              description="Dados sensíveis protegidos, acesso isolado e rastreabilidade total — conformidade que dá tranquilidade à sua contabilidade."
            />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECURITY.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={(i % 3) * 70}>
                    <div className="card flex h-full items-start gap-4 p-6">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                        <Icon width={20} height={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-medium">{s.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- PLANOS ---------------- */}
        <section id="planos" className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <SectionHeading
            eyebrow="Planos"
            title="Escolha o plano da sua operação"
            description="Teste grátis por 30 dias, sem fidelidade. Pague com PIX, boleto ou cartão de crédito."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`card relative flex h-full flex-col p-7 ${
                    plan.highlight
                      ? "border-[var(--color-accent)]/40 bg-gradient-to-b from-[var(--color-accent)]/[0.08] to-[var(--color-bg-soft)]"
                      : ""
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-ink)]">
                      Mais popular
                    </span>
                  )}
                  <p className="font-display text-lg font-semibold">{plan.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{plan.ideal}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-4xl font-semibold">{plan.price}</span>
                    {plan.price.startsWith("R$") && (
                      <span className="mb-1 text-sm text-[var(--color-muted)]">/mês</span>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-center gap-2.5 text-[var(--color-muted)]">
                      <IconCheck width={16} height={16} className="text-[var(--color-accent)]" />
                      <span>
                        <span className="text-[var(--color-text)]">{plan.companies}</span> empresas
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[var(--color-muted)]">
                      <IconCheck width={16} height={16} className="text-[var(--color-accent)]" />
                      <span>
                        <span className="text-[var(--color-text)]">{plan.employees}</span> funcionários
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-[var(--color-muted)]">
                      <IconCheck width={16} height={16} className="text-[var(--color-accent)]" />
                      Split automático e assinatura digital
                    </li>
                    <li className="flex items-center gap-2.5 text-[var(--color-muted)]">
                      <IconCheck width={16} height={16} className="text-[var(--color-accent)]" />
                      Rastreabilidade em tempo real
                    </li>
                  </ul>

                  <a
                    href={WHATS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-8 w-full ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                  >
                    Quero este plano
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center text-xs text-[var(--color-faint)]">
              Os valores e limites são exemplos e serão definidos antes da publicação.
            </p>
          </Reveal>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="faq" className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]">
          <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Tudo o que você precisa saber"
            />
            <Faq />
          </div>
        </section>

        {/* ---------------- CONTATO ---------------- */}
        <section id="contato" className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="card relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="glow absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full" />
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Entre em contato"
                  title="Veja o ContabilApp na sua contabilidade"
                  description="Fale com a gente — respondemos rápido e ajudamos você na configuração inicial."
                />
                <Reveal delay={160}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <IconWhatsApp width={16} height={16} />
                      Chamar no WhatsApp
                    </a>
                    <a href="#planos" className="btn btn-ghost">
                      Conhecer os planos
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <form className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {FORM_FIELDS.map((field) => (
                      <label
                        key={field.label}
                        className={`flex flex-col gap-1.5 ${
                          field.label === "Contabilidade" || field.label === "E-mail"
                            ? "sm:col-span-2"
                            : ""
                        }`}
                      >
                        <span className="text-xs text-[var(--color-muted)]">{field.label}</span>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-accent)]/60"
                        />
                      </label>
                    ))}
                    <label className="flex flex-col gap-1.5 sm:col-span-2">
                      <span className="text-xs text-[var(--color-muted)]">Mensagem</span>
                      <textarea
                        rows={3}
                        placeholder="Como podemos ajudar?"
                        className="resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-accent)]/60"
                      />
                    </label>
                  </div>
                  <button type="button" className="btn btn-primary mt-5 w-full">
                    Enviar mensagem
                    <IconArrowRight width={16} height={16} />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-[var(--color-faint)]">
                    Conecte este formulário ao seu provedor de envio (e-mail, CRM ou webhook).
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
