import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WalletConnectionProvider from "./context/WalletConnectionProvider";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "iSwap",
  description: "Swap your tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <WalletConnectionProvider>
              <Header />
              {children}
        </WalletConnectionProvider>
      </body>
    </html>
  );
}
