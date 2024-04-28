import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
};

export type CustomMetadata = {
  publishDate: string;
};

export type BlogPostData = {
  slug: string;
  metadata: PostMetadata;
  customMetadata: CustomMetadata;
};

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
  try {
    const file = await import("@/blog/" + slug + ".mdx");

    if (file?.metadata && file?.customMetadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      if (!file.customMetadata.publishDate) {
        throw new Error(
          `Missing required custom metadata field, publishDate, in: ${slug}`,
        );
      }

      return {
        slug,
        metadata: file.metadata,
        customMetadata: file.customMetadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
  } catch (error: any) {
    console.error(error?.message);
    return notFound();
  }
}
