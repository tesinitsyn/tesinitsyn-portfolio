"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";

const projects = [
    {
        title: "HotelsRent",
        description:
            "Клиент-серверное приложение для аренды отелей. Android-клиент на Jetpack Compose и сервер на Spring Boot.",
        tech: "Kotlin, Jetpack Compose, Spring Boot, SQLite",
        link: "https://github.com/your-github/hotelsrent",
        image: "https://placehold.co/400x250",
    },
    {
        title: "Trip View",
        description:
            "Мобильный гид по достопримечательностям. Экран регистрации, поиск, детали места, избранное.",
        tech: "Kotlin, Jetpack Compose, SQLite",
        link: "https://github.com/your-github/tripview",
        image: "https://placehold.co/400x250",
    },
    {
        title: "Система контроля финансов (CROC)",
        description:
            "Автоматизация процессов финансового контроля, интеграции с внешними сервисами, отчетность.",
        tech: "Java 11, Spring Boot, Kafka, RabbitMQ, PostgreSQL, GraphQL",
        link: "",
        image: "https://placehold.co/400x250",
    },
];

export default function Portfolio() {
    return (
        <div className="space-y-6">
            {projects.map((p, i) => (
                <GlassCard key={i}>
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        {/* Левая часть — картинка */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative w-full h-40 rounded-xl overflow-hidden border border-white/20"
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Правая часть */}
                        <div className="md:col-span-2 flex flex-col gap-3">
                            <h3 className="text-xl font-bold">{p.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {p.description}
                            </p>
                            <p className="text-xs text-gray-500">
                                <strong>Технологии:</strong> {p.tech}
                            </p>
                            {p.link && (
                                <a
                                    href={p.link}
                                    target="_blank"
                                    className="self-start mt-1 px-4 py-1.5 rounded-full bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/30 dark:hover:bg-white/20 transition text-sm"
                                >
                                    Посмотреть →
                                </a>
                            )}
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}
