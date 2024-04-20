import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="text-lg font-semibold">{children}</h2>,
    ...components,
  };
}
