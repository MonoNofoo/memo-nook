import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createMDX from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import remarkBreaks from "remark-breaks";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkBreaks,
    ],
    rehypePlugins: [rehypePrism]
  }
})

export default withVanillaExtract(withMDX(nextConfig));
