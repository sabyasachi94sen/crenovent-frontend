/** @type {import('next').NextConfig} */
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  pageExtensions: ['jsx', 'js'], // Add any other extensions you are using
  reactStrictMode: false,

  // Add Sass/SCSS support
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'standalone'
};

export default nextConfig;