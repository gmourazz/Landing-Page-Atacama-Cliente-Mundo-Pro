import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16 md:pt-28 pb-4"
      style={{ background: "#A0D3F1" }}
    >
      <style>{`
        @keyframes marqueeX { 
          0% { transform: translateX(0) } 
          100% { transform: translateX(-50%) } 
        }
        .marquee-track { display:flex; width:200% }
        .marquee-track > span { flex:0 0 50%; white-space:nowrap }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>

      <div className="container mx-auto max-w-[1320px] px-4 lg:px-0">
        {/* ====== DESKTOP ====== */}
        <div className="hidden md:grid items-center gap-8 lg:gap-8 lg:grid-cols-[300px_1fr_340px] lg:-translate-x-8 xl:-translate-x-12">
          {/* Título: subido só no desktop (Opção A) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left md:-mt-40"
          >
            <h1
              className="!font-extrabold !tracking-tight leading-[0.75] [text-wrap:balance]"
              style={{
                color: "#AC0039",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(26px, 4vw, 46px)",
              }}
            >
              Uma viagem <span className="block">inesquecível</span>
              <span className="block">pelo Peru</span>
            </h1>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex justify-center lg:justify-self-center"
          >
            <div
              className="overflow-hidden w-full md:w-[645px] md:h-[527px]"
              style={{
                aspectRatio: "865 / 727",
                borderRadius: "220px 220px 0 0",
                boxShadow: "none",
              }}
            >
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Parágrafo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left"
          >
            <div
              className="text-[14px] font-normal leading-[1.35]"
              style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
            >
              Conheça de perto a história,<br />
              a cultura e as paisagens que fazem<br />
              do Peru um destino único. Em nosso pacote de viagem, você poderá visitar<br />
              Machu Picchu, explorar os Andes<br />
              e experimentar a gastronomia local.<br />
              Tudo com hospedagem em hotéis selecionados, passeios guiados<br />
              e uma programação pensada para<br />
              oferecer conforto e praticidade durante a sua viagem.<br /><br />
              <strong>
                Uma oportunidade única para viver<br />
                a história e a natureza de<br />
                um dos países mais fascinantes<br />
                da América do Sul.
              </strong>
            </div>
          </motion.div>
        </div>

        {/* ====== MOBILE (intacto) ====== */}
        <div className="md:hidden">
          <h1
            className="font-extrabold leading-[0.80] mt-0"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "45px",
            }}
          >
            Uma viagem <span className="block">inesquecível</span>
            <span className="block">pelo Peru</span>
          </h1>

          <div
            className="mt-10"
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: "11px",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#222223",
              textAlign: "justify",
            }}
          >
            Conheça de perto a história, a cultura e as paisagens que fazem do Peru um destino único.
            Em nosso pacote de viagem, você poderá visitar Machu Picchu, explorar os Andes e
            experimentar a gastronomia local. Tudo com hospedagem em hotéis selecionados, passeios
            guiados e uma programação pensada para oferecer conforto e praticidade durante a sua viagem.
            <br /><br />
            <strong>
              Uma oportunidade única para viver a história e a natureza de um dos países mais
              fascinantes da América do Sul.
            </strong>
          </div>

          <div className="mt-3 relative">
            <div
              className="overflow-hidden w-[92%] max-w-[460px] mx-auto"
              style={{
                aspectRatio: "865 / 727",
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                boxShadow: "none",
              }}
            >
              <img
                src="/img/imagemcabecalho.png"
                alt="Machu Picchu"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — MOBILE ====== */}
      <div className="relative z-30 md:hidden -mt-12 -mb-4 py-0 overflow-hidden pointer-events-none">
        <div
          className="marquee-track"
          style={{ animation: "marqueeX 3s linear infinite" }}
          aria-hidden="true"
        >
          <span
            className="font-bold leading-none"
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "80px",
            }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
          <span
            className="font-bold leading-none"
            aria-hidden
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "80px",
            }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — DESKTOP ====== */}
      <div className="relative z-50 hidden md:block -mt-24 -mb-4 py-0 overflow-hidden pointer-events-none">
        <div
          className="marquee-track"
          style={{ animation: "marqueeX 14s linear infinite" }}
          aria-hidden="true"
        >
          <span
            className="font-bold leading-none"
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
          <span
            className="font-bold leading-none"
            aria-hidden
            style={{
              color: "#F9F2E1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU • CUSCO & MACHU PICCHU •
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
