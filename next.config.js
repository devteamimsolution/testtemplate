const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// module.exports = withBundleAnalyzer({})
module.exports = nextConfig
