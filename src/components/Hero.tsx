import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ChevronRight, Circle } from "lucide-react";
import { BackgroundNotifications } from "./ui/BackgroundNotifications";

// ─── Link do Checkout ────────────────────────────────────────────
// Para trocar o link basta alterar esta constante.
const CHECKOUT_URL = "https://pay.hub.la/FgOgZuJrbElK4YWprrje";
// ─────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-24 px-6">
      <BackgroundNotifications opacity="opacity-[0.03]" />

      <div className="absolute top-0 z-[-1] h-[120vh] w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(191,210,23,0.1),rgba(0,0,0,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">

        {/* Left Column */}
        <div className="flex flex-col items-start text-left lg:w-1/2 space-y-8">

          <img
            src="/logo.png"
            alt="Protocolo Five Logo"
            className="w-50 h-auto mb-2 drop-shadow-[0_0_15px_rgba(191,210,23,0.2)]"
          />

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 px-2 pr-4 text-sm text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white">Novo</span>
            <span>Pré-venda Oficial</span>
            <ChevronRight size={14} className="text-neutral-400" />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            PROTOCOLO <span className="text-neon-primary block mt-2">FIVE</span>
          </h1>

          <div className="text-lg md:text-xl text-neutral-400 max-w-xl font-light space-y-4">
            <p className="text-neutral-300">
              Aprenda como funciona uma operação de After Pay dentro de um dos nichos que mais vendem hoje no mercado.
            </p>
            <p className="font-medium text-white">
              O Protocolo Five é uma mentoria AO VIVO criada por mim e pela minha equipe interna, onde você vai aprender na prática como estruturar e operar esse modelo.
            </p>
            <p>
              Além das aulas <span className="text-white font-medium">AO VIVO,</span> você também terá acesso a um dos produtos que mais vendem hoje no After Pay, já validado e pronto para operação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full px-8 py-4">Garantir Minha Vaga</Button>
            </a>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="lg:w-1/2 w-full relative mt-8 lg:mt-0">
          {/* Dotted Background Container */}
          <div className="relative w-full min-h-[500px] lg:aspect-square bg-[#0a0a0a] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden py-12 px-4 lg:px-0 lg:py-0">
            {/* Dots Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#BFD217 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

            <div className="relative z-10 w-4/5 max-w-md">
              <h3 className="text-center text-lg font-medium text-neutral-300 mb-8 tracking-wide opacity-90">
                Ao entrar, você terá acesso:
              </h3>

              {/* Fake UI Window */}
              <div className="w-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  {[
                    "Ao produto",
                    "Às aulas ao vivo",
                    "À minha estrutura operacional",
                    "Aos bastidores da operação",
                    "Aos processos utilizados diariamente"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3.5 hover:bg-white/[0.06] transition-colors cursor-pointer group">
                      <span className="text-neutral-300 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                      <Circle size={16} className="text-neon-primary fill-neon-primary/20" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-neutral-400 mt-6 font-medium">
                Tudo de forma prática e objetiva.
              </p>

              {/* Glow Behind the window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-neon-primary/10 blur-[80px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
