import type { MDXComponents } from 'mdx/types';
import Title from '@src/app/article/_components/title/title';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title>{children}</Title>,
    ...components,
  };
}
