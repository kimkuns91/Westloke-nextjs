import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SessionProvider from '@/components/SessionProvider';
import { cn } from '@/utils/style';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Wesloke',
  description: 'Wesloke',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={cn('scrollbar flex lg:text-base', poppins.className)}>
        <SessionProvider session={session}>
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex flex-1 flex-col">
              {children}
              <Footer />
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
