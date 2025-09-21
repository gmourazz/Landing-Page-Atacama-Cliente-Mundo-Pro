import React from 'react';
import { motion } from 'framer-motion';

const SPEED = 0.7;
const rowVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -180 : 180 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6 * SPEED,
      delayChildren: 0.12 * SPEED,
      staggerChildren: 0.10 * SPEED,
    },
  },
});
const itemVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -90 : 90, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.5 * SPEED },
  },
});

const days = [
  { day: '1º DIA', subtitle: 'Chegada em Cusco', body: 'Transfer até o hotel e dia livre em Cusco.', image: '/img/beneficios/primeirodia.png' },
  { day: '2º DIA', subtitle: 'Cusco – Águas Calientes', body: 'Retirada no hotel de Cusco e início do trajeto de duas horas de ônibus até a estação de trem de Ollantaytambo. Ao chegar, subiremos em um trem e faremos uma viagem de uma hora e meia adentrando a cordilheira dos Andes. Chegada ao povoado de Aguas Calientes, iremos levá-lo ao hotel onde nos hospedaremos essa noite. No resto da tarde, você terá tempo livre.', image: '/img/beneficios/segundodia.png' },
  { day: '3º DIA', subtitle: 'Machu Picchu – Cusco', body: 'Depois de tomar o café da manhã no hotel, pegaremos o ônibus para viver o ponto alto da viagem: Machu Picchu. Ao chegar lá, faremos uma visita guiada de duas horas. Depois, você terá outras duas horas de tempo livre para percorrer a zona ou subir por conta própria as montanhas Huayna Picchu ou Machu Picchu. A seguir, voltaremos de ônibus a Aguas Calientes, onde você terá tempo para almoçar por conta própria e seguir explorando o pequeno povoado andino. Finalizaremos a excursão voltando de trem até Ollantaytambo e de lá iremos de ônibus ao seu hotel de Cusco.', image: '/img/beneficios/terceirodia.png' },
  { day: '4º DIA', subtitle: 'Vale Sagrado dos Incas', body: 'Excursão ao Vale Sagrado dos Incas (13 horas). Visitando Chinchero, Moray, Maras, Salinas, Ollantaytambo e Pisac.', image: '/img/beneficios/quartodia.png' },
  { day: '5º DIA', subtitle: 'Cusco – Trilha pela Montanha Arco-Íris', body: 'Entre 4h e 5h, passaremos para buscá-lo no seu hotel de Cusco para começar esta experiência que será inesquecível. A rota que seguiremos é de dificuldade alta. Recomendamos este tour exclusivamente para pessoas que não tenham problemas cardíacos. O tour é feito em altas altitudes, que alcançam aproximadamente 5.200 metros.', image: '/img/beneficios/quintodia.png' },
  { day: '6º DIA', subtitle: 'Cusco – Lagoa Humantay', body: 'Nesta excursão à Lagoa Humantay, subiremos a mais de 4.000 metros para visitar um espetáculo da natureza localizado na Cordilheira dos Andes.', image: '/img/beneficios/sextodia.png' },
  { day: '7º DIA', subtitle: 'Saída Cusco – Brasil', body: 'Em horário previsto, transfer para o aeroporto e volta ao Brasil.', image: '/img/beneficios/setimodia.png' },
];

