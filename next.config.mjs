/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://65f48404f54db27bc021e23e.mockapi.io",
    DOMAIN_ORIGIN: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
  }
};

export default nextConfig;
