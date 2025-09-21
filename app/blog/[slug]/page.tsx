import { getPostBySlug } from "@/lib/posts";
import GlassCard from "../../../components/GlassCard";
import FadeInSection from "@/components/FadeInSection";

interface Props {
    params: Promise<{ slug: string }>; // 👈 теперь params асинхронный
}

export default async function Post({ params }: Props) {
    const { slug } = await params;         // 👈 ждем params
    const post = await getPostBySlug(slug);

    return (
        <FadeInSection>
            <GlassCard>
                <article className="prose lg:prose-xl dark:prose-invert max-w-none">
                    <h1 className="mb-2">{post.title}</h1>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("ru-RU", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </article>
            </GlassCard>
        </FadeInSection>
    );
}
