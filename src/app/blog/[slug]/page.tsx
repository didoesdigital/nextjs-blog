import dynamic from "next/dynamic";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import type { Metadata } from "next/types";

type BlogPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const blogPosts = ["first-mdx-post"];
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post,
  }));

  return blogStaticParams;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { metadata } = await getBlogPostMetadata(params.slug);

  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${params.slug}`);
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { metadata } = await getBlogPostMetadata(params.slug);
  const title = `${metadata.title ?? ""}`;

  const BlogMarkdown = dynamic(() => import("@/blog/" + params.slug + ".mdx"));

  return (
    <div className="container mx-auto p-4">
      <h2 className="my-4 text-center text-xl font-bold">{title}</h2>
      <BlogMarkdown />
    </div>
  );
}
