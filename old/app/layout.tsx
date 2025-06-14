import type { Metadata } from "next";
import "./globals.css";
import Header from "@/libs/components/Header";

export const metadata: Metadata = {
  title: "Mikey Villavicencio",
  description: "the portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
