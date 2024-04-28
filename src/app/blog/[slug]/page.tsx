import dynamic from "next/dynamic";
import { getBlogPostMetadata } from "@/app/blog/_lib/getBlogPostData";
import markdownStyles from "@/app/blog/_components/markdown/markdown.module.css";
import type { Metadata } from "next/types";
import { getAllBlogPostsData } from "@/app/blog/_lib/getAllBlogPostsData";
// import 'highlight.js/styles/stackoverflow-dark.css';
import "@/app/blog/_components/markdown/highlightjs-example.css";

type BlogPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPostsData();
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post.slug,
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
      className={`container prose mx-auto p-4 lg:prose-xl dark:prose-invert ${markdownStyles["markdown"]}`}
    >
      <h1 className="my-4 text-center">{title}</h1>
      <BlogMarkdown />
    </div>
  );
}
