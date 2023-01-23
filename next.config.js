module.exports = {
  reactStrictMode: true,
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
