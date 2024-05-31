import { getAllBlogPostsData } from "@/app/blog/_lib/getAllBlogPostsData";
import { ORIGIN } from "@/app/lib/constants/site";
import { MetadataRoute } from "next";

export async function getBlogsSitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPostsData();
  const blogPostEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${ORIGIN}/blog/${post.slug}/index.html`,
    lastModified: post.customMetadata.publishDate,
    changeFrequency: "yearly",
    priority: 0.9,
  }));

  const newestBlogDate = posts[0].customMetadata.publishDate;

  const blogIndexEntry: MetadataRoute.Sitemap[0] = {
    url: `${ORIGIN}/blog/index.html`,
    lastModified: newestBlogDate,
    changeFrequency: "weekly",
    priority: 0.5,
  };

  const result = [blogIndexEntry, ...blogPostEntries];

  return result;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsSitemap = await getBlogsSitemap();

  return [
    {
      url: `${ORIGIN}/index.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...blogsSitemap,
  ];
}
