import React from "react";

export default function GlassCard({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
        relative
        rounded-2xl
        bg-white/20 dark:bg-black/20
        backdrop-blur-2xl
        border border-white/40 dark:border-white/10
        shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_30px_rgba(0,0,0,0.1)]
        p-6 md:p-8
        transition-transform duration-300
        hover:scale-[1.01]
        overflow-hidden
      "
        >
            <div className="relative z-10">{children}</div>
        </div>
    );
}
