export default function HeroPeru() {
  return (
    <section id="viagem" className="relative overflow-hidden">
      {/* meia-lua azul do topo */}
      <div aria-hidden className="absolute -top-24 -left-24 w-[800px] h-[800px] bg-[#bde3f0] rounded-full" />
      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 py-14 md:py-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Uma viagem inesquecível <br /> pelo <span className="text-rose-700">Peru</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            A melhor experiência de viagem com segurança, apoio e curadoria que vão te acompanhar.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#beneficios" className="rounded-xl px-4 py-2 bg-slate-900 text-white text-sm font-medium">Ver benefícios</a>
            <a href="#contato" className="rounded-xl px-4 py-2 border text-sm font-medium">Fale conosco</a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/peru-hero.jpg" /* coloque sua imagem em public/peru-hero.jpg */
            alt="Cusco / Machu Picchu"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
          />
          {/* texto grande de fundo tipo CUSCO / MACHU PICCHU */}
          <div className="absolute -bottom-8 left-0 right-0 text-center select-none pointer-events-none">
            <span className="text-[8vw] md:text-[5vw] font-black tracking-tight text-amber-200/70">
              CUSCO&nbsp;MACHU&nbsp;PICCHU
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
