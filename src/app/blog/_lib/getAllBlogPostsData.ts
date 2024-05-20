import { readdir } from "fs/promises";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import type { BlogPostData } from "@/app/blog/_lib/getBlogPostData";
import type { Dirent } from "fs";

const isMDXFile = (dirent: Dirent) =>
  !dirent.isDirectory() && dirent.name.endsWith(".mdx");

const getSlugFromFilename = (dirent: Dirent) =>
  dirent.name.substring(0, dirent.name.lastIndexOf("."));

export async function getAllBlogPostsData(): Promise<BlogPostData[]> {
  try {
    const dirents = await readdir("./src/blog/", {
      withFileTypes: true,
    });

    const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename);

    const result = await Promise.all(
      slugs.map((slug) => {
        return getBlogPostMetadata(slug);
      }),
    );

    result.sort(
      (a, b) =>
        +new Date(b.customMetadata.publishDate) -
        +new Date(a.customMetadata.publishDate),
    );

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
