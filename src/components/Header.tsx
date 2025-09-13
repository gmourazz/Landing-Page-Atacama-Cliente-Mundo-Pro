export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight">MUNDO<span className="font-medium"> PRÓ</span></span>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#viagem" className="hover:opacity-70">início</a>
          <a href="#hospedagem" className="hover:opacity-70">hospedagem</a>
          <a href="#duvidas" className="hover:opacity-70">dúvidas frequentes</a>
          <a href="#sobre" className="hover:opacity-70">sobre nós</a>
        </nav>
        <a href="#contato" className="rounded-xl px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:opacity-90">
          Peça seu roteiro
        </a>
      </div>
    </header>
  );
}
