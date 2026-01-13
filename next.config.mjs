/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
  },
  // Configuração explícita para garantir que as rotas funcionem
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Desativar qualquer otimização que possa interferir com as rotas
  experimental: {
    optimizeCss: false,
    optimizePackageImports: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
