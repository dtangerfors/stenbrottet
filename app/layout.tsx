import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/app/ui/global.css';
import { MobileNav } from './ui/dashboard/mobile-nav';
import { getDeviceType } from './lib/utils';
import clsx from 'clsx';

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
  title: 'Stenbrottsvägen',
  appleWebApp: { statusBarStyle: 'black-translucent' },
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
        className={clsx("relative flex flex-col min-h-screen bg-gray-50 font-sans dark:bg-black", satoshi.variable, isMobile && "app-mobile")}
      >
        
          {children}
        {isMobile && (
          <div className="fixed bottom-0 left-0 z-20 w-full pb-safeBottom rounded-t-4xl bg-white px-6 pb-safe-bottom dark:bg-gray-950 shadow-lg">
            <MobileNav />
          </div>
        )}
      </body>
    </html>
  );
}
