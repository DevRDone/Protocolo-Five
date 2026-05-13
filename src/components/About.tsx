import { Anchor, ShieldCheck, Layers, Briefcase, Zap } from "lucide-react";

export function About() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="glass p-8 md:p-16 rounded-[2rem] relative overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-neon-primary/10 blur-[100px] -z-10 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="relative w-56 h-56 md:w-80 md:h-80 mb-8 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(191,210,23,0.15)] mx-auto md:mx-0">
              <img src="/AllanFive.jpeg" alt="Allan Five" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Sobre <span className="text-neon-primary">Allan Five</span>
            </h2>
            <div className="space-y-4 text-lg text-neutral-300 w-full flex flex-col items-center md:items-start">
              <p className="flex items-center gap-3">
                <Zap className="text-neon-primary w-5 h-5 shrink-0" />
                Mais de 10 anos no mercado digital.
              </p>
              <p className="flex items-center gap-3">
                <Anchor className="text-neon-primary w-5 h-5 shrink-0" />
                Ex-soldador naval.
              </p>
              <p className="flex items-center gap-3">
                <Briefcase className="text-neon-primary w-5 h-5 shrink-0" />
                Criador de operações reais dentro do digital.
              </p>
            </div>

            <p className="mt-8 text-neutral-400 italic border-l-2 border-white/20 pl-4">
              "Fiquei conhecido por mostrar a realidade do mercado sem vender personagem."
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-neon-primary w-6 h-6" />
                <h3 className="text-xl font-medium text-white">Estrutura Própria Atual</h3>
              </div>
              <p className="text-neutral-400 mb-6">
                Hoje possuo um ecossistema operacional completo que sustenta minhas operações:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Operação interna", "Backend", "Logística", "Empresa de cobrança", "Ecossistema operacional"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <Layers className="text-white/50 w-5 h-5" />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
