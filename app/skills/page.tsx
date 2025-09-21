"use client";
import { FaJava, FaDocker, FaGitAlt, FaAndroid } from "react-icons/fa";
import { SiSpringboot, SiKotlin, SiPostgresql, SiMongodb, SiApachekafka, SiRabbitmq, SiGraphql, SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";
import GlassCard from "../../components/GlassCard";

const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "RabbitMQ", icon: <SiRabbitmq /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Android", icon: <FaAndroid /> },
];

export default function Skills() {
    return (
        <GlassCard>
            <h2 className="text-3xl font-bold mb-6">Навыки</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((s) => (
                    <motion.div
                        key={s.name}
                        whileHover={{ y: -4, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/15 dark:bg-white/10 border border-white/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                    >
                        <div className="text-4xl">{s.icon}</div>
                        <div className="text-sm font-semibold">{s.name}</div>
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    );
}
