import type { Metadata } from "next";
import { robotoMono } from "@/styles/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Andrew Martin",
  description: "Nextjs Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
