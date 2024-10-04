import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WinClientContextProvider } from "@/context/wixContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ShopNifty - Best Online Store in Bangladesh for Unique Products',
  description: 'ShopNifty offers a curated collection of stylish and innovative products across fashion, electronics, home goods, and more. Discover the best deals tailored for shoppers in Bangladesh.',
  keywords: 'ShopNifty, unique products Bangladesh, online shopping BD, fashion deals BD, electronics BD, home decor BD, exclusive deals Bangladesh, best online store BD',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ShopNifty - Best Online Store in Bangladesh',
    description: 'Explore ShopNifty for a handpicked collection of trendy and high-quality products. Get exclusive deals on fashion, electronics, and home essentials, perfect for shoppers in Bangladesh.',
    url: 'https://shopnifty.vercel.app',
    type: 'website',
    locale: 'en_BD',
    images: [
      {
        url: 'https://shopnifty.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShopNifty - Trendy and Unique Products for Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopNifty - Best Online Store in Bangladesh',
    description: 'Find exclusive deals on a wide range of trendy and unique products for Bangladeshi shoppers. From fashion to home essentials, ShopNifty has it all.',
    images: ['https://shopnifty.vercel.app/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shopnifty.vercel.app',
    languages: {
      'en-BD': 'https://shopnifty.vercel.app/bd',
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
      <head>
        <meta name="google-site-verification" content="6GmT2Do1lN7VtwEFDc82A70PsvPJHHw07NtB75FFIew" />
      </head>
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
