import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    runtime: process.env.RUNTIME
  }
};

export default withNextIntl(nextConfig);
