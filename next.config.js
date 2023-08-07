/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/testnets',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
