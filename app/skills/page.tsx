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
                <h2 className="text-3xl font-bold mb-6">Навыки</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-center">
                        <thead>
                        <tr>
                            {categories.map((cat, idx) => (
                                <th
                                    key={idx}
                                    className="px-4 py-3 text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700"
                                >
                                    {cat}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {categories.map((cat, idx) => (
                                <td
                                    key={idx}
                                    className="px-4 py-6 align-top border-b border-gray-200 dark:border-gray-700"
                                >
                                    <ul className="grid grid-cols-2 gap-4 justify-items-center">
                                        {skillGroups[cat as keyof typeof skillGroups].map(
                                            ({ label, icon }, i) => (
                                                <li key={i}>
                                                    <SkillBadge label={label} icon={icon} />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </FadeInSection>
    );
}
