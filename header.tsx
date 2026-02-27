import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-space-blue/80 backdrop-blur-xl border-b border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-neon-teal/20 flex items-center justify-center group-hover:bg-neon-teal/30 transition-all duration-300">
              <Shield className="w-6 h-6 text-neon-teal" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground hidden sm:block">
              Email Threat Protector
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm transition-all duration-300 relative ${
                  isActive(link.path)
                    ? 'text-neon-teal'
                    : 'text-foreground/70 hover:text-neon-teal'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-teal"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-neon-teal text-primary-foreground hover:bg-neon-teal/90 px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-glassmorphism-overlay border border-neon-teal/20 flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-neon-teal" />
            ) : (
              <Menu className="w-5 h-5 text-neon-teal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-space-blue/95 backdrop-blur-xl border-t border-foreground/10"
          >
            <nav className="px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-paragraph text-base py-2 transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-neon-teal'
                      : 'text-foreground/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-neon-teal text-primary-foreground hover:bg-neon-teal/90 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
