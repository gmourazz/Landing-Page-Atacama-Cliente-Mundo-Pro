import React from "react";
import { motion } from "framer-motion";

const SPEED = 0.7;
const rowVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -180 : 180 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6 * SPEED,
      delayChildren: 0.12 * SPEED,
      staggerChildren: 0.1 * SPEED,
    },
  },
});
const itemVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -90 : 90, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 * SPEED },
  },
});

/* ================== CONTEÚDO ================== */
const days = [
  { day: "1º DIA", subtitle: "Dia de chegada em Calama. Dia Livre.", body: "Transfer até o hotel e dia livre em San Pedro.", image: "/img/beneficios/primeirodia.png" },
  { day: "2º DIA", subtitle: "Vallecito", body: "Pela tarde, visita ao Vallecito. O passeio inclui guia, transporte e piquenique.", image: "/img/beneficios/segundodia.png" },
  { day: "3º DIA", subtitle: "Lagunas Escondidas De Baltinache (de manhã) e Tour Astronômico (à noite)", body: "O passeio leva você a um conjunto de sete lagoas de águas salgadas, com tons azuis transparentes e margens de sal branco. Em duas delas, é possível banho, e a alta concentração de sal permite flutuar com facilidade. O pacote inclui guia, transporte e piquenique. À noite, uma experiência especial permite observar planetas, constelações e fenômenos celestes com telescópios, acompanhados por astrônomos locais, tornando a visita ainda mais memorável.", image: "/img/beneficios/terceirodia.png" },
  { day: "4º DIA", subtitle: "Piedras Rojas e Lagunas Altiplânicas", body: "São dois dos grandes atrativos da região dos Andes. Envolve um pouco de altitude (4260 metros), mas vale muito a pena. O passeio inclui guia, transporte, café da manhã e almoço", image: "/img/beneficios/quartodia.png" },
  { day: "5º DIA", subtitle: "Geysers el tatio (opcional)", body: "A intensa atividade vulcânica do Chile torna comum encontrar águas termais na região, mas o Atacama guarda um fenômeno único: o Geyser del Tatio. Um espetáculo natural impressionante que merece ser incluído em sua viagem, oferecendo uma experiência singular no deserto.", image: "/img/beneficios/quintodia.png" },
  { day: "6º DIA", subtitle: "San Pedro - Calama", body: "Transfer para o aeroporto e partida.", image: "/img/beneficios/sextodia.png" },
];

/* ========== BALÕES (maiores) ========== */
const BALLOON_DESK = [
  { minH: 130, pt: 18, pb: 18, pl: 28, pr: 114 },
  { minH: 150, pt: 18, pb: 18, pl: 28, pr: 114 },
  { minH: 280, pt: 20, pb: 20, pl: 28, pr: 114 },
  { minH: 200, pt: 18, pb: 18, pl: 28, pr: 114 },
  { minH: 210, pt: 18, pb: 18, pl: 28, pr: 114 },
  { minH: 140, pt: 18, pb: 18, pl: 28, pr: 114 },
];

const BALLOON_MOB = [
  { minH: 120, pt: 18, pb: 16, px: 18 },
  { minH: 140, pt: 18, pb: 16, px: 18 },
  { minH: 250, pt: 18, pb: 18, px: 18 },
  { minH: 180, pt: 18, pb: 16, px: 18 },
  { minH: 190, pt: 18, pb: 16, px: 18 },
  { minH: 130, pt: 18, pb: 16, px: 18 },
];

/* ========== TIPOGRAFIA ========== */
const titleDesk = {
  color: "#FD4F0D",
  fontFamily: '"Work Sans", sans-serif',
  fontSize: "48px",
  lineHeight: 0.9,
  letterSpacing: "-0.02em",
};
const subtitleDesk = {
  color: "#FD4F0D",
  fontFamily: '"Work Sans", sans-serif',
  fontSize: "25px",
  lineHeight: 0.95,
  letterSpacing: "-0.015em",
  margin: 0,
};
const bodyDesk = {
  color: "#222223",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: 1.16,
  letterSpacing: "-0.01em",
  margin: 0,
};

const titleMob = {
  color: "#FD4F0D",
  fontFamily: '"Work Sans", sans-serif',
  fontSize: "36px",
  lineHeight: 0.9,
  letterSpacing: "-0.02em",
};
const subtitleMob = {
  color: "#FD4F0D",
  fontFamily: '"Work Sans", sans-serif',
  fontSize: "17px",
  lineHeight: 0.95,
  letterSpacing: "-0.015em",
  margin: 0,
};
const bodyMob = {
  color: "#222223",
  fontFamily: '"Roboto Mono", monospace",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.18,
  letterSpacing: "-0.01em",
  textAlign: "left",
  margin: 0,
};

