import { Feed } from "feed";
import { getAllBlogPostsData } from "@/app/blog/_lib/getAllBlogPostsData";

const feed = new Feed({
  title: "My Blog RSS Feed",
  description: "This is my personal feed!",
  id: "https://example.com/blog",
  link: "https://example.com/blog/index.xml",
  language: "en", // optional, used only in RSS 2.0, possible values: https://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  copyright: "All rights reserved 2024, My Name",
});

export async function GET() {
  const posts = await getAllBlogPostsData();

  posts.forEach((post) => {
    feed.addItem({
      title: `${post.metadata.title ?? ""}`,
      link: `https://example.com/blog/${post.slug}`,
      description: `${post.metadata.description ?? ""}`,
      date: new Date(post.customMetadata.publishDate),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
