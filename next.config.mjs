/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Remove basePath for EC2 deployment (not needed when running on own server)
  basePath: '/Website',
  assetPrefix: '/',
  
  trailingSlash: true,
  
  images: {
    unoptimized: true
  },
  
  // Compress output
  compress: true,
}

export default nextConfig
