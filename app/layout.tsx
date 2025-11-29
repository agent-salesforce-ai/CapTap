import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CapTap - Fast Business Funding | Merchant Cash Advance",
  description: "Get up to $500,000 in working capital within 24 hours. Fast approval, flexible terms, no collateral required. CapTap provides merchant cash advances for small businesses.",
  keywords: "merchant cash advance, business funding, small business loans, fast business capital, MCA, working capital",
  openGraph: {
    title: "CapTap - Fast Business Funding",
    description: "Get up to $500,000 in working capital within 24 hours.",
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
