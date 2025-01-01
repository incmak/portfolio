import './globals.css';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mueen Ahmed - Full Stack Developer',
  description:
    'Portfolio of Mueen Ahmed, a Full Stack Developer with expertise in JavaScript, React, and Node.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
