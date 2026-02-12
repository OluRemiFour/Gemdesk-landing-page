import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GemDesk | Professional Remote Desktop for Developers",
  description: "Secure, high-performance remote desktop tool designed for collaboration and support — without the bloat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
