import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

import { Providers } from "./components/Providers";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";

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
      <body className={font.className}>
        <Providers>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal/>
          <Navbar />
        </Providers>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
