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
        <body
            className={`${inter.className} relative min-h-screen text-gray-900 dark:text-gray-100`}
        >
        {/* --- фоновые элементы --- */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-[#141e30] dark:to-[#243b55]" />
        <div className="pointer-events-none fixed w-[40rem] h-[40rem] bg-pink-500/40 rounded-full blur-[120px] top-[-10%] left-[-10%] -z-10" />
        <div className="pointer-events-none fixed w-[35rem] h-[35rem] bg-purple-500/30 rounded-full blur-[120px] bottom-[-15%] right-[-10%] -z-10" />
        <div className="pointer-events-none fixed w-[28rem] h-[28rem] bg-blue-500/30 rounded-full blur-[100px] bottom-[15%] left-[15%] -z-10" />

        <Providers>
            <Navbar />

            <main className="pt-24 px-4 sm:px-6 max-w-6xl w-full mx-auto relative z-10 space-y-12 pb-32">
                {children}
            </main>

            {/* --- футер --- */}
            <footer
                className="relative z-10 mt-16 rounded-t-2xl
                       bg-white/20 dark:bg-black/20 backdrop-blur-2xl
                       border-t border-white/30 dark:border-white/10
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
                       py-6 text-center text-sm text-gray-700 dark:text-gray-300"
            >
                © {new Date().getFullYear()} Тимофей Синицын ·{" "}
                <a
                    href="https://github.com/tesinitsyn"
                    className="hover:underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>{" "}
                ·{" "}
                <a
                    href="https://www.linkedin.com/"
                    className="hover:underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </footer>
        </Providers>
        </body>
        </html>
    );
}
