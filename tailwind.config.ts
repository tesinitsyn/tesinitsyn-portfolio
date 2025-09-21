import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: "class",               // ← обязательно
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./posts/**/*.{md,mdx}",
    ],
    theme: { extend: {} },
    plugins: [typography],
};
export default config;
