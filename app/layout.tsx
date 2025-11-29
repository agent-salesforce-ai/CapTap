import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CapTap - Fast Business Funding When You Need It",
  description: "Get up to $500,000 in business funding in as little as 24-48 hours. No collateral required, all credit types welcome. Apply now for fast, flexible merchant cash advance.",
  keywords: "merchant cash advance, business funding, small business loans, fast funding, MCA, business capital",
  openGraph: {
    title: "CapTap - Fast Business Funding When You Need It",
    description: "Get up to $500,000 in business funding in as little as 24-48 hours. No collateral required, all credit types welcome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
