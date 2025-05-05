/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Désactiver complètement les indicateurs de développement
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig