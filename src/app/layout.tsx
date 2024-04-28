import Link from "next/link";
import { crimson, workSans, overpassMono } from "@/app/_components/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | My site name`,
    default: "My site name",
  },
  description: "My site is about…",
  authors: [{ name: "My name" }],
  openGraph: {
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${workSans.variable} ${overpassMono.variable} font-serif text-neutral-800`}
    >
      <head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#008080"
        /> */}
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        {/* <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        /> */}
      </head>
      <body>
        <header>
          <nav className="container mx-auto mt-12 flex max-w-screen-lg flex-wrap justify-between gap-y-2 px-5">
            <div className="prose prose-xl dark:prose-invert">
              <Link href="/" className="text-2xl font-semibold tracking-wide">
                My site name
              </Link>
            </div>
            <div className="prose prose-xl flex flex-wrap gap-x-4 gap-y-0 dark:prose-invert">
              <p>
                <Link className="font-sans tracking-wide" href="/blog">
                  Blog
                </Link>
              </p>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
