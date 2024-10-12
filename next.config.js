/** @type {import('next').NextConfig} */
const nextConfig = {
        async redirects() {
          return [
            // Basic redirect
            {
              source: '/',
              destination: '/household',
              permanent: true,
            },
          ]
        },
}

module.exports = nextConfig
