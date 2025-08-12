/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // build fail na ho linting issue pe
  },
  typescript: {
    ignoreBuildErrors: true, // build fail na ho type error pe
  },
};

export default nextConfig;
