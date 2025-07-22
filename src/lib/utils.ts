import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { Article } from "@/types/article.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
