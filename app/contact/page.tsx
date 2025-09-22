import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import FadeInSection from "@/components/FadeInSection";
import { FaTelegramPlane, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

export default function Contact() {
    const EMAIL = "sitiev174@gmail.com";
    const PHONE = "+79193393089";
    const TELEGRAM = "tesinitsyn"; // только ник
    const GITHUB = "tesinitsyn";
    const LINKEDIN = "your-linkedin-slug";
    const RESUME_URL = "/resume.pdf"; // положи файл в /public/resume.pdf
    const PHOTO_URL = "/me.jpeg";      // положи фото в /public/me.jpg

    const linkClass = "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 shadow hover:scale-[1.02] transition";

    return (
        <FadeInSection>
            <GlassCard>
                <h2 className="text-3xl font-bold mb-6">Контакты</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Левая колонка — фото + резюме */}
                    <div className="md:col-span-1 flex flex-col items-center gap-4">
                        <div
                            className="
                relative w-44 h-44 md:w-52 md:h-52
                rounded-full overflow-hidden
                border-4 border-white/40
                shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                bg-white/10
              "
                        >
                            <Image
                                src={PHOTO_URL}
                                alt="Фото Тимофея Синицына"
                                fill
                                className="object-cover"
                                sizes="208px"
                                priority
                            />
                        </div>

                        <a href={RESUME_URL} download className={linkClass}>
                            <FaDownload aria-hidden />
                            <span>Скачать резюме (PDF)</span>
                        </a>
                    </div>

                    {/* Правая колонка — контакты и быстрые ссылки */}
                    <div className="md:col-span-2 grid gap-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a className={linkClass} href={`mailto:${EMAIL}`}>
                                <FaEnvelope aria-hidden />
                                <span>{EMAIL}</span>
                            </a>
                            <a className={linkClass} href={`tel:${PHONE.replace(/\s|\(|\)|-/g, "")}`}>
                                <FaPhone aria-hidden />
                                <span>{PHONE}</span>
                            </a>
                            <a className={linkClass} href={`https://t.me/${TELEGRAM}`} target="_blank" rel="noopener noreferrer">
                                <FaTelegramPlane aria-hidden />
                                <span>@{TELEGRAM}</span>
                            </a>
                            <a className={linkClass} href={`https://github.com/${GITHUB}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub aria-hidden />
                                <span>github.com/{GITHUB}</span>
                            </a>
                            <a className={linkClass} href={`https://www.linkedin.com/in/${LINKEDIN}`} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin aria-hidden />
                                <span>linkedin.com/in/{LINKEDIN}</span>
                            </a>
                        </div>

                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Открыт к предложениям и проектам. Пишите на почту или в телеграм — отвечаю оперативно.
                        </p>
                    </div>
                </div>
            </GlassCard>
        </FadeInSection>
    );
}
