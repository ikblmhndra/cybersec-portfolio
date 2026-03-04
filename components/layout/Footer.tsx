import Link from 'next/link'
import { Shield, Github, Linkedin, Mail, Terminal } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-terminal-border bg-terminal-surface/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-terminal-green" />
              <span className="font-mono text-sm text-terminal-green">ikbal.mahendra</span>
            </div>
            <p className="text-terminal-muted text-xs font-mono leading-relaxed">
              # Infrastructure Security Lead<br />
              # Defensive systems architect<br />
              # Automation engineering
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-terminal-green-dim uppercase tracking-widest">
              ./navigation
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                { href: '/', label: 'home' },
                { href: '/about', label: 'about' },
                { href: '/projects', label: 'lab' },
                { href: '/blog', label: 'research' },
                { href: '/contact', label: 'contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors flex items-center gap-1"
                >
                  <span className="text-terminal-green/40">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs text-terminal-green-dim uppercase tracking-widest">
              ./connect
            </h4>
            <div className="space-y-2">
              {[
                { icon: Github, label: 'github.com/ikbalmahendra', href: 'https://github.com/ikblmhndra' },
                { icon: Linkedin, label: 'linkedin.com/in/ikbal', href: 'https://linkedin.com/in/ikbalmahendra' },
                { icon: Mail, label: 'ikbal@seclab.dev', href: 'mailto:ikbal@seclab.dev' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors group"
                >
                  <Icon size={12} className="group-hover:drop-shadow-[0_0_4px_#00ff9f] transition-all" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-terminal-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-terminal-muted">
            <span className="text-terminal-green/40">©</span> {year} Ikbal Mahendra{' '}
            <span className="text-terminal-green/40">// All rights reserved</span>
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-terminal-muted">
            <Terminal size={10} className="text-terminal-green/40" />
            <span>Built with Next.js + TypeScript</span>
            <span className="text-terminal-green animate-blink">█</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
