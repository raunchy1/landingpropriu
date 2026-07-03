import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
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
