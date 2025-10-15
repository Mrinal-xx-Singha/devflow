import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Configure image domains
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com",
        port:"",
      }
    ]
  }
};

export default nextConfig;
