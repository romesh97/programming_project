/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
      ignoreBuildErrors: true,
    },};

    module.exports = {
      eslint: {
        ignoreDuringBuilds: true, // Skip ESLint errors in builds
      },
    };

export default nextConfig;
