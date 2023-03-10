/** @type {import('next').NextConfig} */

const nextConfig =  {
  pageExtensions: ['page.tsx', 'page.ts'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
