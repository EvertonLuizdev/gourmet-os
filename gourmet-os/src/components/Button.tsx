import React from "react";
import { cn } from "../lib/utils";

// Define a interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

// Cria o componente de forma segura para o parser
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Classes Base
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Variantes de Cor
          variant === "primary" && "bg-slate-900 text-white hover:bg-slate-800",
          variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-200",
          variant === "danger" && "bg-red-600 text-white hover:bg-red-700",
          variant === "ghost" && "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
          
          // Tamanhos
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-10 px-4 py-2",
          size === "lg" && "h-12 px-8 text-lg",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };