import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Sun Rays Foundation | Empowering Communities",
  description: "Sun Rays Foundation aims to bring sustainable development and provide educational resources to underprivileged communities in South Sudan.",
  keywords: "Sun Rays Foundation, nonprofit, charity, South Sudan, education, sustainable development",
  // Open Graph / Facebook
  openGraph: {
    title: "Sun Rays Foundation",
    description: "Sun Rays Foundation aims to bring sustainable development and provide educational resources to underprivileged communities in South Sudan.",
    type: "website",
    locale: "en_US",
    url: "https://www.sunraysfoundation.org",
    siteName: "Sun Rays Foundation",
    images: [
      {
        url: "https://www.sunraysfoundation.org/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: 'Sun Rays Foundation logo'
      }
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Sun Rays Foundation",
    description: "Sun Rays Foundation aims to bring sustainable development and provide educational resources to underprivileged communities in South Sudan.",
    // images: "/logo.svg",
    site: "@sunraysfoundation",
  },
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="canonical" href="https://www.sunraysfoundation.org" />
      </head>
      <body className={workSans.variable}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

export default RootLayout;

