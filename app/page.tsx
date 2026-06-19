import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
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
  IconCheck,
  IconUpload,
  IconUsers,
  IconBell,
  IconArrowRight,
} from "@/components/icons";

const WHATS = "https://wa.me/55XXXXXXXXXXX";

const PAINS = [
  "Separação manual — o PDF da folha é quebrado funcionário por funcionário, à mão.",
  "Entrega sem comprovação — e-mail, WhatsApp ou papel não provam recebimento.",
  "Sem assinatura — nenhuma confirmação formal de que o documento foi recebido.",
  "Risco com a LGPD — CPF e salário circulando por canais inseguros.",
  "Tempo perdido — horas todo mês com uma tarefa que poderia ser automática.",
];

const GAINS = [
  "Um único PDF da folha é separado por funcionário, automaticamente.",
  "Cada funcionário recebe apenas o seu documento, com segurança.",
  "Visualização e assinatura digital direto pelo celular.",
  "Acompanhamento em tempo real de quem leu e quem assinou.",
];

const STEPS = [
  {
    icon: IconUsers,
    title: "Cadastre",
    text: "Empresas clientes e funcionários — manualmente ou importando uma planilha Excel.",
  },
  {
    icon: IconUpload,
    title: "Suba o lote",
    text: "Selecione a empresa, o tipo e o mês de referência, e faça o upload do PDF único.",
  },
  {
    icon: IconSplit,
    title: "Automatize",
    text: "A plataforma desmembra o PDF por funcionário e envia a notificação.",
  },
  {
    icon: IconBell,
    title: "Acompanhe",
    text: "O funcionário lê e assina pelo app. Você acompanha tudo em tempo real.",
  },
];

const FEATURES = [
  { icon: IconSplit, title: "Split automático de PDF", text: "Desmembra holerites e recibos de férias por funcionário, sem trabalho manual." },
  { icon: IconDesktop, title: "App da contabilidade", text: "Desktop (Windows e macOS) para gerenciar empresas, funcionários e envios." },
  { icon: IconBuilding, title: "App da empresa cliente", text: "A empresa acompanha, com login próprio, a leitura e a assinatura da equipe." },
  { icon: IconPhone, title: "App do funcionário", text: "Mobile (Android e iOS) com notificação push a cada novo documento." },
  { icon: IconSignature, title: "Assinatura com validade jurídica", text: "Assinatura digital com respaldo legal, integrada à plataforma." },
  { icon: IconRadar, title: "Rastreabilidade em tempo real", text: "Saiba exatamente quem visualizou e quem assinou — e quando." },
  { icon: IconSheet, title: "Importação via Excel", text: "Cadastre funcionários em lote a partir de uma planilha." },
  { icon: IconLayers, title: "Multiempresa", text: "Gerencie quantas empresas clientes precisar, tudo em um só lugar." },
];

const SECURITY = [
  { icon: IconLock, title: "Dados sensíveis com hash", text: "CPF e data de nascimento nunca são armazenados em texto puro." },
  { icon: IconShieldCheck, title: "Isolamento por contabilidade", text: "Cada tenant enxerga apenas os seus próprios dados." },
  { icon: IconFolder, title: "PDFs sem URLs públicas", text: "Documentos com caminho estruturado e acesso controlado." },
  { icon: IconAudit, title: "Trilha de auditoria", text: "Registro de quem acessou cada documento, quando e de onde." },
  { icon: IconConsent, title: "Termo de consentimento", text: "Coletado no primeiro acesso do funcionário." },
  { icon: IconTrash, title: "Direito ao esquecimento", text: "Processo de exclusão de dados conforme a LGPD." },
];

const PLANS = [
  { name: "Básico", ideal: "Contabilidades em início", price: "R$ XX", suffix: "/mês", companies: "até XX", employees: "até XX", highlight: false },
  { name: "Profissional", ideal: "Contabilidades em crescimento", price: "R$ XX", suffix: "/mês", companies: "até XX", employees: "até XX", highlight: true },
  { name: "Enterprise", ideal: "Grandes operações", price: "Sob consulta", suffix: "", companies: "ilimitado", employees: "ilimitado", highlight: false },
];

