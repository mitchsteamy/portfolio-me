/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'www.123rf.com'
    ]
  }
}
