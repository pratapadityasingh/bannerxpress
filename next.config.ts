import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary hostname to allow image loading
  },
};

export default nextConfig;