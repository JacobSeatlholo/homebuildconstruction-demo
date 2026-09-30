import type { NextConfig } from "next";

/**
 * Two build modes:
 *
 * 1. Sandbox / dev server (default)  ->  output: "standalone"
 * 2. GitHub Pages static export      ->  EXPORT_MODE=1 bun run build:static
 *    (set by .github/workflows/deploy-pages.yml — see README.md)
 *
 * For GitHub Pages "project sites" (https://<user>.github.io/<repo>/),
 * set NEXT_PUBLIC_BASE_PATH to "/<repo>" — the CI workflow does this
 * automatically from the repository name.
 */
const isExport = process.env.EXPORT_MODE === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: isExport ? "export" : "standalone",
  // Keep export builds in their own dir so a local `build:static`
  // never clobbers the running dev server's .next cache
  ...(isExport ? { distDir: ".next-export" } : {}),
  // basePath + assetPrefix make the static export work under
  // https://<user>.github.io/<repo>/ (empty for user/ org sites)
  ...(isExport && basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
  // next/image optimizer needs a Node server — unoptimized images
  // work everywhere, including GitHub Pages static hosting.
  images: { unoptimized: true },
  // keep the sandbox dev flow unchanged
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
