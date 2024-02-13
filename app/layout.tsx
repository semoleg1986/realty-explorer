import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

import { Providers } from "./components/Providers";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import Head from "next/head";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realty Explorer",
  description: "Task implimented Realty Explorer",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={font.className}>
        <ToasterProvider />
        <Providers>
          <RegisterModal />
          <LoginModal />
          <RentModal/>
          <Navbar />
        </Providers>
        <div className="pb-20 pt-28">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
