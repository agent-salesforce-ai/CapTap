import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/contact', label: 'Contact' },
    ],
    resources: [
      { href: '/faq', label: 'FAQ' },
      { href: '/apply', label: 'Apply Now' },
    ],
    legal: [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Disclosures' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-2xl text-white">CapTap</span>
            </Link>
            <p className="text-white/70 mb-6">
              Empowering businesses with fast, flexible funding solutions. Get the capital you need to grow.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-all duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-sm font-medium capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-white/50 text-sm leading-relaxed">
            <strong>Disclaimer:</strong> CapTap provides merchant cash advances, which are not loans. A merchant cash advance is a purchase of future receivables at a discount. The funds provided are not a loan and should not be considered a loan. CapTap is not a lender and does not make credit decisions. Approval and terms are based on review of business performance. All applications are subject to underwriting approval. Rates and terms may vary based on qualifications and business performance.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-primary-950/50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} CapTap. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Version B - A/B Testing Variant
          </p>
        </div>
      </div>
    </footer>
  );
}
