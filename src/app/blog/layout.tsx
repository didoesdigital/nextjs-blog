import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Blog | My site name`,
    default: `Blog`,
  },
  description: "This blog is about…",
  openGraph: {
    locale: "en",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto px-4">{children}</main>;
}
