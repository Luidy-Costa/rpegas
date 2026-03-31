import React from "react";
import { cn } from "../../utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  
  // Dicionário de variantes visuais
  const variants = {
    primary: "bg-brand text-white hover:opacity-90 active:scale-95 shadow-sm",
    outline: "bg-transparent border border-border text-title hover:bg-surface active:scale-95",
    danger: "bg-red-600/10 text-red-500 hover:bg-red-600/20 active:scale-95",
    ghost: "bg-transparent text-body hover:text-title hover:bg-surface active:scale-95"
  };

  // Dicionário de tamanhos
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg font-medium w-full",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;