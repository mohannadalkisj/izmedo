import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import type React from 'react';

const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'آي زد ميديا - حلول إعلامية وإعلانية مبتكرة',
  description:
    'نقدم حلولًا إعلامية وإعلانية مبتكرة لمساعدة علامتك التجارية على التميز في المشهد الرقمي.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoSansArabic.className}>{children}</body>
    </html>
  );
}
