import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({ children, icon = true, className, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        "flex items-center justify-center gap-2 bg-neon-primary text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:bg-[#cbe318] shadow-[0_0_20px_rgba(191,210,23,0.2)] hover:shadow-[0_0_30px_rgba(191,210,23,0.4)]",
        className
      )}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={20} className="stroke-[2.5]" />}
    </button>
  );
}