const FORM_FIELDS = [
  { label: "Nome", placeholder: "Seu nome", type: "text", wide: false },
  { label: "Contabilidade", placeholder: "Nome da sua contabilidade", type: "text", wide: false },
  { label: "E-mail", placeholder: "voce@contabilidade.com.br", type: "email", wide: false },
  { label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000", type: "tel", wide: false },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* ============ 01 — A SOLUÇÃO ============ */}
        <section id="solucao" className="wrap py-24 md:py-36">
          <SectionHeader
            index="01"
            label="A solução"
            title={
              <>
                Do PDF da folha à assinatura, <span className="serif-i">sem trabalho manual</span>.
              </>
            }
            description="Hoje a distribuição de holerites é manual, lenta e arriscada. O ContabilApp automatiza o ciclo inteiro — com isolamento de dados, hash e trilha de auditoria."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
            {/* antes */}
            <Reveal className="bg-[var(--color-bg)] p-7 md:p-10">
              <span className="eyebrow">Hoje, sem o ContabilApp</span>
              <ul className="mt-8">
                {PAINS.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-b border-[var(--color-line)] py-4 text-[0.95rem] leading-relaxed text-[var(--color-dim)] last:border-b-0"
                  >
                    <span className="index mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* depois */}
            <Reveal delay={120} className="bg-[var(--color-bg-2)] p-7 md:p-10">
              <span className="eyebrow text-[var(--color-ink)]">Com o ContabilApp</span>
              <ul className="mt-8">
                {GAINS.map((g, i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-b border-[var(--color-line)] py-4 text-[0.95rem] leading-relaxed text-[var(--color-ink)] last:border-b-0"
                  >
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-bone)]" />
                    {g}
                  </li>
                ))}
              </ul>
              <a href="#processo" className="ulink mt-8 inline-flex items-center gap-2 font-grotesk text-sm">
                Ver como funciona
                <IconArrowRight width={15} height={15} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ============ 02 — PROCESSO ============ */}
        <section id="processo" className="wrap py-24 md:py-36">
          <SectionHeader
            index="02"
            label="O processo"
            title="Quatro passos, do upload à assinatura"
            description="Você sobe um único arquivo. A plataforma cuida de todo o resto."
          />

          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 90} className="rule pt-6">
                  <div className="flex items-center justify-between">
                    <span className="index">0{i + 1}</span>
                    <Icon width={22} height={22} className="text-[var(--color-dim)]" />
                  </div>
                  <h3 className="display mt-10 text-xl">{s.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--color-dim)]">
                    {s.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ 03 — RECURSOS ============ */}
        <section id="recursos" className="wrap py-24 md:py-36">
          <SectionHeader
            index="03"
            label="Recursos"
            title={
              <>
                Uma plataforma completa, <span className="serif-i">três aplicativos</span>.
              </>
            }
            description="Do cadastro à assinatura, com um app dedicado para cada perfil: contabilidade, empresa cliente e funcionário."
          />

          <div className="matrix mt-16 rounded-[14px] sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 4) * 70} className="p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <Icon width={24} height={24} className="text-[var(--color-ink)]" />
                    <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="display mt-12 text-lg">{f.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[var(--color-dim)]">
                    {f.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ PARA QUEM É ============ */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-12 border-t border-[var(--color-line)] pt-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <span className="eyebrow">Para quem é</span>
              <p className="display mt-8 text-3xl leading-tight md:text-[2.7rem]">
                Feito para escritórios de contabilidade que cuidam da folha de{" "}
                <span className="serif-i">múltiplas empresas</span>.
              </p>
            </Reveal>
            <div className="md:col-span-6 md:col-start-7">
              {[
                "Eliminar o envio manual de holerites e recibos de férias",
                "Entregar documentos com comprovação de leitura e assinatura",
                "Reduzir o risco com a LGPD",
                "Oferecer um serviço mais profissional às empresas clientes",
              ].map((item, i) => (
                <Reveal key={item} delay={i * 70}>
                  <div className="flex items-baseline gap-5 border-b border-[var(--color-line)] py-5 last:border-b-0">
                    <span className="index shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[1.05rem] leading-snug">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 04 — SEGURANÇA ============ */}
        <section id="seguranca" className="wrap py-24 md:py-36">
          <SectionHeader
            index="04"
            label="Segurança e LGPD"
            title="Proteção de dados desde o primeiro dia"
            description="Dados sensíveis protegidos, acesso isolado e rastreabilidade total — a conformidade que dá tranquilidade à sua contabilidade."
          />

          <div className="matrix mt-16 rounded-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 3) * 80} className="p-7 md:p-9">
                  <Icon width={24} height={24} className="text-[var(--color-ink)]" />
                  <h3 className="display mt-10 text-lg">{s.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[var(--color-dim)]">
                    {s.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============ 05 — PLANOS ============ */}
        <section id="planos" className="wrap py-24 md:py-36">
          <SectionHeader
            index="05"
            label="Planos"
            title="Escolha o plano da sua operação"
            description="Teste grátis por 30 dias, sem fidelidade. Pague com PIX, boleto ou cartão de crédito."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan, i) => {
              const light = plan.highlight;
              return (
                <Reveal key={plan.name} delay={i * 90}>
                  <div
                    className={`flex h-full flex-col rounded-[14px] border p-8 ${
                      light
                        ? "border-transparent bg-[var(--color-bone)] text-[var(--color-bg)]"
                        : "border-[var(--color-line)] bg-[var(--color-panel)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-grotesk text-lg ${light ? "" : ""}`}
                      >
                        {plan.name}
                      </span>
                      {light && (
                        <span className="rounded-full border border-[var(--color-bg)]/20 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.15em]">
                          Popular
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-1.5 text-sm ${
                        light ? "text-[var(--color-bg)]/60" : "text-[var(--color-dim)]"
                      }`}
                    >
                      {plan.ideal}
                    </p>

                    <div className="mt-8 flex items-baseline gap-1">
                      <span className="display text-5xl">{plan.price}</span>
                      {plan.suffix && (
                        <span
                          className={`text-sm ${
                            light ? "text-[var(--color-bg)]/60" : "text-[var(--color-dim)]"
                          }`}
                        >
                          {plan.suffix}
                        </span>
                      )}
                    </div>

                    <ul className="mt-8 space-y-3.5 text-sm">
                      {[
                        `${plan.companies} empresas`,
                        `${plan.employees} funcionários`,
                        "Split automático e assinatura digital",
                        "Rastreabilidade em tempo real",
                      ].map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <IconCheck
                            width={16}
                            height={16}
                            className={light ? "text-[var(--color-bg)]" : "text-[var(--color-bone)]"}
                          />
                          <span className={light ? "text-[var(--color-bg)]/80" : "text-[var(--color-ink-2)]"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={WHATS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn mt-9 w-full ${
                        light
                          ? "bg-[var(--color-bg)] text-[var(--color-bone)] hover:bg-black"
                          : "btn-line"
                      }`}
                    >
                      Quero este plano
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-8 text-xs text-[var(--color-faint)]">
              Valores e limites são exemplos e serão definidos antes da publicação.
            </p>
          </Reveal>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="wrap py-24 md:py-36">
          <SectionHeader
            index="06"
            label="Perguntas frequentes"
            title="Tudo o que você precisa saber"
          />
          <div className="mt-12">
            <Faq />
          </div>
        </section>

        {/* ============ CONTATO ============ */}
        <section id="contato" className="wrap pb-28 md:pb-36">
          <div className="rule grid gap-12 pt-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <span className="eyebrow">Entre em contato</span>
                <h2 className="display mt-7 text-4xl leading-[1.05] md:text-[3.4rem]">
                  Veja o ContabilApp na sua <span className="serif-i">contabilidade</span>.
                </h2>
                <p className="mt-6 max-w-sm leading-relaxed text-[var(--color-dim)]">
                  Fale com a gente — respondemos rápido e ajudamos você na
                  configuração inicial.
                </p>
                <a
                  href={WHATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid mt-8"
                >
                  Chamar no WhatsApp
                  <IconArrowRight width={16} height={16} />
                </a>
              </Reveal>
            </div>

            <Reveal delay={120} className="md:col-span-6 md:col-start-7">
              <form className="panel rounded-[14px] p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {FORM_FIELDS.map((field) => (
                    <label key={field.label} className="flex flex-col gap-2">
                      <span className="eyebrow">{field.label}</span>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="border-b border-[var(--color-line-2)] bg-transparent pb-2.5 text-sm outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-ink)]"
                      />
                    </label>
                  ))}
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="eyebrow">Mensagem</span>
                    <textarea
                      rows={3}
                      placeholder="Como podemos ajudar?"
                      className="resize-none border-b border-[var(--color-line-2)] bg-transparent pb-2.5 text-sm outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-ink)]"
                    />
                  </label>
                </div>
                <button type="button" className="btn btn-solid mt-8 w-full">
                  Enviar mensagem
                  <IconArrowRight width={16} height={16} />
                </button>
                <p className="mt-4 text-center text-[0.7rem] text-[var(--color-faint)]">
                  Conecte este formulário ao seu provedor de envio (e-mail, CRM ou webhook).
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
