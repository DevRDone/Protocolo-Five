import { AlertCircle, Lock } from "lucide-react";
import { Button } from "./ui/Button";

// Configuração da Fase de Vendas
// Valores aceitos: "pre-sale" ou "launch"
const CURRENT_PHASE = "pre-sale";

export function Offer() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24 text-center" id="oferta">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-neon-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-12 uppercase">
        {CURRENT_PHASE === "pre-sale" ? (
          <>Garanta sua vaga na <span className="text-neon-primary">Pré-venda</span></>
        ) : (
          <>As inscrições estão <span className="text-neon-primary">Abertas</span></>
        )}
      </h2>

      {CURRENT_PHASE === "pre-sale" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 - Oferta Ativa (Pré-venda) */}
          <div className="bg-[#111111] p-8 md:p-12 rounded-[2.5rem] border border-neon-primary/20 shadow-[0_0_40px_rgba(191,210,23,0.1)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-primary to-transparent opacity-50"></div>
            <div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest font-medium mb-4">Investimento</div>
              <div className="text-6xl md:text-7xl font-black text-white mb-6">
                <span className="text-2xl md:text-3xl align-top text-neon-primary mr-2">R$</span>197
              </div>
              <p className="text-lg text-neutral-300 mx-auto mb-10">
                Acesso garantido na pré-venda oficial do Protocolo Five.
              </p>
            </div>

            <div>
              <Button className="w-full text-lg mb-4 py-6 font-bold bg-[#BFD217] text-black hover:bg-[#BFD217]/90">
                Entre agora no Protocolo
              </Button>
              <p className="text-neutral-400 font-medium text-xs">e participe da próxima turma AO VIVO.</p>
            </div>
          </div>

          {/* Card 2 - Oferta Bloqueada (Lote Oficial) */}
          <div className="bg-[#111111]/80 p-8 md:p-12 rounded-[2.5rem] border border-white/5 opacity-60 flex flex-col justify-between grayscale-[30%]">
            <div>
              <div className="text-neutral-500 text-sm uppercase tracking-widest font-medium mb-4">Lote Oficial</div>
              <div className="text-6xl md:text-7xl font-black text-white/50 mb-6">
                <span className="text-2xl md:text-3xl align-top text-neutral-500 mr-2">R$</span>297
              </div>
              <p className="text-lg text-neutral-400 mx-auto mb-10">
                Acesso ao Protocolo Five a partir do dia 25.
              </p>
            </div>

            <div>
              <button disabled className="w-full text-lg mb-4 py-4 rounded-xl font-bold bg-white/5 text-neutral-400 border border-white/10 cursor-not-allowed flex items-center justify-center gap-2 transition-all">
                <Lock className="w-5 h-5" />
                Libera em 25/Maio
              </button>
              <p className="text-neutral-500 font-medium text-xs">e participe da próxima turma AO VIVO.</p>
            </div>
          </div>
        </div>
      )}

      {CURRENT_PHASE === "launch" && (
        <div className="max-w-xl mx-auto mb-12">
          {/* Card Único - Lançamento */}
          <div className="bg-[#111111] p-8 md:p-12 rounded-[2.5rem] border border-neon-primary/20 shadow-[0_0_40px_rgba(191,210,23,0.1)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-primary to-transparent opacity-50"></div>
            <div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest font-medium mb-4">Investimento</div>
              <div className="text-6xl md:text-7xl font-black text-white mb-6">
                <span className="text-2xl md:text-3xl align-top text-neon-primary mr-2">R$</span>297
              </div>
              <p className="text-lg text-neutral-300 mx-auto mb-10">
                Acesso completo ao Protocolo Five.
              </p>
            </div>

            <div>
              <Button className="w-full text-lg mb-4 py-6 font-bold bg-[#BFD217] text-black hover:bg-[#BFD217]/90">
                Entre agora no Protocolo
              </Button>
              <p className="text-neutral-400 font-medium text-xs">e participe da próxima turma AO VIVO.</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-left glass p-6 rounded-2xl max-w-3xl mx-auto bg-black/40">
        <AlertCircle className="text-neon-primary shrink-0 w-8 h-8" />
        <div>
          <h4 className="text-white font-medium text-lg mb-1">Aviso Importante</h4>
          <p className="text-neutral-400 text-sm md:text-base">
            Esse treinamento não é sobre dinheiro fácil. É sobre aprender uma operação real, entender os processos e construir resultado com visão de longo prazo.
          </p>
        </div>
      </div>
    </section>
  );
}
