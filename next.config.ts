import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://demo.creativeitem.com/academy/uploads/user_image/optimized/**",
      ),
    ],
  },
};

export default nextConfig;
