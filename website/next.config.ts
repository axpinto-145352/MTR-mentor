import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
