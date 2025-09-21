import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Providers } from "../components/Providers";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
    title: "Портфолио Тимофея Синицына",
    description: "Личный сайт-визитка в стиле macOS Liquid Glass",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className={`${inter.className} relative min-h-screen`}>
        <Providers>
            {/* фон */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] dark:from-[#232526] dark:to-[#414345]" />
            <div className="pointer-events-none absolute w-96 h-96 bg-pink-400/30 rounded-full blur-3xl top-10 left-20" />
            <div className="pointer-events-none absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl bottom-20 right-20" />
            <div className="pointer-events-none absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl bottom-40 left-40" />

            <Navbar />
            <main className="pt-28 px-6 max-w-5xl mx-auto relative z-10 space-y-12 pb-16">
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
