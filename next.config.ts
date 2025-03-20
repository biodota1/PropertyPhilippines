import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  async rewrites() {
    return [
      {
        source: "/api/proxy",
        destination: "https://dlnk.one/e?id=bjyERE3DxNAm&type=1",
      },
    ];
  },
};

export default nextConfig;
