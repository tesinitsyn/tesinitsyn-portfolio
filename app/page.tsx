"use client";
import { FaGithub, FaTelegram } from "react-icons/fa";
import GlassCard from "../components/GlassCard";
import FadeInSection from "../components/FadeInSection";
import Image from "next/image";




export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            {/* Главный блок */}
            <FadeInSection>
                <GlassCard>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Аватар */}
                        <div className="flex justify-center">
                            <Image
                                src="/IMG_1270.jpeg"   // путь от корня public/
                                alt="avatar"
                                width={224}
                                height={224}
                                className="w-56 h-56 rounded-full border-4 border-white/40 shadow-xl object-cover"
                            />
                        </div>

                        {/* Описание */}
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="text-4xl font-bold">Тимофей Синицын</h1>
                            <h2 className="text-lg text-gray-600 dark:text-gray-300">
                                Java & Android разработчик
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                Увлекаюсь микросервисами, мобильными приложениями и созданием
                                полезных продуктов. Опыт работы с Java, Spring Boot, Kotlin,
                                Android, PostgreSQL, Kafka, RabbitMQ и Docker.
                            </p>

                            {/* Кнопки */}
                            <div className="flex gap-3 justify-center md:justify-start">
                                <a
                                    href="https://github.com/your-github"
                                    target="_blank"
                                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/30 dark:hover:bg-white/20 transition"
                                >
                                    <FaGithub className="text-xl" />
                                    GitHub
                                </a>

                                <a
                                    href="https://t.me/tesinitsyn"
                                    target="_blank"
                                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/30 dark:hover:bg-white/20 transition"
                                >
                                    <FaTelegram className="text-xl text-sky-500" />
                                    Telegram
                                </a>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </FadeInSection>

            {/* Блок технологий */}
            <FadeInSection>
                <GlassCard>
                    <h3 className="text-2xl font-bold mb-4 text-center">Мои технологии</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            "Java",
                            "Spring Boot",
                            "Kotlin",
                            "Android",
                            "PostgreSQL",
                            "Kafka",
                            "RabbitMQ",
                            "Docker",
                        ].map((tech, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 text-sm rounded-full bg-white/20 dark:bg-white/10 border border-white/30 hover:scale-105 transition"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </GlassCard>
            </FadeInSection>

            {/* Блок краткого опыта */}
            <FadeInSection>
                <GlassCard>
                    <h3 className="text-2xl font-bold mb-4 text-center">Последние проекты</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <strong>Java-разработчик</strong> — Крок инкорпорейтед (2024–2025)
                        </li>
                        <li>
                            <strong>Android-разработчик</strong> — AV Power (2023)
                        </li>
                        <li>
                            <strong>Java-разработчик</strong> — Институт ИИ при РТУ МИРЭА (2022–2023)
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <a href="/experience" className="text-blue-500 hover:underline">
                            Подробнее →
                        </a>
                    </div>
                </GlassCard>
            </FadeInSection>

            {/* Футер */}
            <FadeInSection>
                <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
                    © {new Date().getFullYear()} Тимофей Синицын. Сделано с ❤️ на Next.js и Tailwind.
                </footer>
            </FadeInSection>
        </div>
    );
}
