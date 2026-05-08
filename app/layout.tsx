
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anirudha Saralaya — Software Engineer & Designer',
  description: 'Full-stack engineer crafting high-performance, beautiful web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
