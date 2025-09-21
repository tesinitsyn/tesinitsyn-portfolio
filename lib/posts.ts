// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
    slug: string;
    title: string;
    date: string; // ISO-строка из frontmatter
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((f) => f.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug: fileName.replace(/\.md$/, ""),
                title: String(data.title ?? fileName),
                date: String(data.date ?? "1970-01-01"),
            } as PostMeta;
        });

    // сортируем по дате (новые сверху)
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostMeta & { contentHtml: string }> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? "1970-01-01"),
        contentHtml,
    };
}
