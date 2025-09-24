import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (i) => setOpenIndex(openIndex === i ? null : i);

  // renderizador com controle de tamanho da fonte
  const renderAnswer = (text, fontSizePx) => {
    const parts = String(text).split(/\n\s*\n/);
    return parts.map((chunk, i) => (
      <p
        key={i}
        style={{
          color: '#000',
          fontFamily: '"Roboto Mono", monospace',
          fontWeight: 400,
          fontSize: `${fontSizePx}px`,
          lineHeight: 1.35,
          letterSpacing: '0.1px',
          textAlign: 'left',
          marginTop: i === 0 ? 0 : '1.25em',
        }}
      >
        {chunk}
      </p>
    ));
  };

  const faqs = [
    {
      question: 'Essa viagem é em excursão?',
      answer:
        'Não, nossa viagem não é em grupo fechado, o que significa que você terá a liberdade de explorar e aproveitar cada momento conforme suas preferências. Nossos roteiros não são aquelas "caravanas" em ônibus e com guia que passam correndo pelo ponto turístico e você não tem nem tempo de bater foto. Não se preocupe se você nunca viajou ou se não fala inglês, estaremos auxiliando em tudo.',
    },
    {
      question: 'Os ingressos estão inclusos?',
      answer:
        'Machu Picchu já inclui ingresso. Não inclui ingresso da Montanha Colorida (30 soles), o Boleto Turístico do Vale Sagrado (90 soles) e o ingresso da Lagoa Humantay (20 soles).',
    },
    {
      question: 'Que dinheiro devo levar?',
      answer:
        'Leve uma combinação de cartão e dinheiro em espécie para despesas locais. Para entradas, lembranças e pequenos gastos, o dinheiro local costuma facilitar. Em muitos lugares, cartões são aceitos normalmente.',
    },
    {
      question: 'Os transportes até pontos turísticos estão inclusos?',
      answer:
        'Sim! Todos os passeios incluem transporte desde o hotel até o destino visitado. No retorno, os tours costumam finalizar na Plaza de Armas (ou ponto central do destino).',
    },
    {
      question: 'O pacote inclui transfer do aeroporto ao hotel?',
      answer:
        'Podemos incluir transfers privativos ou compartilhados, de acordo com sua preferência e orçamento. Se preferir, também damos orientações detalhadas de como chegar de transporte público.',
    },
    {
      question:
        'Há alguma restrição de idade para participar das atividades no Deserto do Atacama?',
      answer:
        'Alguns passeios envolvem altitude e trilhas. Para crianças pequenas ou idosos com mobilidade reduzida, avaliamos necessidades e limitações antes de confirmar para garantir conforto e segurança.',
    },
    {
      question: 'Qual o gasto médio com alimentação?',
      answer:
        'Perfil Econômico: 20–40 € por dia (fast food, mercado, restaurantes simples). Transporte público cerda de 10 € por dia.\n\nPerfil Médio: Entre 50–100 € por dia (restaurantes bem avaliados; prato médio 15 €). Transporte cerca de 20–40 € por dia (Uber/táxi) são as opções de transporte.\n\nPerfil de Luxo: acima de 150 € por dia (restaurantes premiados, experiências especiais).  Depende mais de opções privativas, podendo variar de 50–100 € por dia.',
    },
    {
      question: 'Como funciona o suporte da agência durante a viagem?',
      answer:
        'Aqui na Mundo Pró, você não receberá um "Boa viagem e tchau". Estaremos com você durante toda a viagem. Criamos um grupo de WhatsApp com o atendente e uma pessoa de suporte para acompanhar tudo. Adoramos receber notícias e fotos da sua experiência!',
    },
    {
      question:
        'É possível personalizar o itinerário do pacote de acordo com as preferências do cliente?',
      answer:
        'Sim. O pacote enviado é uma sugestão otimizada. Podemos mudar a ordem, incluir ou excluir cidades e refazer a simulação conforme o seu interesse.',
    },
    {
      question:
        'Quais são os documentos necessários para viajar para o Atacama?',
      answer:
        'Passaporte válido ou RG em bom estado emitido há menos de 10 anos (para países do Mercosul). Recomendamos também seguro-viagem e comprovantes de hospedagem/voos.',
    },
    {
      question: 'Qual é a melhor época do ano para visitar o Atacama?',
      answer:
        'De maio a setembro (estação mais seca) o clima é mais estável e com menos chuvas — excelente para passeios e fotos. Em outras épocas, também é possível, apenas com mais atenção às condições climáticas.',
    },
    {
      question:
        'Quais são os métodos de pagamento aceitos para o pacote de viagem?',
      answer:
        'Depende da companhia aérea/hotelaria. Algumas parcelam no cartão em 5–6x e outras em até 10x. Também temos opção de parcelamento no boleto. Consulte-nos para as condições do seu pacote.',
    },
    {
      question: 'Mas moro longe da agência, como vou fazer o pagamento?',
      answer:
        'Nosso atendimento é 100% online e seguro. Enviamos tudo digitalmente e você pode concluir o pagamento à distância, com suporte em todas as etapas.',
    },
  ];

  return (
    <section
      id="duvidas"
      className="py-10"
      style={{ backgroundColor: '#A0D3F1', fontFamily: '"Roboto Mono", monospace' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        {/* Cabeçalho desktop */}
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
                color: '#FD4F0D',
                fontFamily: '"Work Sans", sans-serif',
                fontSize: '65px',
              }}
            >
              Dúvidas Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Cabeçalho mobile */}
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
              style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif' }}
            >
              Dúvidas<br />Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Lista desktop */}
        <div className="space-y-4 mx-auto hidden md:block" style={{ width: '1154px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md" style={{ width: '1154px' }}>
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex items-center justify-center text-center"
                  style={{
                    backgroundColor: '#FD4F0D',
                    width: '1154px',
                    height: '80px',
                    paddingLeft: '24px',
                    paddingRight: '56px',
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span
                    className="block"
                    style={{
                      color: '#FFFFFF',
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '26px', // título desktop 26
                      lineHeight: 1.05,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="absolute"
                    style={{
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#FFFFFF',
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
                      animate={{ height: 'auto', opacity: 1 }}   // deixa ajustar conforme texto 18px
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{
                        backgroundColor: '#FFF2A6',
                        width: '1154px',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="w-full px-6 py-5 flex justify-center">
                        <div className="w-full" style={{ maxWidth: '920px' }}>
                          {renderAnswer(faq.answer, 15 /* desktop body 18 */)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Lista mobile */}
        <div className="md:hidden px-4 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md">
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between px-4 h-16 rounded-2xl"
                  style={{ backgroundColor: '#FD4F0D' }}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-content-${index}`}
                >
                  <span
                    className="text-left font-bold"
                    style={{
                      color: '#FFFFFF',
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '15px', // título mobile 15
                      lineHeight: 1.1,
                    }}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" aria-hidden="true" />
                  )}
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-faq-content-${index}`}
                      key="m-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: '#FFF2A6' }}
                    >
                      <div className="px-4 py-4">
                        {renderAnswer(faq.answer, 12 /* mobile body 14 */)}
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
