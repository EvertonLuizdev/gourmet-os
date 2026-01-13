import { type ClassValue, clsx } from "clsx";
import {twMerge } from "tailwind-merge";

// Recebe uma lista de classes, misturas elas e resolve conflitos.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}