import GlassCard from "../../../components/GlassCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default async function Post({ params }: { params: { slug: string } }) {
    const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);
    const html = marked(content);

    return (
        <div className="flex justify-center">
            <GlassCard>
                <article className="prose dark:prose-invert max-w-none">
                    <h1>{data.title}</h1>
                    <p className="text-sm text-gray-500">{data.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
            </GlassCard>
        </div>
    );
}
