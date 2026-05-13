"use client";

import { Mic, Trophy } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 relative" id="sobre">
      {/* Background Glow Opcional */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-primary/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Imagem */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1"
        >
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass shadow-[0_0_40px_rgba(191,210,23,0.05)]">
            <Image 
              src="/IMG_6754.PNG" 
              alt="Allan Five no Podcast" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradiente para garantir leitura da tag e dar estilo dark */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent"></div>
          </div>
          
          {/* Tag Flutuante */}
          <div className="absolute -bottom-6 -left-2 md:-left-6 glass px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-[0_0_30px_rgba(191,210,23,0.15)] bg-[#111111]/80 backdrop-blur-md">
            <div className="w-12 h-12 rounded-full bg-neon-primary flex items-center justify-center shrink-0">
              <Mic className="text-black w-6 h-6" />
            </div>
            <div className="text-sm font-medium text-white max-w-[130px] leading-snug">
              História revelada no Podcast
            </div>
          </div>
        </motion.div>

        {/* Coluna da Direita: Copy e Dashboard */}
        <div className="order-2 flex flex-col justify-center pt-8 md:pt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2"
          >
            Sobre Allan Five
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-bold text-neon-primary mb-6 uppercase tracking-wider drop-shadow-[0_0_8px_rgba(191,210,23,0.5)]"
          >
            O Criador do After Pay no Brasil
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-300 mb-10 leading-relaxed"
          >
            Idealizador do formato After Pay e criador da maior plataforma do modelo no Brasil.
          </motion.p>

          {/* Mini-Dashboard (Grid 2 colunas, inclusive no mobile) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Métrica 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="glass p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div className="text-neutral-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Volume Transacionado
              </div>
              <div className="text-2xl md:text-4xl font-black text-neon-primary mb-2 drop-shadow-[0_0_15px_rgba(191,210,23,0.3)]">
                +R$ 7 Milhões
              </div>
              <div className="text-neutral-500 text-xs md:text-sm font-medium">
                por mês através da plataforma.
              </div>
            </motion.div>

            {/* Métrica 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="glass p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div className="text-neutral-400 text-xs font-semibold uppercase tracking-widest mb-3">
                A Maior do Brasil
              </div>
              <div className="text-neon-primary mb-3">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_15px_rgba(191,210,23,0.3)]" />
              </div>
              <div className="text-neutral-500 text-xs md:text-sm font-medium">
                Ecossistema operacional próprio e validado.
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
