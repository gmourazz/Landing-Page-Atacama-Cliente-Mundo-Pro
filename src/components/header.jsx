import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "início", href: "#inicio" },
    { label: "a viagem", href: "#viagem" },
    { label: "hospedagem", href: "#hospedagem" },
    { label: "dúvidas frequentes", href: "#duvidas" },
    { label: "sobre nós", href: "#sobre" },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: "#F0D9D1" }}>
      <div className="relative">
        <div className="container px-2 md:px-0">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* LOGO — encostada à esquerda (desktop volta a -ml-20; mobile sem deslocar) */}
            <div className="flex items-center md:-ml-0"> {/* era md:-ml-20 */}
              <img
                src="/img/logomundopro.png"
                alt="Mundo Pró Viagens"
                className="h-20 md:h-30 object-contain block"
              />
            </div>

            {/* Botão Mobile */}
            <motion.button
              type="button"
              className="md:hidden p-2 rounded-full bg-black text-white outline-none focus:ring-2 focus:ring-white/30"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* NAV DESKTOP — inalterado */}
            <nav
              role="navigation"
              className="hidden md:flex items-center space-x-2 bg-[#222223] rounded-full px-2 py-2 shadow absolute right-3 top-1/2 -translate-y-1/2"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 rounded-full text-sm font-medium text-white transition-colors"
                  whileHover={{ backgroundColor: "#F9F2E1", color: "#000" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* MENU MOBILE: dropdown preto sobre o conteúdo (não ocupa tela toda) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-full mt-2 z-50"
            >
              <nav
                id="mobile-menu"
                role="navigation"
                className="w-[82vw] max-w-[360px] rounded-2xl bg-black/95 backdrop-blur p-3 shadow-2xl border border-white/10"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <motion.a
                        href={item.href}
                        className="block w-full px-4 py-3 rounded-xl text-white text-base font-medium"
                        whileHover={{ backgroundColor: "#AC0039" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
