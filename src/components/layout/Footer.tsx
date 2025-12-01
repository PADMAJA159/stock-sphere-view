import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  markets: [
    { label: 'Live Market', href: '/markets' },
    { label: 'Stock Screener', href: '/markets/screener' },
    { label: 'Market Movers', href: '/markets/movers' },
    { label: 'IPO', href: '/ipo' },
    { label: 'F&O', href: '/markets/fno' },
  ],
  learn: [
    { label: 'Stock Market Basics', href: '/learn/basics' },
    { label: 'Technical Analysis', href: '/learn/technical' },
    { label: 'Mutual Funds Guide', href: '/learn/mutual-funds' },
    { label: 'IPO Guide', href: '/learn/ipo' },
    { label: 'Tax Planning', href: '/learn/tax' },
  ],
  tools: [
    { label: 'SIP Calculator', href: '/tools/sip-calculator' },
    { label: 'EMI Calculator', href: '/tools/emi-calculator' },
    { label: 'Tax Calculator', href: '/tools/tax-calculator' },
    { label: 'Portfolio Tracker', href: '/portfolio' },
    { label: 'Watchlist', href: '/watchlist' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Advertise', href: '/advertise' },
    { label: 'Premium', href: '/premium' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">MarketPulse</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted companion for financial markets, news, and investment insights.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Markets</h4>
            <ul className="space-y-2">
              {footerLinks.markets.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MarketPulse. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
