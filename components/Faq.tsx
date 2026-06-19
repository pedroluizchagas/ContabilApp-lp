"use client";

import { useState } from "react";
import { IconPlus } from "./icons";

const ITEMS = [
  {
    q: "O ContabilApp funciona com o meu software contábil?",
    a: "A plataforma processa os PDFs gerados pelos principais sistemas contábeis do mercado (como Domínio, Alterdata e Questor). Fale com a gente para validar o seu caso.",
  },
  {
    q: "A assinatura digital tem validade jurídica?",
    a: "Sim. A assinatura é coletada por meio de um serviço com respaldo legal, garantindo a validade do documento.",
  },
  {
    q: "Os funcionários precisam instalar algo?",
    a: "Os funcionários usam um aplicativo simples no celular (Android e iOS) para receber, visualizar e assinar os documentos. O login é feito de forma segura, sem senhas complicadas.",
  },
  {
    q: "E a contabilidade, como acessa?",
    a: "A contabilidade usa um aplicativo para desktop (Windows e macOS) para cadastrar empresas e funcionários, subir os lotes e acompanhar os envios.",
  },
  {
    q: "É seguro? Está de acordo com a LGPD?",
    a: "Sim. Dados sensíveis são protegidos com hash, o acesso é isolado por contabilidade e todo acesso a documentos é registrado para auditoria.",
  },
  {
    q: "Existe teste grátis?",
    a: "Sim, você pode testar a plataforma por 30 dias, sem compromisso.",
  },
  {
    q: "Como começo?",
    a: "É só entrar em contato pelo WhatsApp ou preencher o formulário. Ajudamos você na configuração inicial.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="border-b border-[var(--color-border)]"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-medium md:text-lg">
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--color-border)] transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-[var(--color-accent)] text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                }`}
              >
                <IconPlus width={16} height={16} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-12 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
