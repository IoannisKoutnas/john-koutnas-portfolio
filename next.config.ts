/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- ΠΡΟΣΘΕΣΕ ΑΥΤΗ ΤΗ ΓΡΑΜΜΗ
  images: {
    unoptimized: true, // <--- ΠΡΟΣΘΕΣΕ ΚΙ ΑΥΤΟ (σημαντικό για Netlify Free/Static)
  },
};

export default nextConfig;