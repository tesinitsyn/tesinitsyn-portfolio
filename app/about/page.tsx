import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";

export default function About() {
    return (
        <div className="flex flex-col gap-6">
            <FadeInSection>
                <GlassCard>
                    <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Привет 👋 Я Тимофей Синицын — разработчик, который обожает бэкенд и всё, что связано с Java. В
                        работе для меня важно писать не только чистый, но и надежный код, покрытый тестами. Люблю
                        разбираться в сложных задачах и превращать идеи в рабочие продукты.
                    </p>
                </GlassCard>
            </FadeInSection>

            <FadeInSection>
                <GlassCard>
                    <h3 className="text-2xl font-bold mb-4">Немного личного</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li>🎸Музыка для меня — способ расслабиться: играю на гитаре и сочиняю собственные треки</li>
                        <li>☕ Бариста по совместительству: кайфую от процесса и ценю хороший кофе</li>
                        <li>💻 Настоящий гик по технике: люблю копаться в железках и софте</li>
                        <li>🥇 Когда-то даже держал топ-1 в России в Subway Surfers</li>
                    </ul>
                </GlassCard>
            </FadeInSection>
        </div>
    );
}
