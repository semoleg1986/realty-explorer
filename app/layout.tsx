import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./hooks/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import { Providers } from "./components/Providers";


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
        {/* <ClientOnly> */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        {/* </ClientOnly> */}
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
