import type { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const res = await fetch('https://api.github.com/next.js');
  const data = (await res.json()) as {
    message: string;
    documentation_url: string;
    status: string;
  };
  return {
    name: 'Next.js App' + data.status,
    short_name: 'Next.js App' + data.message,
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

export const revalidate = 60;