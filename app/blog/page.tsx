import Link from "next/link";
import GlassCard from "../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";

const posts = [
    { slug: "first-post", title: "Мой первый пост", excerpt: "Краткое описание статьи..." },
];

export default function Blog() {
    return (
        <div className="flex flex-col gap-6">
            <FadeInSection>
                <h2 className="text-3xl font-bold mb-6">Блог</h2>
            </FadeInSection>

            {posts.map((post) => (
                <FadeInSection key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <GlassCard>
                            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                        </GlassCard>
                    </Link>
                </FadeInSection>
            ))}
        </div>
    );
}
