import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const categories = [
    {
      name: 'Categoria A',
      price: 'R$ 7.790',
      priceNote: 'Por pessoa em quarto duplo',
      ctaHref:
        'https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Peru%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20A%20de%20hospedagem.',
      labels: {
        hotel: 'Hotel Wifala ou similar',
        machu: 'Hotel Ferre Boulevard ou similar',
        train: 'Trem Expedition',
      },
      description: {
        hotel:
          'Hotéis um pouco mais afastados da Plaza de Armas. Região mais calma, sem o agito do centro, mas sem atrapalhar em nada os passeios. Ideal para descansar depois de um dia explorando Cusco.',
        machupicchu:
          'Opção básica, perfeita para pernoitar antes de Machu Picchu. Conforto simples, mas suficiente para explorar a cidade e estar bem localizado para a visita.',
        train:
          'A opção mais simples da linha de trens panorâmicos. Não tem serviço de bordo incluso, mas oferece snacks e bebidas à venda. O trajeto de 1h30 entre Cusco e Águas Calientes é a chance de ver de perto as paisagens típicas da região, que já valem a viagem.',
      },
      images: [
        { title: 'Cusco',           caption: 'Hotel Wifala ou similar',          src: '/img/beneficios/cusco.png' },
        { title: 'Águas Calientes', caption: 'Hotel Ferre Boulevard ou similar', src: '/img/beneficios/rectangle.png' },
        { title: 'Águas Calientes', caption: 'Trem Expedition',                   src: '/img/beneficios/trem.png' },
      ],
    },
    {
      name: 'Categoria B',
      price: 'R$ 8.990',
      priceNote: 'Por pessoa em quarto duplo',
      ctaHref:
        'https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Peru%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20B%20de%20hospedagem.',
      labels: {
        hotel: 'Hotel Limacpampa ou similar',
        machu: 'Hotel Ferre Boulevard ou similar',
        train: 'Trem Vistadome',
      },
      description: {
        hotel:
          'Hotéis centrais, bem próximos à Plaza de Armas, coração de Cusco. Excelente opção para quem quer estar perto dos principais restaurantes, cafés e pontos turísticos, sem abrir mão do conforto e da praticidade.',
        machupicchu:
          'Opção básica, perfeita para pernoitar antes de Machu Picchu. Conforto simples, mas suficiente para explorar a cidade e estar bem localizado para a visita.',
        train:
          'Uma experiência completa durante a viagem entre Cusco e Águas Calientes. O Vistadome conta com janelas panorâmicas maiores, que tornam o trajeto ainda mais impressionante. Além disso, oferece maior espaço entre os assentos, mais conforto, snacks inclusos e apresentações culturais a bordo, trazendo a cultura andina para dentro do trem.',
      },
      images: [
        { title: 'Cusco',           caption: 'Hotel Limacpampa ou similar', src: '/img/beneficios/trem.png' },
        { title: 'Águas Calentes',  caption: 'Hotel Ferre Boulevard',       src: '/img/beneficios/boulevard.png' },
        { title: 'Águas Calientes', caption: 'Trem Vistadome',              src: '/img/beneficios/tremdois.png' },
      ],
    },
  ];

  return (
    <section id="hospedagem" className="py-20" style={{ backgroundColor: '#FFF2A6' }}>
      <div className="container">
        {/* ===== Header Desktop (inalterado) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="font-bold leading-tight text-[65px]" style={{ color: '#FD4F0D' }}>
              <img
                src="/img/beneficios/coin.png"
                alt="Ícone moeda"
                className="w-20 h-20 inline-block align-middle mr-2"
                style={{ objectFit: 'contain' }}
              />
              <strong>
                Valor do pacote conforme <br /> opção de hospedagem <br /> escolhida
              </strong>
            </h2>
          </div>
        </motion.div>

       {/* ===== Header Mobile (icone alinhado ao início do título) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6"
        >
          <div className="flex items-start justify-center gap-2">
            {/* sobe levemente o ícone para bater com o topo da 1ª linha do título */}
            <img
              src="/img/beneficios/coin.png"
              alt="Ícone moeda"
              className="w-10 h-10 shrink-0 mt-[2px]"  /* ajuste fino: aumente para mt-[4px] se quiser mais alto */
              style={{ objectFit: 'contain' }}
            />
            <h2
              className="font-bold leading-[1] text-[30px] text-esquerda"
              style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif' }}
            >
              <strong>
                Valor do pacote conforme<br />
                opção de hospedagem escolhida
              </strong>
            </h2>
          </div>
        </motion.div>


        {/* ===== Categorias ===== */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-3xl p-8 shadow-xl"
              style={{ backgroundColor: '#FAF3E1' }}
            >
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* ESQUERDA */}
                <div className="lg:col-span-2">
                  {/* Desktop title grande */}
                  <h3
                    className="mb-4 hidden md:block"
                    style={{
                      color: '#FD4F0D',
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '60px',
                      fontWeight: 900,
                      lineHeight: 0.95,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category.name}
                  </h3>
                  {/* Mobile menor */}
                  <h3
                    className="mb-3 md:hidden"
                    style={{
                      color: '#FD4F0D',
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: '32px',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category.name}
                  </h3>

                  {/* Blocos: rótulo + parágrafo  (mobile 10px; desktop 15px corpo) */}
                  <div
                    className="space-y-3 md:space-y-4"
                    style={{
                      color: '#222223',
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '10px', // mobile
                      lineHeight: 1.25,
                    }}
                  >
                    {/* HOTEL */}
                    <div>
                      <p
                        className="font-bold md:text-[18px]"
                        style={{ fontFamily: '"Work Sans", sans-serif' }}
                      >
                        {category.labels.hotel}:
                      </p>
                      <p className="md:text-[15px] md:leading-[1.35]">{category.description.hotel}</p>
                    </div>

                    {/* MACHU PICCHU */}
                    <div>
                      <p
                        className="font-bold md:text-[18px]"
                        style={{ fontFamily: '"Work Sans", sans-serif' }}
                      >
                        {category.labels.machu}:
                      </p>
                      <p className="md:text-[15px] md:leading-[1.35]">
                        {category.description.machupicchu}
                      </p>
                    </div>

                    {/* TREM */}
                    <div>
                      <p
                        className="font-bold md:text-[18px]"
                        style={{ fontFamily: '"Work Sans", sans-serif' }}
                      >
                        {category.labels.train}:
                      </p>
                      <p className="md:text-[15px] md:leading-[1.35]">{category.description.train}</p>
                    </div>
                  </div>
                </div>

                {/* DIREITA (PREÇO + BOTÃO) */}
                <div className="flex flex-col items-center lg:items-end justify-center">
                  {/* Container com a mesma largura do balão no desktop: mantém alinhado */}
                  <div className="relative flex flex-col items-center w-[260px] md:w-[350px]">
                    {/* Balão mobile/desktop */}
                    <div
                      className="text-center shadow-md md:block w-[260px] h-[130px] md:w-[350px] md:h-[163px] rounded-[18px] md:rounded-[24px]"
                      style={{ backgroundColor: '#A0D3F1' }}
                    >
                      <div className="pt-3 md:pt-4">
                        <span
                          className="uppercase font-bold block text-[10px] md:text-[15px] leading-[1.2] md:leading-[1.35]"
                          style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                        >
                          A partir de
                        </span>
                        <div
                          className="leading-none mt-1 text-[28px] md:text-[46px] font-extrabold"
                          style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif' }}
                        >
                          {category.price}
                        </div>
                        <div
                          className="mt-1 text-[12px] md:text-[16px] leading-[1.2] md:leading-[1.35]"
                          style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                        >
                          {category.priceNote}
                        </div>
                      </div>
                    </div>

                    {/* Botão: mobile menor / DESKTOP 300x56 centralizado e sobreposto */}
                    <div className="-mt-8 md:-mt-5 z-10">
                      <a
                        href={category.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir WhatsApp para mais informações sobre ${category.name}`}
                      >
                        <Button
                          className="
                            rounded-full transition-all duration-300 hover:scale-105
                            w-[240px] h-[44px] md:w-[300px] md:h-[56px]
                          "
                          style={{
                            backgroundColor: '#FD4F0D',
                            color: '#222223',
                            fontWeight: 800,
                            letterSpacing: '0.3px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                            fontFamily: '"Work Sans", sans-serif',
                          }}
                        >
                          VEJA TODAS AS INFORMAÇÕES
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* GALERIA */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="rounded-2xl overflow-hidden">
                    <h4
                      className="text-center mb-2"
                      style={{
                        color: '#FD4F0D',
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 800,
                        fontSize: '35px',
                        lineHeight: 1.1,
                      }}
                    >
                      {img.title}
                    </h4>

                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group rounded-2xl overflow-hidden shadow-lg mx-auto"
                      style={{ width: '350px', height: '250px' }}
                    >
                      {/* Desktop */}
                      <img
                        className="hidden md:block w-[350px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Mobile 328x234 */}
                      <img
                        className="md:hidden block object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                        style={{ width: 328, height: 234 }}
                      />
                    </a>

                    <p
                      className="text-center mt-2"
                      style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                    >
                      <span className="md:hidden text-[10px] leading-[1.2]">{img.caption}</span>
                      <span className="hidden md:inline text-[15px] leading-[1.35]">{img.caption}</span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
