"use client";

import { motion, Variants } from "framer-motion";
import { PlayCircle, Settings, PenTool, Megaphone, CreditCard, Gift, CheckCircle2 } from "lucide-react";

const schedule = [
  {
    day: "Dia 25",
    title: "Primeira aula",
    icon: PlayCircle,
    items: [
      "Baixar antidetect",
      "Criação de contas",
      "Cadastrar nas plataformas",
      "Apresentar a Five Delivery",
      "Apresentar o produto",
      "Liberar afiliação",
      "Explicar regras da mentoria"
    ]
  },
  {
    day: "Dia 26",
    title: "Segunda aula",
    icon: Settings,
    items: [
      "Ensinar a automação",
      "Mostrar o Funil",
      "Fechamento"
    ]
  },
  {
    day: "Dia 27",
    title: "Terceira aula",
    icon: PenTool,
    items: [
      "Criativos"
    ]
  },
  {
    day: "Dia 28",
    title: "Quarta aula",
    icon: Megaphone,
    items: [
      "Subindo os anúncios, Facebook e Kwai"
    ]
  },
  {
    day: "Dia 29",
    title: "Quinta aula",
    icon: CreditCard,
    items: [
      "Cobrança"
    ]
  }
];

export function Cronograma() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10" id="cronograma">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-neon-primary drop-shadow-[0_0_10px_rgba(191,210,23,0.8)]">CRONOGRAMA</span> DO PROTOCOLO
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Linha vertical central para Desktop e à esquerda para Mobile */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {schedule.map((aula, index) => {
            const isEven = index % 2 === 0;
            const Icon = aula.icon;

            return (
              <motion.div key={index} variants={itemVariants} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0 pl-16 md:pl-0">

                {/* Desktop Left / Mobile Right */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:order-3 md:pl-12'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#BFD217]/50 hover:shadow-[0_0_15px_rgba(191,210,23,0.3)] transition-all duration-300 bg-white/5 backdrop-blur-md">
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Icon className="text-neon-primary w-6 h-6 md:hidden" />
                      <h3 className="text-2xl font-bold text-white">
                        <span className="text-neon-primary">{aula.day}</span> - {aula.title}
                      </h3>
                    </div>
                    <ul className={`space-y-2 text-neutral-300 flex flex-col ${isEven ? 'md:text-right md:items-end items-start text-left' : 'md:text-left items-start text-left'}`}>
                      {aula.items.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <CheckCircle2 className="w-5 h-5 text-neon-primary/50 shrink-0 mt-0.5" />
                          <span className={isEven ? "md:text-right text-left" : "text-left"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Marker (Center on Desktop, Left on Mobile) */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full border-4 border-[#0a0a0a] bg-neon-primary flex items-center justify-center transform -translate-x-1/2 md:order-2 z-10 shadow-[0_0_15px_rgba(191,210,23,0.5)]">
                  <Icon className="text-black w-5 h-5" />
                </div>

                {/* Empty Space for Desktop Alternate */}
                <div className={`hidden md:block w-5/12 ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
              </motion.div>
            );
          })}

          {/* Card Extra */}
          <motion.div variants={itemVariants} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0 pl-16 md:pl-0 pt-8">
            <div className="w-full md:w-5/12 md:text-right md:pr-12 md:order-1">
              <div className="p-6 md:p-8 rounded-2xl border-2 border-neon-primary hover:shadow-[0_0_25px_rgba(191,210,23,0.5)] transition-all duration-300 bg-neon-primary/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-primary/0 via-neon-primary/20 to-neon-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2 md:justify-end">
                    <Gift className="text-neon-primary w-8 h-8 md:hidden" />
                    <h3 className="text-3xl font-bold text-white uppercase tracking-wider">
                      + Conteúdo <span className="text-neon-primary drop-shadow-[0_0_8px_rgba(191,210,23,0.8)]">Extra</span>
                    </h3>
                  </div>
                  <p className="text-neutral-300 md:text-right text-lg">
                    Materiais bônus exclusivos e surpresas preparadas para você durante o protocolo.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute left-6 md:left-1/2 w-16 h-16 rounded-full border-4 border-[#0a0a0a] bg-neon-primary flex items-center justify-center transform -translate-x-1/2 md:order-2 z-10 shadow-[0_0_25px_rgba(191,210,23,0.6)]">
              <Gift className="text-black w-8 h-8" />
            </div>

            <div className="hidden md:block w-5/12 md:order-3"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
