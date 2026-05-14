import Image from "next/image";

interface BackgroundNotificationsProps {
  rowCount?: number;
  itemsPerRow?: number;
  gapSize?: string;
  opacity?: string;
}

export function BackgroundNotifications({
  rowCount = 3,
  itemsPerRow = 6,
  gapSize = "gap-16",
  opacity = "opacity-20",
}: BackgroundNotificationsProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex flex-col justify-around py-16 md:py-24">
      {Array.from({ length: rowCount }).map((_, rowIndex) => {
        // Fileiras pares → esquerda, ímpares → direita
        const isLeft = rowIndex % 2 === 0;
        const animationClass = isLeft
          ? "animate-marquee-left"
          : "animate-marquee-right";

        return (
          <div key={rowIndex} className="w-full flex items-center overflow-hidden">
            <div className={`flex ${gapSize} w-max ${opacity} ${animationClass}`}>
              {/* Primeiro bloco */}
              <div className={`flex ${gapSize} shrink-0`}>
                {Array.from({ length: itemsPerRow }).map((_, i) => (
                  <Image
                    key={i}
                    src="/Notificacoes.jpeg"
                    alt=""
                    width={350}
                    height={127}
                    className="w-[280px] md:w-[350px] h-auto shrink-0 rounded-2xl object-cover shadow-[0_0_30px_rgba(191,210,23,0.1)] grayscale mix-blend-screen filter"
                  />
                ))}
              </div>
              {/* Segundo bloco idêntico para criar loop contínuo e perfeito */}
              <div className={`flex ${gapSize} shrink-0`}>
                {Array.from({ length: itemsPerRow }).map((_, i) => (
                  <Image
                    key={`dup-${i}`}
                    src="/Notificacoes.jpeg"
                    alt=""
                    width={350}
                    height={127}
                    className="w-[280px] md:w-[350px] h-auto shrink-0 rounded-2xl object-cover shadow-[0_0_30px_rgba(191,210,23,0.1)] grayscale mix-blend-screen filter"
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Máscara de gradiente nas bordas */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,black_0%,transparent_10%,transparent_90%,black_100%)] z-10 pointer-events-none"></div>
    </div>
  );
}
