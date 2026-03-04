'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Terminal } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'home', prefix: '~/' },
  { href: '/about', label: 'about', prefix: './' },
  { href: '/projects', label: 'lab', prefix: './' },
  { href: '/blog', label: 'research', prefix: './' },
  { href: '/contact', label: 'contact', prefix: './' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield
                size={20}
                className="text-terminal-green group-hover:drop-shadow-[0_0_8px_#00ff9f] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-terminal-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-mono text-sm text-terminal-green">
              <span className="text-terminal-muted">root@</span>
              <span className="group-hover:text-glow transition-all">ikbal</span>
              <span className="text-terminal-muted">:~#</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 font-mono text-sm transition-all duration-200 rounded group ${
                    isActive
                      ? 'text-terminal-green'
                      : 'text-terminal-muted hover:text-terminal-green'
                  }`}
                >
                  <span className="text-terminal-green-muted opacity-60 group-hover:opacity-100 transition-opacity">
                    {link.prefix}
                  </span>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded border border-terminal-green/30 bg-terminal-green/5"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                </Link>
              )
            })}

            <div className="ml-4 h-6 w-px bg-terminal-border" />

            <a
              href="https://github.com/ikblmhndra"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-terminal-green border border-terminal-green/30 rounded hover:bg-terminal-green/10 hover:border-terminal-green/60 hover:shadow-glow-green-sm transition-all duration-300"
            >
              <Terminal size={12} />
              <span>github</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-terminal-green hover:bg-terminal-green/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-terminal-surface border-b border-terminal-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-3 py-2.5 font-mono text-sm rounded transition-all ${
                        isActive
                          ? 'text-terminal-green bg-terminal-green/10 border border-terminal-green/20'
                          : 'text-terminal-muted hover:text-terminal-green hover:bg-terminal-green/5'
                      }`}
                    >
                      <span className="text-terminal-green-muted text-xs">{'>'}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
