import Figure from "@/app/blog/_components/Figure";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Figure: (props) => <Figure {...props} />,
    ...components,
  };
}
