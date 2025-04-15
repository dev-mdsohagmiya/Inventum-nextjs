/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "ca.slack-edge.com",
      "www.linewize.io",
    ],
  },
};

export default nextConfig;
