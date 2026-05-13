import { Target, Check } from "lucide-react";
import { BackgroundNotifications } from "./ui/BackgroundNotifications";

const targetAudience = [
  "Quem quer entrar no mercado digital",
  "Quem quer aprender o modelo After Pay",
  "Quem busca uma operação real",
  "Quem quer vender utilizando uma estrutura validada",
  "Quem quer aprender com quem vive isso diariamente"
];

export function AfterPay() {
  return (
    <section className="w-full relative overflow-hidden border-t border-white/5">
      <BackgroundNotifications opacity="opacity-[0.02]" animationSpeed={50} />

      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Modelo <span className="text-neon-primary">After Pay</span> na prática
              </h2>
              <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
                Entenda como funciona o modelo onde o produto é enviado primeiro e a cobrança acontece depois através da operação.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-l-4 border-l-neon-primary">
              <h3 className="text-xl font-medium text-white mb-2">Estrutura validada</h3>
              <p className="text-neutral-400">
                Veja como funciona uma operação dentro de um dos nichos mais vendidos atualmente no After Pay.
              </p>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-primary/10 text-neon-primary mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Para quem é esse treinamento?</h3>
            <ul className="space-y-4">
              {targetAudience.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-neon-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-neutral-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
