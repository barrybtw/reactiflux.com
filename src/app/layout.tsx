import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { NavigationBar } from "@/components/navigation-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Reactiflux",
  description: "Reactiflux community website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(" antialiased bg-background text-white", inter.className)}
      >
        <NavigationBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
