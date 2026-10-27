import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FEFarm - Torchlight: Infinite Farm Profit Tracker",
  description: "Live tracker for the most profitable farming strategies in Torchlight: Infinite. Prices in Flame Elementium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
