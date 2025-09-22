"use client";

import GlassCard from "@/components/GlassCard";
import FadeInSection from "@/components/FadeInSection";
import SkillBadge from "@/components/SkillBadge";

import {
    SiKotlin,
    SiSpring,
    SiPostgresql,
    SiDocker,
    SiApachekafka,
    SiGit,
    SiGradle,
    SiJunit5,
    SiGraphql,
    SiRedis,
    SiSwift,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillGroups = {
    Backend: [
        { label: "Java", icon: FaJava },
        { label: "Kotlin", icon: SiKotlin },
        { label: "Spring Boot", icon: SiSpring },
        { label: "GraphQL", icon: SiGraphql },
        { label: "Redis", icon: SiRedis },
        { label: "PostgreSQL", icon: SiPostgresql },
        { label: "JUnit 5", icon: SiJunit5 },
    ],
    Mobile: [
        { label: "Kotlin (Android)", icon: SiKotlin },
        { label: "iOS (Swift)", icon: SiSwift },
    ],
    DevOps: [
        { label: "Docker", icon: SiDocker },
        { label: "Kafka", icon: SiApachekafka },
    ],
    Tools: [
        { label: "Git", icon: SiGit },
        { label: "Gradle", icon: SiGradle },
    ],
};

export default function Skills() {
    const categories = Object.keys(skillGroups);

    return (
        <FadeInSection>
            <GlassCard>
                <h2 className="text-3xl font-bold mb-8 text-center">Навыки</h2>

                {/* Сетка категорий */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <h3 className="text-xl font-semibold">{cat}</h3>
                            <ul className="grid grid-cols-2 gap-4 w-full justify-items-center">
                                {skillGroups[cat as keyof typeof skillGroups].map(
                                    ({ label, icon }, i) => (
                                        <li key={i}>
                                            <SkillBadge label={label} icon={icon} />
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </FadeInSection>
    );
}
