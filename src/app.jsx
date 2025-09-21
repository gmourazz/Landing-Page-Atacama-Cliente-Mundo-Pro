import React from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import TravelPackage from "@/components/TravelPackage";
import ImpactSection from "@/components/ImpactSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>Mundo Pró Viagens - Uma viagem inesquecível pelo Peru</title>
        <meta
          name="description"
          content="Conheça de perto a história, a cultura e as paisagens que fazem do Peru um destino único. Visite Machu Picchu, explore os Andes e experimente a gastronomia local."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <TravelPackage />
          <ImpactSection />
          <Pricing />
          <FAQ />
          <AboutUs />
          <Gallery />
          <Testimonials />
        </main>
        <Footer />
        <ScrollToTopButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
