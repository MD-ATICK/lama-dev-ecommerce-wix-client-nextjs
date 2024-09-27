import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WinClientContextProvider } from "@/context/wixContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollBar`}>
        <WinClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WinClientContextProvider>
      </body>
    </html>
  );
}
