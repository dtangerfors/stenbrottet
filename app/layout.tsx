import type { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import localFont from 'next/font/local';
import { getDeviceType } from './lib/utils';
import { Providers } from './providers';
import '@/app/ui/global.css';

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Stenbrottsvägen 3',
  appleWebApp: { statusBarStyle: 'black-translucent' },
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "icons/apple-touch-icon.png" },
    { rel: "icon", url: "icons/icon-144x144.png" },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

export default function RootLayout({ children }: { children: JSX.Element[] }) {
  const { isMobile } = getDeviceType();

  return (
    <html lang="sv">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mbx5ori.css" />
      </head>
      <body
        className={clsx(
          'relative flex min-h-screen flex-col bg-offwhite font-sans dark:bg-black',
          satoshi.variable,
          isMobile && 'app-mobile',
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
