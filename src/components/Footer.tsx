import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image src="/logo.webp" alt="Protocolo Five Logo" width={128} height={40} className="w-32 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Protocolo Five. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
