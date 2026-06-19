"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "O ContabilApp funciona com o meu software contábil?",
    a: "A plataforma processa os PDFs gerados pelos principais sistemas contábeis do mercado, como Domínio, Alterdata e Questor. Fale com a gente para validar o seu caso.",
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
    a: "É só falar com a gente pelo WhatsApp ou preencher o formulário. Ajudamos você na configuração inicial.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="rule">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start gap-5 py-6 text-left md:gap-8"
              aria-expanded={isOpen}
            >
              <span className="index mt-1.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-grotesk text-lg font-medium md:text-xl">
                {item.q}
              </span>
              <span
                className={`relative mt-2 h-3.5 w-3.5 shrink-0 transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pl-[3.25rem] pr-8 leading-relaxed text-[var(--color-dim)] md:pl-[4.5rem]">
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
