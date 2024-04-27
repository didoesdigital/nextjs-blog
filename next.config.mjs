import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeHighlight, { aliases: { markdown: "mdx" } }],
    ],
  },
});

export default withMDX(nextConfig);
