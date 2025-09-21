"use client";

import { IconType } from "react-icons";

interface SkillBadgeProps {
    label: string;
    icon: IconType;
}

export default function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
    return (
        <div
            className="flex flex-col items-center justify-center w-28 h-28  /* 👈 фикс ширина и высота */
                 p-4 rounded-xl
                 bg-white/20 dark:bg-black/20 backdrop-blur-md
                 border border-white/30 shadow
                 transition-transform transform hover:scale-105 hover:shadow-lg
                 hover:bg-white/30 dark:hover:bg-black/30 cursor-pointer group"
        >
            <Icon className="text-4xl mb-2 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-medium text-center">{label}</span>
        </div>
    );
}
