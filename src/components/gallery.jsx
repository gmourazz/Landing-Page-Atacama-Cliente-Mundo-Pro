import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Heart, MessageCircle, Send, MoreVertical } from 'lucide-react';

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCurrent();
    emblaApi.on('select', updateCurrent);
    emblaApi.on('reInit', updateCurrent);
    return () => {
      emblaApi.off('select', updateCurrent);
      emblaApi.off('reInit', updateCurrent);
    };
  }, [emblaApi, updateCurrent]);

  // Autoplay SOMENTE no mobile (o carrossel mobile fica md:hidden, então no desktop nem monta)
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // animação em 4s cards de instagram
    return () => clearInterval(id);
  }, [emblaApi]);

 // posts de instagram 
  const posts = [
    {
      location: 'Cordilheira dos Andes',
      profileSrc: '/img/beneficios/mpreto.png',
      imageUrl: '/img/instagram/fotoinstaum.png',
      alt: 'Postagem insta 1',
    },
    {
      location: 'Machu Picchu, Peru',
      profileSrc: '/img/beneficios/mpreto.png',
      imageUrl: '/img/instagram/fotoinstadois.png',
      alt: 'Postagem insta 2',
    },
    {
      location: 'San Pedro de Atacama, Chile',
      profileSrc: '/img/beneficios/mpreto.png',
      imageUrl: '/img/instagram/fotoinstatres.png',
      alt: 'Postagem insta 3',
    },
  ];

  const CardHeader = ({ post }) => (
    <div className="flex items-center justify-between p-3" style={{ backgroundColor: 'white' }}>
      <div className="flex items-center gap-2">
        <img
          src={post.profileSrc}
          alt={`${post.location} - perfil`}
          className="w-8 h-8 rounded-full object-cover"
          onError={(e) => { e.currentTarget.src = '/img/beneficios/mpreto.png'; }}
        />
        <span
          className="font-semibold text-sm"
          style={{ color: '#222223', fontFamily: 'Work Sans, sans-serif' }}
        >
          {post.location}
        </span>
      </div>
      <MoreVertical className="w-5 h-5 text-gray-500" />
    </div>
  );

  const CardFooter = () => (
    <div className="flex items-center justify-between p-3" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="flex items-center gap-4">
        <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
        <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
        <Send className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
      </div>
    </div>
  );

  return (
    <section className="py-20" style={{ backgroundColor: '#F2EA86' }}>
      {/* CSS mínimo pro Embla (sem afetar desktop) */}
      <style>{`
        .embla { overflow: hidden; }
        .embla__container { display: flex; }
        .embla__slide { flex: 0 0 100%; min-width: 0; }
        .embla-dots {
          display: flex; gap: 6px; justify-content: center; margin-top: 10px;
        }
        .embla-dot {
          width: 8px; height: 8px; border-radius: 9999px; background: #d1d5db;
        }
        .embla-dot--selected { background: #111827; }
      `}</style>

      <div className="container">
        {/* Título DESKTOP (inalterado) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 hidden md:block"
        >
          <h2
            className="font-extrabold leading-tight"
            style={{ color: '#222223', fontFamily: '"Work Sans", sans-serif', fontSize: '65px' }}
          >
            Sonhos que ajudamos a realizar
          </h2>
        </motion.div>

        {/* Título MOBILE — menor e alinhado à esquerda */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6 px-2"
        >
          <h2
            className="font-extrabold leading-[1] text-left"
            style={{ color: '#222223', fontFamily: '"Work Sans", sans-serif', fontSize: '40px' }}
          >
            Sonhos que ajudamos a realizar
          </h2>
        </motion.div>

        {/* Grade Desktop (igual) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <CardHeader post={post} />
              <div className="aspect-square w-full">
                <img
                  className="w-full h-full object-cover"
                  alt={post.alt}
                  src={post.imageUrl}
                  onError={(e) => { e.currentTarget.src = '/img/instagram/post-placeholder.jpg'; }}
                />
              </div>
              <CardFooter />
            </motion.div>
          ))}
        </div>

        {/* Mobile / Carrossel com autoplay a cada 10s */}
        <div className="md:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {posts.map((post, index) => (
                <div className="embla__slide p-2" key={index}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <CardHeader post={post} />
                    <div className="aspect-square w-full">
                      <img
                        className="w-full h-full object-cover"
                        alt={post.alt}
                        src={post.imageUrl}
                        onError={(e) => { e.currentTarget.src = '/img/instagram/post-placeholder.jpg'; }}
                      />
                    </div>
                    <CardFooter />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="embla-dots">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`embla-dot ${index === selectedIndex ? 'embla-dot--selected' : ''}`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
