"use client";

import { motion } from "framer-motion";

interface BackgroundNotificationsProps {
  rowCount?: number;
  itemsPerRow?: number;
  animationSpeed?: number;
  gapSize?: string;
  opacity?: string;
}

export function BackgroundNotifications({
  rowCount = 3,
  itemsPerRow = 6,
  animationSpeed = 40,
  gapSize = "gap-16",
  opacity = "opacity-20",
}: BackgroundNotificationsProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex flex-col justify-around py-16 md:py-24">
      {Array.from({ length: rowCount }).map((_, rowIndex) => {
        // Alterna a direção do scroll por fileira (par = esquerda, ímpar = direita)
        const direction = rowIndex % 2 === 0 ? -1 : 1;

        return (
          <div
            key={rowIndex}
            className="w-full flex items-center"
          >
            <motion.div
              className={`flex ${gapSize} w-max ${opacity}`}
              animate={{
                x: direction === -1 ? [0, "-50%"] : ["-50%", 0],
              }}
              transition={{
                repeat: Infinity,
                duration: animationSpeed,
                ease: "linear",
              }}
            >
              {/* Primeiro bloco de imagens */}
              <div className={`flex ${gapSize} shrink-0`}>
                {Array.from({ length: itemsPerRow }).map((_, i) => (
                  <img
                    key={i}
                    src="/Notificacoes.jpeg"
                    alt=""
                    className="w-[280px] md:w-[350px] h-auto shrink-0 rounded-2xl object-cover shadow-[0_0_30px_rgba(191,210,23,0.1)] grayscale mix-blend-screen filter"
                  />
                ))}
              </div>
              {/* Segundo bloco idêntico para criar o loop contínuo e perfeito */}
              <div className={`flex ${gapSize} shrink-0`}>
                {Array.from({ length: itemsPerRow }).map((_, i) => (
                  <img
                    key={`dup-${i}`}
                    src="/Notificacoes.jpeg"
                    alt=""
                    className="w-[280px] md:w-[350px] h-auto shrink-0 rounded-2xl object-cover shadow-[0_0_30px_rgba(191,210,23,0.1)] grayscale mix-blend-screen filter"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Máscara de gradiente nas bordas para as imagens sumirem suavemente (opcional mas melhora muito a UI) */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,black_0%,transparent_10%,transparent_90%,black_100%)] z-10 pointer-events-none"></div>
    </div>
  );
}
