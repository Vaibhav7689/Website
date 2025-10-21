/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Website'; // Your repository name

const nextConfig = {
  output: 'export',
  
  // Set base path for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // Image optimization must be disabled for static export
  images: {
    unoptimized: true,
  },
  
  // Optional: Add trailing slashes
  trailingSlash: true,
}

module.exports = nextConfig
