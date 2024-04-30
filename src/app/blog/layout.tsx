import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Blog | My site name`,
    default: `Blog`,
  },
  description: "This blog is about…",
  openGraph: {
    images: [
      {
        url: "/assets/images/site-open-graph.png", // Must be an absolute URL or use metadataBase with a relative URL
        width: 1576,
        height: 888,
        alt: "A personal blog",
      },
    ],
    locale: "en",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto px-4">{children}</main>;
}
