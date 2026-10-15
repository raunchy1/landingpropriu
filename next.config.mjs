import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/bozze/:slug', destination: '/bozze/:slug/index.html' },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/bozza-gratuita',
        destination: '/sardegna/bozza-gratuita',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
