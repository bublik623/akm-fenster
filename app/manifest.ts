import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "akm Fenster",
    short_name: "akm Fenster",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f2ec",
    theme_color: "#2b2f33",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
