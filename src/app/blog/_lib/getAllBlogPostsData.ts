import { readdir } from "fs/promises";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import type { BlogPostData } from "@/app/blog/_lib/getBlogPostData";

export async function getAllBlogPostsData(): Promise<BlogPostData[]> {
  try {
    const dirents = await readdir("./src/blog/", {
      withFileTypes: true,
    });

    const slugs = dirents
      .filter((dirent) => !dirent.isDirectory() && dirent.name.endsWith(".mdx"))
      .map((dirent) => dirent.name.substring(0, dirent.name.lastIndexOf(".")));

    const result = await Promise.all(
      slugs.map((slug) => {
        return getBlogPostMetadata(slug);
      }),
    );

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
