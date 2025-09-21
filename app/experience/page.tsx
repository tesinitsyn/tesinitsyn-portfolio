import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";

export default function Experience() {
    const jobs = [
        {
            company: "Крок инкорпорейтед",
            role: "Java-разработчик",
            period: "Июль 2024 — Январь 2025",
            description: [
                "Автоматизировал процессы финансового контроля: расчет показателей, валидация данных, управление транзакциями.",
                "Оптимизировал функционал в микросервисной архитектуре, внедрил новую логику отчетности.",
                "Реализовал интеграцию с внешними сервисами через RabbitMQ, Feign, REST API.",
                "Разрабатывал модульные и интеграционные тесты (JUnit, Mockito), работал в CI/CD среде.",
            ],
            tech: "Java 11, Spring Boot, GraphQL, Kafka, RabbitMQ, Feign, Liquibase, PostgreSQL, PL/SQL",
        },
        {
            company: "AV Power",
            role: "Android-разработчик",
            period: "Июнь 2023 — Декабрь 2023",
            description: [
                "Выполнил рефакторинг и оптимизацию Android-приложения для тактической системы.",
                "Разработал новые модули (навигация, отображение данных), улучшил UX.",
                "Интегрировал с навигационным сервисом AlpineQuest.",
                "Организовал процесс версионирования для разных групп пользователей.",
            ],
            tech: "Java, Android SDK, Room, Retrofit, OkHttp",
        },
        {
            company: "Институт ИИ при РТУ МИРЭА",
            role: "Java-разработчик",
            period: "Июль 2022 — Июнь 2023",
            description: [
                "Разработал десктопное приложение на JavaFX для генерации титульных листов.",
                "Создал модуль веб-скрейпинга для автоматического сбора информации о факультетах.",
                "Реализовал сервисы для генерации документов (Apache POI, Spire.doc).",
                "Перенёс функционал в REST API (Spring Boot), интегрировал с Electron.",
            ],
            tech: "Java, JavaFX, Spring Boot, Spring Security, Git, Electron, Apache POI, Spire.doc",
        },
    ];

    return (
        <div className="space-y-6">
            {jobs.map((job, i) => (
                <GlassCard key={i}>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Левая часть */}
                        <div className="md:col-span-1 flex flex-col gap-1 text-center md:text-left">
                            <h3 className="text-xl font-bold">{job.role}</h3>
                            <p className="text-gray-500">{job.company}</p>
                            <span className="text-sm text-gray-400">{job.period}</span>
                        </div>

                        {/* Правая часть */}
                        <div className="md:col-span-2 space-y-2">
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                {job.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <p className="mt-2 text-xs text-gray-500">
                                <strong>Технологии:</strong> {job.tech}
                            </p>
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}
