'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Lock, Terminal, GitBranch, Activity } from 'lucide-react'
import NetworkBackground from '@/components/ui/NetworkBackground'
import TerminalHero from '@/components/terminal/TerminalHero'
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal'

// Data is defined inside the client component — no icon functions ever passed as props
const stats = [
  { label: 'Systems Hardened', value: '200+', Icon: Shield },
  { label: 'Automations Built', value: '50+', Icon: Zap },
  { label: 'CVEs Mitigated', value: '1.2K+', Icon: Lock },
  { label: 'Uptime Maintained', value: '99.9%', Icon: Activity },
]

const highlights = [
  {
    Icon: Shield,
    title: 'Defensive Architecture',
    description: 'Designing layered security systems that protect critical infrastructure from advanced persistent threats.',
  },
  {
    Icon: Zap,
    title: 'Security Automation',
    description: 'Building automated pipelines for continuous security assessment, patch management, and incident response.',
  },
  {
    Icon: Lock,
    title: 'Infrastructure Hardening',
    description: 'Implementing CIS benchmarks, STIG compliance, and custom hardening frameworks across hybrid environments.',
  },
  {
    Icon: GitBranch,
    title: 'DevSecOps Integration',
    description: 'Embedding security into CI/CD pipelines with SAST, DAST, container scanning, and policy-as-code.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HomeClient() {
  return (
    <>
      <NetworkBackground />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              <motion.div variants={item} className="flex items-center gap-2">
                <div className="h-px flex-1 max-w-[40px] bg-terminal-green/40" />
                <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
                  // Infrastructure Security
                </span>
              </motion.div>

              <motion.div variants={item} className="space-y-2">
                <div
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-terminal-green leading-tight"
                  data-text="Ikbal"
                >
                  Ikbal
                </div>
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-terminal-text leading-tight">
                  Mahendra
                </div>
              </motion.div>

              <motion.div variants={item}>
                <div className="font-mono text-sm sm:text-base text-terminal-muted leading-relaxed max-w-lg border-l-2 border-terminal-green/30 pl-4">
                  <span className="text-terminal-green-dim">{'>'}</span> Infrastructure Security Lead building{' '}
                  <span className="text-terminal-green">defensive systems</span>,{' '}
                  <span className="text-terminal-green">security automation</span>, and{' '}
                  <span className="text-terminal-green">hardened infrastructure</span>{' '}
                  that scales under pressure.
                </div>
              </motion.div>

              <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
                <Link href="/projects">
                  <button className="btn-glow group">
                    <span className="flex items-center gap-2 text-sm">
                      <Terminal size={14} />
                      View Security Projects
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/blog">
                  <button className="btn-glow group">
                    <span className="flex items-center gap-2 text-sm">
                      Read Research Blog
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-5 py-2.5 font-mono text-sm text-terminal-muted hover:text-terminal-green border border-terminal-border hover:border-terminal-green/30 rounded transition-all duration-300 flex items-center gap-2">
                    Contact
                  </button>
                </Link>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-4 font-mono text-xs text-terminal-muted pt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
                  <span>Available for consulting</span>
                </div>
                <div className="h-3 w-px bg-terminal-border" />
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70 animate-pulse" />
                  <span>Jakarta, ID</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-terminal-green/5 rounded-2xl blur-2xl" />
              <TerminalHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-16 border-y border-terminal-border bg-terminal-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center space-y-2 group"
              >
                <Icon
                  size={20}
                  className="mx-auto text-terminal-green/50 group-hover:text-terminal-green group-hover:drop-shadow-[0_0_8px_#00ff9f] transition-all duration-300"
                />
                <div className="font-mono text-2xl sm:text-3xl font-bold text-terminal-green">
                  {value}
                </div>
                <div className="font-mono text-xs text-terminal-muted uppercase tracking-wider">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-terminal-border" />
            <span className="font-mono text-sm text-terminal-green">// core capabilities</span>
            <div className="h-px flex-1 bg-terminal-border" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group p-5 border border-terminal-border hover:border-terminal-green/30 bg-terminal-surface/50 hover:bg-terminal-surface rounded-lg transition-all duration-300"
              >
                <div className="mb-4 w-8 h-8 rounded border border-terminal-green/20 flex items-center justify-center group-hover:border-terminal-green/60 group-hover:shadow-glow-green-sm transition-all duration-300">
                  <Icon size={14} className="text-terminal-green" />
                </div>
                <h3 className="font-mono text-sm font-medium text-terminal-text mb-2 group-hover:text-terminal-green transition-colors">
                  {title}
                </h3>
                <p className="text-terminal-muted text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center space-y-2"
          >
            <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
              // try it
            </span>
            <h2 className="font-mono text-xl sm:text-2xl text-terminal-text">Interactive Terminal</h2>
            <p className="text-terminal-muted text-sm font-mono">
              Type <code className="text-terminal-green">help</code> to explore available commands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-terminal-green/5 rounded-xl blur-xl" />
            <InteractiveTerminal />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-terminal-green uppercase tracking-widest">
              // ready to collaborate
            </p>
            <h2 className="font-mono text-2xl sm:text-3xl text-terminal-text">
              Let&apos;s build something{' '}
              <span className="text-terminal-green text-glow">secure</span>
            </h2>
            <p className="text-terminal-muted text-sm max-w-lg mx-auto">
              Looking for a security engineer who thinks offensively but builds defensively?
              Let&apos;s discuss how I can help harden your infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <button className="btn-glow group">
                <span className="flex items-center gap-2 text-sm">
                  Start a Conversation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <Link href="/about">
              <button className="px-5 py-2.5 font-mono text-sm text-terminal-muted hover:text-terminal-green border border-terminal-border hover:border-terminal-green/30 rounded transition-all duration-300">
                Read My Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
