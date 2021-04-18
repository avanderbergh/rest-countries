import { writable } from "svelte/store";

export const mode = writable<"light" | "dark">("light");
