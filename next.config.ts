import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
