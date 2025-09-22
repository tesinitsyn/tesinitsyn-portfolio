"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "Обо мне" },
    { href: "/experience", label: "Опыт" },
    { href: "/skills", label: "Скиллы" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/contact", label: "Контакты" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-6xl">
            {/* Desktop menu */}
            <div className="hidden md:flex gap-4 items-center justify-center px-6 py-3
                      bg-white/20 dark:bg-black/20 backdrop-blur-2xl
                      rounded-full border border-white/40 dark:border-white/10
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                      text-gray-800 dark:text-gray-200 font-medium relative">
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

            {/* Mobile header */}
            <div className="md:hidden flex justify-between items-center
                      bg-white/20 dark:bg-black/20 backdrop-blur-2xl
                      rounded-full px-4 py-3 text-gray-800 dark:text-gray-200">
                <span className="font-semibold">Меню</span>
                <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden mt-2 flex flex-col gap-2
                        bg-white/20 dark:bg-black/20 backdrop-blur-2xl
                        rounded-xl p-4 text-gray-800 dark:text-gray-200 shadow-lg">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-3 py-2 rounded-lg transition-colors ${
                                    active
                                        ? "font-semibold text-black dark:text-white bg-white/30 dark:bg-white/10"
                                        : "hover:bg-white/20 dark:hover:bg-white/5"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
