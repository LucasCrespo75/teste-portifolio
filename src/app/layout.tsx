// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Freitas Portfólio',
  description: 'Site institucional',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
