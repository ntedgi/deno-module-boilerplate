import { bold,underline,blue } from "./deps.ts";

/** Returns `Hello World` in bold */
export function getHelloWorld(): string {
  return blue(underline(bold("Hello World")));
}

