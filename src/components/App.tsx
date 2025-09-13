import Header from "./components/Header";
import HeroPeru from "./components/HeroPeru";
import Benefits from "./components/Benefits";

export default function App() {
  return (
    <main className="min-h-dvh bg-[#fff5e6] text-slate-900">
      <Header />
      <HeroPeru />
      <Benefits />
      <section id="contato" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border p-8 text-center bg-white">
          <h3 className="text-2xl md:text-3xl font-bold">Pronta(o) para o Peru?</h3>
          <p className="mt-2 text-slate-600">Fale no WhatsApp e receba um roteiro inicial em minutos.</p>
          <a
            href="https://wa.me/5534984139764?text=Oi%20Geo!%20Quero%20um%20roteiro%20para%20o%20Peru"
            className="mt-5 inline-flex items-center rounded-xl px-5 py-3 bg-rose-700 text-white font-medium hover:opacity-90"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
      <footer className="py-10 text-center text-sm text-slate-500 bg-white border-t">
        © {new Date().getFullYear()} LPS Destinos • por Geovanna Moura
      </footer>
    </main>
  );
}
