import {
  Settings,
  CreditCard,
  Image as ImageIcon,
  Megaphone,
  MessageSquare,
  Bot,
  Workflow,
  CheckCircle,
  Globe
} from "lucide-react";

const features = [
  { icon: Settings, title: "Estrutura operacional", colSpan: "col-span-1 md:col-span-2" },
  { icon: CreditCard, title: "Modelo After Pay", colSpan: "col-span-1" },
  { icon: ImageIcon, title: "Criativos", colSpan: "col-span-1" },
  { icon: Megaphone, title: "Tráfego", colSpan: "col-span-1" },
  { icon: MessageSquare, title: "Atendimento", colSpan: "col-span-1" },
  { icon: Bot, title: "Automação", colSpan: "col-span-1 md:col-span-2" },
  { icon: Workflow, title: "Processos internos", colSpan: "col-span-1" },
  { icon: CheckCircle, title: "Estratégias validadas", colSpan: "col-span-1" },
  { icon: Globe, title: "Tudo dentro desse ecossistema", colSpan: "col-span-1 md:col-span-2" },
];

export function BentoGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          O que você vai aprender na <span className="text-neon-primary">prática?</span>
        </h2>
        <p className="text-neutral-400 mt-6 text-lg max-w-3xl mx-auto">
          O objetivo aqui não é vender promessa.<br />
          O objetivo é te ajudar a construir resultado de forma sólida vendendo o meu produto, utilizando uma estrutura validada e processos reais aplicados diariamente dentro da operação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[140px] md:grid-flow-dense">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`glass rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group transition-all duration-300 hover:glass-hover hover:-translate-y-1 ${feature.colSpan}`}
          >
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-neon-primary/20">
              <feature.icon className="text-neon-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white group-hover:text-neon-primary transition-colors">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
