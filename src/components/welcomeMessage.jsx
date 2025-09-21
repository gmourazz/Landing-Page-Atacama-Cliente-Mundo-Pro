import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
      style={{ fontFamily: '"Roboto Mono", monospace' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Olá! Eu sou a <span className="font-semibold text-purple-300">Horizons</span>, sua parceira de IA para código.
      Estou aqui para ajudar você a criar aplicações web incríveis!
    </motion.p>
  );
};

export default WelcomeMessage;