/* === NOVO: deslocamento independente para dias ímpares e pares (via translateX) === */
const SHIFT_TITLE_LEFT  = 26;  // dias 1,3,5... (imagem à esquerda)  -> valor em px (negativo p/ esquerda)
const SHIFT_TITLE_RIGHT = 30;  // dias 2,4,6... (imagem à direita)   -> valor em px (negativo p/ esquerda)

export default function TravelPackage() {
  return (
    <section className="py-8" style={{ backgroundColor: "#F2EA86" }}>
      <div className="container mx-auto max-w-[1320px] px-2">
        {/* ======= HEADER ======= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-0">
            <img src="/img/beneficios/location2.png" alt="Ícone Nosso Pacote" className="w-16 h-16 object-contain" />
            <h2 className="font-extrabold text-[35px] md:text-[65px]" style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', lineHeight: 0.9, letterSpacing: "-0.02em" }}>
              <strong>Nosso Pacote</strong>
            </h2>
          </div>
        </motion.div>

        {/* =================== DESKTOP =================== */}
        <div className="hidden md:block">
          <div className="space-y-16">
            {days.map((d, i) => {
              const imageLeft = i % 2 === 0; // true -> dias 1,3,5
              const fromLeft = imageLeft;
              const b = BALLOON_DESK[i];

              return (
                <motion.div
                  key={`desk-${d.day}`}
                  variants={rowVariants(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45, margin: "-10% 0px -10% 0px" }}
                  className={`relative flex flex-col items-center gap-8 lg:gap-10 ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Imagem */}
                  <motion.div variants={itemVariants(fromLeft)} className="relative z-20 w-full max-w-[550px] h-[400px] rounded-[24px] overflow-hidden shadow-2xl">
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Texto + Balão */}
                  <motion.div variants={itemVariants(fromLeft)} className="relative z-10 w-full max-w-[687px]">
                    {/* Dia — deslocado por translateX */}
                    <div
                      className="font-extrabold mb-0"
                      style={{
                        ...titleDesk,
                        margin: 0, // evita interferência
                        transform: `translateX(${imageLeft ? SHIFT_TITLE_LEFT : SHIFT_TITLE_RIGHT}px)`,
                      }}
                    >
                      {d.day}
                    </div>

                    {/* Balão */}
                    <div
                      className={`rounded-3xl shadow-xl ${imageLeft ? "lg:-ml-[48px]" : "lg:-mr-[48px]"}`}
                      style={{
                        backgroundColor: "#F9F2E1",
                        minHeight: b.minH,
                        paddingTop: b.pt,
                        paddingBottom: b.pb,
                        paddingLeft: imageLeft ? b.pl : 24,
                        paddingRight: imageLeft ? 24 : b.pr,
                      }}
                    >
                      {/* INNER com limite de largura */}
                      <div className="mx-auto" style={{ maxWidth: 560, paddingLeft: 8 }}>
                        <h3 className="font-extrabold" style={{ ...subtitleDesk, marginBottom: 16 }}>
                          {d.subtitle}
                        </h3>
                        <p style={bodyDesk}>{d.body}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================== MOBILE =================== */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            {days.map((d, i) => {
              const b = BALLOON_MOB[i];
              return (
                <motion.div
                  key={`mob-${d.day}`}
                  variants={rowVariants(true)}
                  initial="hidden"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  className="w-full flex flex-col items-center"
                >
                  {/* Dia (se quiser também mover no mobile, adicione translateX aqui) */}
                  <div className="font-extrabold text-center" style={titleMob}>
                    {d.day}
                  </div>

                  {/* Imagem + Balão */}
                  <div className="relative w-[330px]">
                    <div className="absolute top-0 left-0 right-0 h-[240px] rounded-[16px] overflow-hidden shadow-xl z-20">
                      <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                    </div>

                    <div
                      className="relative z-10 rounded-[18px] shadow-md mt-[200px]"
                      style={{
                        backgroundColor: "#F9F2E1",
                        minHeight: b.minH,
                        paddingTop: b.pt,
                        paddingBottom: b.pb,
                        paddingLeft: b.px,
                        paddingRight: b.px,
                      }}
                    >
                      <div className="mx-auto" style={{ maxWidth: 286, paddingLeft: 10 }}>
                        <h3 className="font-extrabold" style={{ ...subtitleMob, marginBottom: 16 }}>
                          {d.subtitle}
                        </h3>
                        <p style={bodyMob}>{d.body}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
