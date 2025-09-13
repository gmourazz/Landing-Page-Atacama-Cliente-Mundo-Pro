type Item = { title: string; desc: string; icon?: JSX.Element };

const items: Item[] = [
  { title: "Passagem Aérea", desc: "Ida e volta com taxas incluídas." },
  { title: "Hospedagem", desc: "Hotéis selecionados com café da manhã." },
  { title: "Assistência", desc: "Suporte 24h durante toda a viagem." },
  { title: "Passeios", desc: "City tour + ingressos principais." },
  { title: "Alimentação", desc: "Sugestões e reservas em restaurantes." },
  { title: "Franquia de Bagagem", desc: "1 bagagem de 23kg (consulte cia)." },
  { title: "Seguro Viagem", desc: "Cobertura internacional completa." },
  { title: "Sem Preocupação", desc: "Roteiro organizado e flexível." },
  { title: "Curadoria", desc: "Experiências únicas e personalizadas." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-14 md:py-18 bg-[#fbf3cf]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="uppercase tracking-widest text-slate-500 text-xs">A sua melhor experiência</p>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold">Viaje com a Mundo Pró!</h3>
          <p className="mt-2 text-slate-600">Confira o que preparamos para você.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-amber-300 bg-amber-100 p-6 shadow-[0_2px_0_#d9b666]">
              <div className="text-rose-700 text-2xl">★</div>
              <h4 className="mt-3 font-semibold">{it.title}</h4>
              <p className="mt-1 text-sm text-slate-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
