import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";
import Sidenav from "../components/sidenav/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Vision Projects - Premier Architectural and Interior Design",
  description:
    "One Vision Projects offers top-tier architectural and interior design services for residential and commercial properties. Our expert team blends form, function, and technology to craft interiors that delight the senses.",
  keywords:
    "architectural design, interior design, residential design, commercial design, creative interiors",
  openGraph: {
    title: "One Vision Projects",
    description:
      "Discover exceptional architectural and interior design services with One Vision Projects. Our skilled team transforms spaces with innovative design solutions.",
    url: "https://one-vision-projects.vercel.app/",
    images: "./p3.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex bg-black leading-relaxed text-white ${inter.className}`}
      >
        <Sidenav />

        <div className="mx-auto grow">
          <Header />
          <main className="mx-auto w-full max-w-[1000px] px-5 pb-4 pt-6 sm:px-10 lg:px-4 lg:pt-12 xl:px-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
