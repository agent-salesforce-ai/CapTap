import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclosures", href: "#" },
  ],
  contact: {
    phone: "(888) 555-CASH",
    email: "info@captap.com",
    address: "123 Finance Street, Suite 100, New York, NY 10001",
  },
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">CapTap</span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Fast, flexible business funding solutions for small and medium-sized businesses. 
              Get the capital you need to grow.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{footerLinks.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{footerLinks.contact.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{footerLinks.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-400 mt-12 pt-8">
          <p className="text-xs text-primary-300 leading-relaxed mb-4">
            <strong>Important Disclosure:</strong> A merchant cash advance is not a loan. It is a purchase of a portion of your future sales at a discount. The amount you receive is based on your business&apos;s revenue and creditworthiness. Repayment is made through a percentage of daily credit card sales or fixed daily/weekly payments. The factor rate and total cost of capital vary based on your business profile. Please review all terms and conditions carefully before accepting any funding offer.
          </p>
          <p className="text-xs text-primary-300 leading-relaxed">
            CapTap is a fictitious company created for demonstration purposes only. This website does not represent a real financial services provider. Any resemblance to actual companies, products, or services is purely coincidental.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-400 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-200">
            © {new Date().getFullYear()} CapTap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
