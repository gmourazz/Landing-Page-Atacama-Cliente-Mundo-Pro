import React from "react";
import { motion } from "framer-motion";

/* ========= Animações ========= */
const popIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06 },
  }),
};

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const hoverFx = { y: -6, scale: 1.02 };
const tapFx = { scale: 0.98 };

/* ========= Card “benefício” (amarelo grande) ========= */
const Card = ({ item, index }) => (
  <motion.div
    variants={popIn}
    initial="hidden"
    whileInView="show"
    custom={index}
    viewport={{ once: true, margin: "-60px" }} // aparece ao descer a página
    whileHover={hoverFx}
    whileTap={tapFx}
    className="
      w-[320px] h-[220px] p-4 
      md:w-[344px] md:h-[240px] md:p-5
      rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300
      flex flex-col items-center
    "
    style={{ backgroundColor: "#F2EA86" }}
  >
    <div className="mb-2 md:mb-3">
      <img
        src={item.iconSrc}
        alt={item.title}
        className="w-11 h-11 md:w-10 md:h-10 object-contain" // mobile ícone MAIOR
        loading="lazy"
      />
    </div>

    <h3
      className="text-lg md:text-2xl font-bold mb-1 md:mb-2"
      style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif' }}
    >
      {item.title}
    </h3>

    <p
      className="
        text-[12.5px] leading-[1.15] tracking-[-0.01em]
        md:text-[13.5px] md:leading-[1.18]
      "
      style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
    >
      {item.description}
    </p>
  </motion.div>
);

const Benefits = () => {
  const benefits = [
    {
      iconSrc: "/img/beneficios/passagem-aerea.png",
      title: "Passagem Aérea",
      description: (
        <>
          Brasil / Cusco / Brasil.
          <br />
          <strong>Saídas de:</strong> POA/GRU/CWB/FLN/CNF/CGB/CGR.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/hospedagem.png",
      title: "Hospedagem",
      description: (
        <>
          5 noites em Cusco
          <br />
          1 noite em Águas Calientes.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/assistencia.png",
      title: "Assistência",
      description: (
        <>
          Acompanhamento pré-viagem
          <br />
          e durante a viagem 24Hrs.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/passeios.png",
      title: "Passeios",
      description: (
        <>
          Excursão Machu Picchu com trem;
          <br />
          Excursão ao vale sagrado dos Incas;
          <br />
          Trilha pela montanha Arco-Íris;
          <br />
          Excursão à lagoa Humantay.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/alimentacao.png",
      title: "Alimentação",
      description: (
        <>
          Café da manhã nos hotéis e nos
          <br />
          passeios Montanha Arco-Íris e Lagoa Humantay. Almoço nos passeios Vale
          Sagrado, Montanha Arco-Íris e Lagoa Humantay.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/franquia-bagagem.png",
      title: "Franquia de Bagagem",
      description: (
        <>
          1 Item pessoal;
          <br />1 Bagagem de mão até 10Kg.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/sem-preocupacao.png",
      title: "Viagem sem Preocupação",
      description: (
        <>
          Preenchimento de formulários
          <br />
          necessários é conosco.
        </>
      ),
    },
    {
      iconSrc: "/img/beneficios/seguro-viagem.png",
      title: "Seguro Viagem",
      description: (
        <>
          Plano de $ 15.000 para
          <br />
          despesas médicas.
        </>
      ),
    },
  ];

  const notIncluded = [
    {
      text:
        "Passeios não descritos / Ingressos Vale Sagrado, Montanha Arco Íris e Lagoa Humantay (140 soles)",
      iconSrc: "/img/beneficios/padlock.png",
    },
    {
      text: "Demais serviços não descritos",
      iconSrc: "/img/beneficios/Group.png",
    },
  ];

  return (
    <section
      id="viagem"
      className="py-12 md:py-16"
      style={{
        backgroundColor: "#F9F2E1",
        fontFamily: '"Roboto Mono", monospace',
      }}
    >
      <div className="container">
        {/* Cabeçalho com suavização de tracking e line-height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <p
            className="
              mb-3 md:mb-4
              text-[18px] md:text-xl
              leading-[1.24] md:leading-[1.25]
              tracking-[-0.005em]
              break-normal whitespace-normal hyphens-none
            "
            style={{ color: "#222223", fontFamily: '"Work Sans", sans-serif' }}
          >
            <strong>
              A sua melhor experiência de viagem
              <br />
              começa com a escolha certa da agência
              <br className="hidden md:block" />
              que irá te acompanhar.
            </strong>
          </p>

          <h2
            className="font-bold text-4xl md:text-5xl mb-3"
            style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif' }}
          >
            <strong>Viaje com a Mundo Pró!</strong>
          </h2>

          <p
            className="text-[16px] md:text-base leading-[1.15] md:leading-[1.2]"
            style={{ color: "#222223" }}
          >
            Confira o que preparamos para você.
          </p>
        </motion.div>

        {/* Grade de benefícios (primeiros 6) */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 
            sm:grid-cols-[repeat(2,320px)] md:sm:grid-cols-[repeat(2,344px)] 
            lg:grid-cols-[repeat(3,344px)]
            justify-center 
            gap-x-3 md:gap-x-4 lg:gap-x-5 
            gap-y-3 md:gap-y-4 
            mb-4 md:mb-3
          "
        >
          {benefits.slice(0, 6).map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </motion.div>

        {/* últimas 2 centralizadas — com MAIS espaço entre elas */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 
            sm:grid-cols-[repeat(2,320px)] md:sm:grid-cols-[repeat(2,344px)]
            justify-center 
            gap-x-6 md:gap-x-6 lg:gap-x-7   /* mais respiro horizontal */
            gap-y-6 md:gap-y-6              /* mais respiro vertical no empilhamento */
            mb-8 md:mb-10
          "
        >
          {benefits.slice(6, 8).map((item, i) => (
            <Card key={item.title} item={item} index={6 + i} />
          ))}
        </motion.div>

        {/* Pacote Não Inclui */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3
            className="text-[20px] md:text-4xl font-bold mb-4 md:mb-6"
            style={{ color: "#AC0039", fontFamily: '"Work Sans", sans-serif' }}
          >
            Pacote Não Inclui
          </h3>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center max-w-4xl mx-auto">
            {notIncluded.map((item, index) => (
              <motion.div
                key={index}
                variants={popIn}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={hoverFx}
                whileTap={tapFx}
                className="
                  w-[320px] h-[120px] p-3
                  md:w-[344px] md:h-[146px] md:p-4
                  rounded-2xl shadow-lg flex items-center justify-start text-left
                "
                style={{ backgroundColor: "#AC0039" }}
              >
                <div className="flex items-center gap-2.5 md:gap-3 w-full">
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <p
                    className="text-[12.5px] md:text-sm font-medium leading-[1.15] md:leading-[1.18] tracking-[-0.01em]"
                    style={{ color: "#F9F2E1", fontFamily: '"Roboto Mono", monospace' }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
