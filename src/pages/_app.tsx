import { type AppType } from "next/app";

import "@/styles/globals.css";

import { Inter } from "next/font/google";
import fontFamily from "tailwindcss/defaultTheme";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={interFont.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
