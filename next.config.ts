import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jovial-horse-6e378a.netlify.app",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
