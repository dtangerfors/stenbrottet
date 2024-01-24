import localFont from 'next/font/local';
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

const erode = localFont({
  src: [
    {
      path: './fonts/Erode-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Erode-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-erode',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${erode.variable} ${satoshi.variable} font-sans dark:bg-black`}>{children}</body>
    </html>
  );
}
