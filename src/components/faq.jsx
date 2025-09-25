import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Quebra por parágrafos e aplica tipografia (tamanho compacto opcional)
  const renderAnswer = (text, small = false) => {
    const parts = String(text).split(/\n\s*\n/);
    return parts.map((chunk, i) => (
      <p
        key={i}
        style={{
          color: "#000000",
          fontSize: small ? "11px" : "14px",
          textAlign: "center",
          lineHeight: 1.35,
          letterSpacing: "0.1px",
          marginTop: i === 0 ? 0 : "1.25em",
        }}
      >
        {chunk}
      </p>
    ));
  };

  // Cartõezinhos dos circuitos (grid responsivo)
  const renderCircuits = () => (
    <div className="w-full max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        {
          title: "Circuito 1 — Clássico",
          text: "Roteiro básico com acesso à parte superior de Machu Picchu. A vista mais “postal”, ideal para fotos panorâmicas.",
        },
        {
          title: "Circuito 2 — Completo",
          text: "O mais procurado. Inclui a rota do Circuito 1 e áreas adicionais como Praça Principal e Templo do Sol. Visão mais completa.",
        },
        {
          title: "Circuito 3 — Alternativo",
          text: "Focado na parte baixa. Não tem o mesmo ângulo panorâmico, mas ainda rende fotos com a cidadela ao fundo.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-xl p-4"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h5
            className="mb-2"
            style={{
              fontFamily: '"Work Sans", sans-serif',
              fontWeight: 700,
              fontSize: "1px",
              color: "#FD4F0D",
              textAlign: "left",
            }}
          >
            {item.title}
          </h5>
          <p
            style={{
              color: "#000000",
              fontSize: "15px",
              lineHeight: 1.35,
              textAlign: "left",
              letterSpacing: "0.1px",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );

  const faqs = [
    {
      question: "Essa viagem é em excursão?",
      answer:
        "Não, nossa viagem não é em grupo fechado, o que significa que você terá a liberdade de explorar e aproveitar cada momento conforme suas preferências. Durante os passeios, você estará acompanhado por um guia especializado que irá fornecer informações e orientações, garantindo uma experiência enriquecedora.\n\nMuitas clientes já viajaram sozinhas e destacam que se sentiram muito seguras, tanto em Cusco quanto em Machu Picchu. Além disso, nossa equipe e guias estarão sempre prontos para auxiliar em qualquer situação.",
    },
    {
      question: "Que dinheiro devo levar?",
      answer:
        "Machu Picchu já inclui ingresso. Não inclui ingresso da Montanha Colorida (30 soles), o Boleto Turístico do Vale Sagrado (90 soles) e o ingresso da Lagoa Humantay (20 soles).",
    },
    {
      question: "Os transportes até pontos turísticos estão inclusos?",
      answer:
        "Sim! Todos os passeios incluem transporte desde o hotel até o destino visitado. No retorno, os tours costumam finalizar na Plaza de Armas, o coração de Cusco.",
    },
    {
      question: "O pacote inclui transfer do aeroporto ao hotel?",
      answer:
        "Os gastos diários variam. Em média, considere 100 a 150 soles por dia (aprox. R$ 130 a R$ 200).",
    },
    {
      question:
        "Há alguma restrição de idade para participar das atividades no Deserto do Atacama?",
      answer:
        "A estação seca (maio a setembro) tem clima mais estável e menos chuvas — ideal para passeios e fotos.",
    },
    {
      question: "Qual o gasto médio com alimentação?",
      answer:
        "Sim. Com precauções normais, é um destino seguro. Nossa equipe local dá suporte durante a viagem.",
    },
    {
      question: "Como funciona o suporte da agência durante a viagem?",
      answer:
        "Viajar sozinha é totalmente possível e seguro no Peru. Se optar por quarto single, o pacote tem um acréscimo de cerca de 10% em relação ao valor por pessoa em quarto duplo.\n\nMuitas clientes já viajaram sozinhas e destacam que se sentiram muito seguras, tanto em Cusco quanto em Machu Picchu. Além disso, nossa equipe e guias estarão sempre prontos para auxiliar em qualquer situação.",
    },
    {
      question:
        "É possível personalizar o itinerário do pacote de acordo com as preferências do cliente?",
      answer: "__CIRCUITOS__",
    },
    {
      question:
        "Quais são os documentos necessários para viajar para o Atacama?",
      answer:
        "Sim, podemos aumentar ou diminuir noites no Peru e incluir destinos como Lima.",
    },
    {
      question: "Qual é a melhor época do ano para visitar o Atacama?",
      answer: "Passaporte válido ou RG emitido há menos de 10 anos.",
    },
    {
      question:
        "Quais são os métodos de pagamento aceitos para o pacote de viagem?",
      answer: "Até 10x sem juros no cartão de crédito (consulte condições).",
    },
    {
      question: "Mas moro longe da agência, como vou fazer o pagamento?",
      answer:
        "Para crianças pequenas ou idosos com mobilidade reduzida, avalie necessidades/limitações antes de confirmar.",
    },
  ];

  return (
    <section
      id="duvidas"
      className="py-10"
      style={{
        backgroundColor: "#A0D3F1",
        fontFamily: '"Roboto Mono", monospace',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        {/* ===== CABEÇALHO DESKTOP (inalterado) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/img/beneficios/question.png"
              alt="Dúvidas frequentes"
              className="w-[72px] h-[72px] object-contain"
            />
            <h2
              className="font-extrabold leading-tight"
              style={{
                color: "#FD4F0D",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "65px",
              }}
            >
              Dúvidas Frequentes
            </h2>
          </div>
        </motion.div>

        {/* ===== CABEÇALHO MOBILE (igual ao print) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-5 px-3"
        >
          <div className="flex items-center gap-3">
            <img
              src="/img/beneficios/question.png"
              alt="Dúvidas frequentes"
              className="w-12 h-12 object-contain"
            />
            <h2
              className="font-extrabold leading-[1] text-[35px]"
              style={{
                color: "#FD4F0D",
                fontFamily: '"Work Sans", sans-serif',
              }}
            >
              Dúvidas
              <br />
              Frequentes
            </h2>
          </div>
        </motion.div>

        {/* ===== LISTA DESKTOP (inalterada) ===== */}
        <div
          className="space-y-4 mx-auto hidden md:block"
          style={{ width: "1154px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isCircuits =
              faq.question
                .toLowerCase()
                .includes("circuitos de machu picchu") ||
              faq.answer === "__CIRCUITOS__";

            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ width: "1154px" }}
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex items-center justify-center text-center"
                  style={{
                    backgroundColor: "#FD4F0D",
                    width: "1154px",
                    height: "80px",
                    paddingLeft: "24px",
                    paddingRight: "56px",
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span
                    className="block"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: "30px",
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="absolute"
                    style={{
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#FFFFFF",
                    }}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-7 h-7" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-7 h-7" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "239px", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{
                        backgroundColor: "#FFF2A6",
                        width: "1154px",
                        overflow: "hidden",
                      }}
                    >
                      <div className="h-full w-full flex items-center justify-center px-6">
                        <div
                          className="w-full"
                          style={{ maxWidth: isCircuits ? "1000px" : "920px" }}
                        >
                          {isCircuits
                            ? renderCircuits()
                            : renderAnswer(faq.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ===== LISTA MOBILE (layout do print) ===== */}
        <div className="md:hidden px-4 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isCircuits =
              faq.question
                .toLowerCase()
                .includes("circuitos de machu picchu") ||
              faq.answer === "__CIRCUITOS__";

            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between px-4 h-14 rounded-2xl"
                  style={{ backgroundColor: "#FD4F0D" }}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-content-${index}`}
                >
                  <span
                    className="text-left font-bold"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: "14px",
                      lineHeight: 1.1,
                    }}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-faq-content-${index}`}
                      key="m-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: "#FFF2A6" }}
                    >
                      <div className="px-4 py-3">
                        {isCircuits ? (
                          renderCircuits()
                        ) : (
                          <div className="text-[#000]">
                            {renderAnswer(faq.answer, true /* small */)}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
