<<<<<<< HEAD
=======
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suporte Tech 30 Dias',
  description: 'Plataforma gamificada de aprendizado para transição de carreira em Suporte Técnico.',
};

>>>>>>> 48df024809264e9e52da0955e393e32a79b2fca1
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
<<<<<<< HEAD
      <body>{children}</body>
    </html>
  );
}
=======
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
>>>>>>> 48df024809264e9e52da0955e393e32a79b2fca1
