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

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl">{params.slug}</h2>
    </div>
  );
}
