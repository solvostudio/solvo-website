import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // www serviva contenuto proprio invece di rimandare all'apex: contenuto
  // duplicato per i motori e anteprime social inaffidabili sul secondo host.
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.solvo.studio" }],
      destination: "https://solvo.studio/:path*",
      permanent: true,
    },
  ],
};

export default nextConfig;
