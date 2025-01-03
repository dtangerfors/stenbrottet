import type { Metadata, Viewport } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
// import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import clsx from "clsx";
import { getDeviceType } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Stenbrottsvägen 3',
  appleWebApp: { statusBarStyle: 'black-translucent', capable: true },
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "icon", url: "/icons/icon-144x144.png" },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMobile } = getDeviceType();
  return (
    <html lang="sv" className="bg-background">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mbx5ori.css" />
      </head>
      <UserProvider>
        <body
          className={clsx(`${GeistSans.className} antialiased dark:dark`, isMobile && 'app-mobile',)}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
