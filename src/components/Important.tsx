import { AlertTriangle } from "lucide-react";

export function Important() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-12">
      <div className="glass p-8 md:p-12 rounded-3xl border border-neon-primary/30 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-primary"></div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-primary/20 text-neon-primary mb-6">
          <AlertTriangle size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">Importante</h2>
        <h3 className="text-2xl font-semibold text-neon-primary mb-6">Isso é uma PRÉ-VENDA</h3>
        <div className="text-lg text-neutral-300 space-y-4">
          <p>Ao entrar hoje, você garante sua vaga antecipada no Protocolo Five.</p>
          <p className="font-medium text-white">As aulas acontecerão AO VIVO.</p>
          <p>A data oficial será divulgada em breve para os alunos.</p>
        </div>
      </div>
    </section>
  );
}
