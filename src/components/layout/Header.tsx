import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, Menu, X, Sun, Moon, ChevronDown, TrendingUp, Newspaper, PieChart, Building2, Coins, BarChart3, Calculator, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'Markets',
    icon: TrendingUp,
    submenu: [
      { label: 'Live Market', href: '/markets' },
      { label: 'Indices', href: '/markets/indices' },
      { label: 'Stocks', href: '/markets/stocks' },
      { label: 'F&O', href: '/markets/fno' },
      { label: 'Commodities', href: '/markets/commodities' },
      { label: 'Currency', href: '/markets/currency' },
    ],
  },
  {
    label: 'News',
    icon: Newspaper,
    submenu: [
      { label: 'Latest News', href: '/news' },
      { label: 'Business', href: '/news/business' },
      { label: 'Economy', href: '/news/economy' },
      { label: 'Politics', href: '/news/politics' },
      { label: 'International', href: '/news/international' },
    ],
  },
  {
    label: 'Mutual Funds',
    icon: PieChart,
    submenu: [
      { label: 'Top Funds', href: '/mutual-funds' },
      { label: 'SIP Calculator', href: '/tools/sip-calculator' },
      { label: 'Compare Funds', href: '/mutual-funds/compare' },
      { label: 'NFO', href: '/mutual-funds/nfo' },
    ],
  },
  {
    label: 'IPO',
    icon: Building2,
    submenu: [
      { label: 'Upcoming IPOs', href: '/ipo' },
      { label: 'Open IPOs', href: '/ipo/open' },
      { label: 'IPO Calendar', href: '/ipo/calendar' },
      { label: 'Grey Market', href: '/ipo/grey-market' },
    ],
  },
  {
    label: 'Crypto',
    icon: Coins,
    submenu: [
      { label: 'Crypto Prices', href: '/crypto' },
      { label: 'Bitcoin', href: '/crypto/bitcoin' },
      { label: 'Ethereum', href: '/crypto/ethereum' },
      { label: 'News', href: '/crypto/news' },
    ],
  },
  {
    label: 'Tools',
    icon: Calculator,
    submenu: [
      { label: 'SIP Calculator', href: '/tools/sip-calculator' },
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Tax Calculator', href: '/tools/tax-calculator' },
      { label: 'Portfolio Analyzer', href: '/tools/portfolio' },
    ],
  },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-8 text-xs">
          <div className="flex items-center gap-4">
            <span>NSE: Open</span>
            <span>BSE: Open</span>
            <span className="hidden sm:inline">Last Updated: {new Date().toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/premium" className="flex items-center gap-1 hover:underline">
              <Crown className="h-3 w-3" />
              Go Premium
            </Link>
            <select className="bg-transparent text-primary-foreground text-xs border-none outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="gu">ગુજરાતી</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">MarketPulse</h1>
              <p className="text-[10px] text-muted-foreground -mt-1">Your Financial Companion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-accent">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown */}
                <div className={cn(
                  "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                )}>
                  <div className="bg-card rounded-lg border border-border shadow-strong min-w-[200px] py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-stock-down rounded-full" />
            </Button>

            {/* User */}
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-foreground rounded-md hover:bg-accent"
                  onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    activeSubmenu === item.label && "rotate-180"
                  )} />
                </button>
                {activeSubmenu === item.label && (
                  <div className="pl-9 py-2 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        to={subitem.href}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Button className="w-full" variant="outline">
                <User className="h-4 w-4 mr-2" />
                Login / Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
