import { ReactNode } from "react";

export default function GlassCard({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] p-6 transition hover:bg-white/25 dark:hover:bg-black/25">
            {children}
        </div>
    );
}
