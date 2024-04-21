import Link from "next/link";
import { getAllBlogPostsData } from "@/app/blog/_lib/getAllBlogPostsData";

export default async function Blogs() {
  const blogs = await getAllBlogPostsData();

  if (blogs.length === 0) {
    return (
      <div className="prose prose-xl container mx-auto px-4">
        <h1 className="my-4 text-center text-teal-800">Blog</h1>
        <p>There are no posts yet…</p>
      </div>
    );
  }

  return (
    <div className="prose prose-xl container mx-auto px-4">
      <h1 className="my-4 text-center text-teal-800">Blog</h1>
      <p>Here are some recent posts.</p>
      <ul>
        {blogs.map(({ slug, metadata: { title } }) => (
          <li key={slug}>
            <p>
              <Link prefetch={false} href={`/blog/${slug}`}>
                {`${title}`}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
