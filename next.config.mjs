/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH || '',
  assetPrefix: process.env.BASEPATH || '',
  output: 'standalone',
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store'
        }
      ]
    }
  ],
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/reports/overview',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
