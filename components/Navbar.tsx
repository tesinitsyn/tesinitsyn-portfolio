"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "Обо мне" },
    { href: "/experience", label: "Опыт" },
    { href: "/skills", label: "Скиллы" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/contact", label: "Контакты" },
    // { href: "/blog", label: "Блог" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex gap-4 items-center px-6 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-full border border-white/40 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-gray-800 dark:text-gray-200 font-medium relative">
                {links.map((link) => {
                    const active = pathname === link.href;

                    return (
                        <div key={link.href} className="relative">
                            {active && (
                                <motion.div
                                    layoutId="active"
                                    className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <Link
                                href={link.href}
                                className={`px-3 py-1 relative z-10 transition-colors ${
                                    active ? "font-semibold text-black dark:text-white" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
