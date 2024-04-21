import dynamic from "next/dynamic";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import markdownStyles from "@/app/blog/_components/markdown/markdown.module.css";
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
    <div
      className={`prose lg:prose-xl container mx-auto p-4 ${markdownStyles["markdown"]}`}
    >
      <h1 className="my-4 text-center text-teal-800">{title}</h1>
      <BlogMarkdown />
    </div>
  );
}
