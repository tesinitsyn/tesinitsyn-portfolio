import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "RecipeFeedRestApi",
        description:
            "REST API для обмена рецептами. Поддержка CRUD-операций, работа с пользователями и интеграция с базой данных.",
        repo: "https://github.com/tesinitsyn/RecipeFeedRestApi",
        tech: "Java, Spring Boot, REST API, PostgreSQL",
    },
    {
        title: "TripView",
        description:
            "Мобильное приложение-гид по достопримечательностям с серверным API. Возможность добавлять места, искать и сохранять избранное.",
        repo: "https://github.com/tesinitsyn/TripView",
        tech: "Kotlin, Jetpack Compose, SQLite, REST API",
    },
    {
        title: "AutoShow",
        description:
            "iOS-приложение для автолюбителей: поиск и покупка билетов на автомероприятия",
        repo: "https://github.com/tesinitsyn/AutoShow",
        tech: "Swift, SwiftUI, CoreData",
    },
    {
        title: "SleepTimer",
        description:
            "Простое MacOS-приложение. Позволяет запускать медиа и автоматически выключать по времени.",
        repo: "https://github.com/tesinitsyn/SleepTimer",
        tech: "Swift, SwiftUI",
    },
];

export default function Portfolio() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <FadeInSection key={index}>
                    <GlassCard>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            {project.description}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <strong>Технологии:</strong> {project.tech}
                        </p>
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 shadow hover:scale-[1.02] transition"
                        >
                            <FaGithub />
                            <span>Перейти в репозиторий</span>
                        </a>
                    </GlassCard>
                </FadeInSection>
            ))}
        </div>
    );
}
