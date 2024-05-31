## Introduction

This is a template for a [Next.js](https://nextjs.org/) static site with a blog. It is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The template repo is a companion for the book, <cite>Build a Blog Using Next.js</cite> by [Diana MacDonald](https://didoesdigital.com), coming soon.

## Features

- Next.js v14
- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- A static export
- TypeScript v5
- Tailwind CSS v3
- MDX v3 via `@next/mdx` v14
- RSS via `feed`
- Sitemap
- Google Analytics
- Dark mode
- Syntax highlighting
- Linked blog headings
- Eslint
- Prettier
- Tailwind Prettier plugin
- 404 page, error page, `robots.txt`, and more

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

To tailor this project to your site, here's what you should do:

- Change the "https://example.com" origin in `constants.ts` and `robots.txt` to match your website's domain.
- Change all the other constants in `constants.ts` to match your website.
- Change the filename and contents of the first blog post: `src/blog/first-mdx-post.mdx`.
- Add your own favicon images to `public/` e.g. using [RealFaviconGenerator](https://realfavicongenerator.net/) and uncomment the favicon links in `src/app/layout.tsx`.
- Change `G-TODO` to your own Google Analytics ID in `src/app/layout.tsx` and uncomment the `GoogleAnalytics` component and import.

You might also like to change:

- The colors in `globals.css` and `tailwind.config.ts`. You could use the Tailwind CSS Color Generator, [UIColors](https://uicolors.app/create).
- The fonts in `src/app/_components/fonts/fonts.ts` and `tailwind.config.ts`. You could browse [Google Fonts](https://fonts.google.com/?vfonly=true).
- The syntax highlighting theme in `src/app/blog/[slug]/page.tsx` e.g. remove the example theme and uncomment `// import 'highlight.js/styles/stackoverflow-dark.css';`.
- The global styling in `globals.css` e.g. remove the wavy link text-decoration.
- The Markdown styling in `src/app/blog/_components/markdown/markdown.module.css` e.g. adjust the letter spacing (tracking) for the first line of blog posts.
- The site default Open Graph image in `/assets/images/site-open-graph.png`.
- This README.

### Lint and format

Lint and format your code:

```sh
npm run lint --fix && npm run format
```

### Build a static export

Build the site and review it locally:

```sh
npm run build && npx serve@latest out
```

### Deployment

You can [deploy a static Next.js site](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying) on a variety of platforms. You could use [Vercel](https://vercel.com/) from the creators of Next.js, [Netlify](https://www.netlify.com/), [Cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [GitHub Pages](https://pages.github.com/), [AWS S3](https://aws.amazon.com/s3/), [Google Cloud Storage](https://cloud.google.com/storage), [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/), or others.

## License

Licensed under the BSD Zero Clause License. See [LICENSE file](LICENSE.md) in the project root, or <https://opensource.org/licenses/0BSD> for full license information.
