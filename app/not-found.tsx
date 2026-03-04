'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-lg w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="terminal-window p-8 space-y-6"
        >
          <div className="terminal-window-bar -mx-8 -mt-8 mb-8 px-4 py-3">
            <div className="terminal-dot bg-red-500/70" />
            <div className="terminal-dot bg-yellow-500/70" />
            <div className="terminal-dot bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-terminal-muted">error.log</span>
          </div>

          <div className="font-mono space-y-2 text-left">
            <div className="text-red-400 text-xs">
              [ERROR] 404 — Page not found
            </div>
            <div className="text-terminal-muted text-xs">
              Timestamp: {new Date().toISOString()}
            </div>
            <div className="text-terminal-muted text-xs">
              Stack trace:
            </div>
            <div className="pl-4 space-y-1 text-xs">
              <div className="text-terminal-muted">at Router.resolve (next/router)</div>
              <div className="text-terminal-muted">at Navigation.navigate (/app)</div>
              <div className="text-red-400">→ Route not found: {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}</div>
            </div>
          </div>

          <div className="border-t border-terminal-border pt-6 space-y-4">
            <div className="font-display text-6xl font-bold text-terminal-green text-glow">
              404
            </div>
            <p className="font-mono text-sm text-terminal-muted">
              The requested resource was not found on this server.
            </p>
          </div>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-glow w-full flex items-center justify-center gap-2 py-3"
            >
              <span className="flex items-center gap-2 font-mono text-sm">
                <ArrowLeft size={13} />
                cd ~/home
              </span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs text-terminal-muted"
        >
          <span className="text-terminal-green">$</span> suggest: check the URL or navigate home
        </motion.div>
      </div>
    </div>
  )
}
