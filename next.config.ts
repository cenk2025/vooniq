import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The newsletter admin page and API must stay out of search results.
  async headers() {
    return [
      {
        source: "/uutiskirje-admin.html",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      { source: "/api/newsletter/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
  // One canonical host: send www.voon.fi to voon.fi.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.voon.fi" }],
        destination: "https://voon.fi/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
