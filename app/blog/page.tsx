"use client";
import GlassCard from "../../components/GlassCard";
import Link from "next/link";
import Image from "next/image";

const posts = [
    {
        slug: "first-post",
        title: "Как я сделал свой сайт-визитку",
        date: "2025-09-21",
        excerpt: "Привет! 👋 Это моя первая статья в блоге. Я расскажу, как собрал сайт-визитку на Next.js + TailwindCSS...",
        image: "https://placehold.co/400x250",
    },
];

export default function Blog() {
    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <GlassCard>
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* Обложка */}
                            <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden border border-white/20">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Текст */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <h2 className="text-xl font-bold">{post.title}</h2>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </Link>
            ))}
        </div>
    );
}
