"use client";
import GlassCard from "../../components/GlassCard";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaTelegram,
    FaGithub,
    FaFilePdf,
} from "react-icons/fa";
import Image from "next/image";


export default function Contact() {
    const contacts = [
        {
            href: "mailto:sitiev174@gmail.com",
            icon: <FaEnvelope className="text-red-500 text-lg" />,
            label: "sitiev174@gmail.com",
        },
        {
            href: "tel:+79193393089",
            icon: <FaPhone className="text-green-500 text-lg" />,
            label: "+7 (919) 339-30-89",
        },
        {
            href: "https://t.me/tesinitsyn",
            icon: <FaTelegram className="text-sky-500 text-lg" />,
            label: "@tesinitsyn",
        },
        {
            href: "https://github.com/your-github",
            icon: <FaGithub className="text-gray-700 dark:text-gray-300 text-lg" />,
            label: "GitHub",
        },
    ];

    return (
        <GlassCard>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Левая часть — профиль */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <Image
                        src="/me.jpeg"   // путь от корня public/
                        alt="avatar"
                        width={224}
                        height={224}
                        className="w-56 h-56 rounded-full border-4 border-white/40 shadow-xl object-cover"
                        />
                    <h2 className="text-2xl font-bold">Тимофей Синицын</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Java & Android разработчик
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="mt-2 inline-block px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/30 dark:hover:bg-white/20 transition text-sm"
                    >
                        📄 Скачать резюме
                    </a>
                </div>

                {/* Правая часть — контакты */}
                <div className="grid sm:grid-cols-2 gap-3">
                    {contacts.map((c, i) => (
                        <motion.a
                            key={i}
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/15 dark:bg-white/10 border border-white/20 hover:bg-white/25 transition"
                        >
                            {c.icon}
                            <span className="text-sm">{c.label}</span>
                        </motion.a>
                    ))}

                    {/* резюме как отдельная карточка тоже */}
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/15 dark:bg-white/10 border border-white/20 hover:bg-white/25 transition"
                    >
                        <FaFilePdf className="text-pink-600 text-lg" />
                        <span className="text-sm">Скачать резюме (PDF)</span>
                    </motion.a>
                </div>
            </div>
        </GlassCard>
    );

}
