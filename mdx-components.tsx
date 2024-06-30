import type { MDXComponents } from 'mdx/types';
import Blockquote from '@src/app/article/_components/blockquote/Blockquote';
import Code from '@src/app/article/_components/code/Code';
import H2 from '@src/app/article/_components/h2/H2';
import H3 from '@src/app/article/_components/h3/H3';
import H4 from '@src/app/article/_components/h4/H4';
import H5 from '@src/app/article/_components/h5/H5';
import Image from '@src/app/article/_components/image/Image';
import OrderedList from '@src/app/article/_components/ordered-list/OrderedList';
import Paragraph from '@src/app/article/_components/paragraph/Paragraph';
import PreformattedText from '@src/app/article/_components/preformatted-text/PreformattedText';
import Title from '@src/app/article/_components/title/Title';
import UnorderedList from '@src/app/article/_components/unordered-list/UnorderedList';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    h5: ({ children }) => <H5>{children}</H5>,
    ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    ol: ({ children }) => <OrderedList>{children}</OrderedList>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    code: ({ children }) => <Code>{children}</Code>,
    pre: ({ children, className }) => (
      <PreformattedText className={className}>{children}</PreformattedText>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    img: ({ src, alt }) => <Image alt={alt} src={src} />,
    ...components,
  };
}
