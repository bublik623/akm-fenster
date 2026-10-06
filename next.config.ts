import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind output is small: inlining it removes the render-blocking stylesheet request.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60],
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
