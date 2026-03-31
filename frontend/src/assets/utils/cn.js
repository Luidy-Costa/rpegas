import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes do Tailwind de forma inteligente, resolvendo conflitos.
 * Exemplo: cn('px-2 py-1', 'px-4') => 'py-1 px-4'
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}