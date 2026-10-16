/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
  async redirects() {
    return [
      {
        // The resume PDF was removed from the site; send the old URL home
        // instead of leaving a broken link.
        source: "/MikeyVillavicencio.pdf",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
