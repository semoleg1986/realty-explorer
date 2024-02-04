import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./hooks/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realty Explorer",
  description: "Task implimented Realty Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        {children}
      </body>
    </html>
  );
}
