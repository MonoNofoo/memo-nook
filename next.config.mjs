import rehypePrism from '@mapbox/rehype-prism';
import createMDX from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import remarkBreaks from 'remark-breaks';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [rehypePrism],
  },
});

export default withVanillaExtract(withMDX(nextConfig));
