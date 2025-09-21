import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";


export default function About() {
    return (
        <div className="flex flex-col gap-6">
            {/* Основное о профессии */}
            <GlassCard>
                <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Привет 👋 Я <strong>Тимофей Синицын</strong> — Java & Android
                    разработчик. Люблю микросервисы, мобильные приложения и создание
                    полезных продуктов. Опыт работы с{" "}
                    <strong>
                        Java, Spring Boot, Kotlin, Android, PostgreSQL, Kafka, RabbitMQ
                    </strong>{" "}
                    и другими технологиями. Стараюсь писать чистый код и разрабатывать
                    архитектуру, которая живёт долго.
                </p>
            </GlassCard>

            {/* Личное — увлечения */}
            <GlassCard>
                <h3 className="text-2xl font-bold mb-4">Что мне нравится вне работы</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>🎸 Играю на гитаре, пишу музык.</li>
                    <li>☕ Работаю баристой — кофе для меня это отдельная культура.</li>
                    <li>💻 Гикую: пробую новые технологии, люблю собирать проекты для души.</li>
                    <li>📚 Постоянно учусь и прокачиваю скиллы — от Android до бэкенда.</li>
                </ul>
            </GlassCard>
            {/* Футер */}
            <FadeInSection>
                <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
                    © {new Date().getFullYear()} Тимофей Синицын. Сделано с ❤️ на Next.js и Tailwind.
                </footer>
            </FadeInSection>
        </div>
    );
}
