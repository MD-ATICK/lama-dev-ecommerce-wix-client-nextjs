import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WinClientContextProvider } from "@/context/wixContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ShopNifty by Atick - Best Online Store in Bangladesh for Unique Products',
  description: 'ShopNifty by Atick offers a curated collection of stylish and innovative products across fashion, electronics, home goods, and more. Discover the best deals tailored for shoppers in Bangladesh.',
  keywords: 'ShopNifty by Atick, unique products Bangladesh, online shopping BD, fashion deals BD, electronics BD, home decor BD, exclusive deals Bangladesh, best online store BD',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ShopNifty by Atick - Best Online Store in Bangladesh',
    description: 'Explore ShopNifty by Atick for a handpicked collection of trendy and high-quality products. Get exclusive deals on fashion, electronics, and home essentials, perfect for shoppers in Bangladesh.',
    url: 'https://shopNiftybyatick.vercel.app',
    type: 'website',
    locale: 'en_BD',
    images: [
      {
        url: 'https://shopNiftybyatick.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShopNifty by Atick - Trendy and Unique Products for Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopNifty by Atick - Best Online Store in Bangladesh',
    description: 'Find exclusive deals on a wide range of trendy and unique products for Bangladeshi shoppers. From fashion to home essentials, ShopNifty by Atick has it all.',
    images: ['https://shopNiftybyatick.vercel.app/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shopNiftybyatick.vercel.app',
    languages: {
      'en-BD': 'https://shopNiftybyatick.vercel.app/bd',
    },
  }
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
