/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Matnlarda o'zbekcha apostrof (o'yin, to'g'ri) ko'p — ESLint'ning no-unescaped-entities
  // qoidasi build'ni to'xtatmasin. Lint'ni alohida `npm run lint` bilan yuritamiz.
  eslint: { ignoreDuringBuilds: true },
  // GitHub Releases'dagi yuklab olish havolalariga ruxsat (agar rasm sifatida kerak bo'lsa)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "objects.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
