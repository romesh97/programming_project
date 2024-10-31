/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
          port: "",
          pathname: "/v0/b/**",
        },
      ],
    },
  };

export default nextConfig;
