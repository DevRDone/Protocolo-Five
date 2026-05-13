import { AlertCircle } from "lucide-react";
import { Button } from "./ui/Button";

export function Offer() {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-neon-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 uppercase">
        Garanta sua vaga na <span className="text-neon-primary">Pré-venda</span>
      </h2>

      <div className="glass inline-block p-8 md:p-12 rounded-[2.5rem] border border-neon-primary/20 shadow-[0_0_50px_rgba(191,210,23,0.1)] w-full mb-12">
        <div className="text-neutral-400 text-lg uppercase tracking-widest font-medium mb-4">Investimento</div>
        <div className="text-6xl md:text-8xl font-black text-white mb-6">
          <span className="text-2xl md:text-4xl align-top text-neon-primary mr-2">R$</span>297
        </div>
        <p className="text-xl text-neutral-300 max-w-md mx-auto mb-10">
          Acesso garantido na pré-venda oficial do Protocolo Five.
        </p>

        <Button className="w-full md:w-auto md:px-16 md:py-6 text-xl mx-auto mb-4">
          Entre agora no Protocolo Five
        </Button>
        <p className="text-neutral-400 font-medium text-sm">e participe da próxima turma AO VIVO.</p>
      </div>

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