export default function TravelPackage() {
  return (
    <section className="py-20" style={{ backgroundColor: '#A0D3F1' }}>
      <div className="container mx-auto max-w-[1320px] px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <img
              src="/img/beneficios/location2.png"
              alt="Ícone Nosso Pacote"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              loading="lazy"
              decoding="async"
            />
            <h2
              className="font-extrabold"
              style={{
                color: '#FD4F0D',
                fontSize: '40px',
                fontFamily: '"Work Sans", sans-serif',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              Nosso Pacote
            </h2>
          </div>

          <p
            className="font-bold"
            style={{
              color: '#222223',
              fontFamily: '"Work Sans", sans-serif',
              fontSize: '18px',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Conheça o Peru com praticidade, <br /> segurança e conforto
          </p>

          <p
            className="mt-3 max-w-4xl mx-auto"
            style={{
              color: '#222223',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '12px',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            Nossos pacotes de viagem foram planejados para que você aproveite o melhor do Peru sem
            preocupações. Uma forma segura e organizada de explorar o país, com hospedagem, passeios
            e serviços que garantem mais comodidade durante toda a viagem.
          </p>
        </motion.div>

        {/* ============= DESKTOP (inalterado) ============= */}
        <div className="hidden md:block">
          <div className="space-y-16">
            {days.map((d, i) => {
              const imageLeft = i % 2 === 0;
              const fromLeft = imageLeft;
              return (
                <motion.div
                  key={`desk-${d.day}`}
                  variants={rowVariants(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45, margin: '-10% 0px -10% 0px' }}
                  className={`relative flex flex-col items-center gap-8 lg:gap-10 ${
                    imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <motion.div
                    variants={itemVariants(fromLeft)}
                    className="relative z-20 w-full max-w-[550px] h-[400px] rounded-[24px] overflow-hidden shadow-2xl"
                  >
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </motion.div>

                  <motion.div variants={itemVariants(fromLeft)} className="relative z-10 w-full max-w-[687px]">
                    <div
                      className={`font-extrabold mb-0 ${imageLeft ? 'lg:ml-[0px]' : 'lg:mr-[36px]'}`}
                      style={{ color: '#FD4F0D', fontSize: '56px', fontFamily: '"Work Sans", sans-serif', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                    >
                      {d.day}
                    </div>

                    <div
                      className={`rounded-3xl shadow-xl px-6 py-4 lg:min-h-[110px]
                        ${imageLeft ? 'lg:-ml-[48px] lg:pl-[16px]' : 'lg:-mr-[48px] lg:pr-[90px]'}`}
                      style={{ backgroundColor: '#F9F2E1' }}
                    >
                      <h3
                        className="font-extrabold mb-2"
                        style={{ color: '#FD4F0D', fontSize: '26px', fontFamily: '"Work Sans", sans-serif', lineHeight: 0.95, letterSpacing: '-0.015em' }}
                      >
                        {d.subtitle}
                      </h3>
                      <p
                        style={{ color: '#222223', fontSize: '14px', fontFamily: '"Roboto Mono", monospace', lineHeight: 1.08, letterSpacing: '-0.01em' }}
                      >
                        {d.body}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============= MOBILE (imagem por cima; texto mais abaixo dentro do balão) ============= */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            {days.map((d) => (
              <motion.div
                key={`mob-${d.day}`}
                variants={rowVariants(true)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="w-full flex flex-col items-center"
              >
                {/* DIA */}
                <div
                  className="font-extrabold text-center"
                  style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif', fontSize: '40px', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                >
                  {d.day}
                </div>

                {/* Stack imagem + balão */}
                <div className="relative w-[330px]">
                  {/* Imagem (por cima) */}
                  <div className="absolute top-0 left-0 right-0 h-[240px] rounded-[16px] overflow-hidden shadow-xl z-20">
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </div>

                  {/* Balão (mesma posição) com conteúdo BEM mais abaixo */}
                  <div
                    className="relative z-10 rounded-[18px] shadow-md px-4 pt-16 pb-4 mt-[200px]"
                    style={{ backgroundColor: '#F9F2E1' }}
                  >
                    <h3
                      className="font-extrabold mb-2"
                      style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif', fontSize: '18px', lineHeight: 0.95, letterSpacing: '-0.015em' }}
                    >
                      {d.subtitle}
                    </h3>
                    <p
                      style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace', fontSize: '12px', lineHeight: 1.12, letterSpacing: '-0.01em', textAlign: 'left' }}
                    >
                      {d.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
