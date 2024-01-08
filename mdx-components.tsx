import type { MDXComponents } from 'mdx/types';
import H2 from '@src/app/article/_components/h2/H2';
import H3 from '@src/app/article/_components/h3/H3';
import H4 from '@src/app/article/_components/h4/H4';
import H5 from '@src/app/article/_components/h5/H5';
import Title from '@src/app/article/_components/title/Title';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    h5: ({ children }) => <H5>{children}</H5>,
    ...components,
  };
}
