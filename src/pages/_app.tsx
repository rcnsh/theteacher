import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { Inter } from 'next/font/google';

const interFont = Inter({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-sans',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <main className={interFont.className}>
      <Component {...pageProps} />
      </main>);
};

export default MyApp;
