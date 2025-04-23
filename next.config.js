module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push('sanity');
    return config;
  },
};