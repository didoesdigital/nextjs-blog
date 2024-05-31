import { getAllBlogPostsData } from "@/app/blog/_lib/getAllBlogPostsData";
import {
  AUTHOR_NAME,
  BLOG_RSS_FEED_DESCRIPTION,
  BLOG_RSS_FEED_LINK,
  BLOG_RSS_FEED_TITLE,
  ORIGIN,
} from "@/app/lib/constants/site";
import { Feed } from "feed";

const feed = new Feed({
  title: BLOG_RSS_FEED_TITLE,
  description: BLOG_RSS_FEED_DESCRIPTION,
  id: `${ORIGIN}/blog`,
  link: BLOG_RSS_FEED_LINK,
  language: "en", // optional, used only in RSS 2.0, possible values: https://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  copyright: `All rights reserved 2024, ${AUTHOR_NAME}`,
});

export async function GET() {
  const posts = await getAllBlogPostsData();

  posts.forEach((post) => {
    feed.addItem({
      title: `${post.metadata.title ?? ""}`,
      link: `${ORIGIN}/blog/${post.slug}`,
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
