import type { Metadata } from 'next';
import { studio } from '@/data/studio';
import CustomCursor from '@/components/CustomCursor';
import SplashScreen from '@/components/SplashScreen';
import './globals.css';

export const metadata: Metadata = {
  title: `${studio.name} — Studio de tatouage à ${studio.address.city}`,
  description: studio.description,
  openGraph: {
    title: `${studio.name} — ${studio.tagline}`,
    description: studio.description,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${studio.name} — ${studio.tagline}`,
    description: studio.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark antialiased cursor-none">
      <body
        className="cursor-none bg-background text-foreground font-sans"
        style={{ '--gold': studio.accentColor } as React.CSSProperties}
      >
        <SplashScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
