import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

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
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
