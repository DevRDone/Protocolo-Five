import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protocolo Five | Aprenda o Modelo After Pay na Prática",
  description: "Treinamento ao vivo com Allan Five. Descubra como funciona uma operação real utilizando o modelo After Pay. Sem teoria inútil, sem personagem.",
  keywords: ["Protocolo Five", "Allan Five", "After Pay", "Mercado Digital", "Operação Real", "Treinamento"],
  openGraph: {
    title: "Protocolo Five | Estrutura de Operação Real",
    description: "Sem teoria inútil. Sem promessa falsa. Entre na pré-venda e descubra a realidade do modelo After Pay.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocolo Five",
    description: "Aprenda o modelo After Pay na prática.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen bg-black text-white selection:bg-neon-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
