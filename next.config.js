module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/components/choose_storage',
      },
    ]
  },
  images: {
    domains: ['tiddlywiki.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tiddlywiki.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
