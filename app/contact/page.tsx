'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Shield, Send, CheckCircle, Terminal } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    command: 'connect --email',
    value: 'ikbalmahendra.96@gmail.com',
    href: 'mailto:ikbalmahendra.96@gmail.com',
    description: 'Best for project inquiries and consulting',
  },
  {
    icon: Github,
    command: 'connect --github',
    value: 'github.com/ikblmhndra',
    href: 'https://github.com/ikblmhndra',
    description: 'Open source projects and contributions',
  },
  {
    icon: Linkedin,
    command: 'connect --linkedin',
    value: 'linkedin.com/in/ikblmhndra/',
    href: 'https://linkedin.com/in/ikblmhndra/',
    description: 'Professional network and opportunities',
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, integrate with a form service like Resend, Formspree, etc.
    setSubmitted(true)
  }

  return (
    <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-4"
        >
          <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
            // ./contact --init
          </span>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-terminal-text">
            Get in <span className="text-terminal-green">Touch</span>
          </h1>
          <p className="font-mono text-sm text-terminal-muted max-w-lg">
            Available for security consulting, infrastructure projects, DevSecOps advisory, and research collaboration.
          </p>
          <div className="h-px w-24 bg-terminal-green/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Contact links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="terminal-window"
            >
              <div className="terminal-window-bar">
                <div className="terminal-dot bg-red-500/70" />
                <div className="terminal-dot bg-yellow-500/70" />
                <div className="terminal-dot bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-terminal-muted">
                  contact.sh
                </span>
              </div>
              <div className="p-5 space-y-5">
                {contactLinks.map(({ icon: Icon, command, value, href, description }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="block group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded border border-transparent hover:border-terminal-green/20 hover:bg-terminal-green/5 transition-all duration-300">
                      <Icon size={14} className="text-terminal-green mt-0.5 flex-shrink-0 group-hover:drop-shadow-[0_0_6px_#00ff9f] transition-all" />
                      <div className="space-y-0.5">
                        <div className="font-mono text-xs text-terminal-muted">
                          <span className="text-terminal-green">$</span> {command}
                        </div>
                        <div className="font-mono text-sm text-terminal-text group-hover:text-terminal-green transition-colors">
                          {value}
                        </div>
                        <div className="font-mono text-xs text-terminal-muted/60">
                          # {description}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="terminal-window p-5"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-terminal-green mb-4">
                <span className="text-terminal-muted">$</span>
                <span>availability --check</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { label: 'Consulting', status: 'OPEN', color: 'text-terminal-green' },
                  { label: 'Full-time', status: 'OPEN', color: 'text-terminal-green' },
                  { label: 'Research collab', status: 'ALWAYS', color: 'text-blue-400' },
                  { label: 'Response time', status: '< 48h', color: 'text-terminal-text' },
                ].map(({ label, status, color }) => (
                  <div key={label} className="flex items-center justify-between py-1 border-b border-terminal-border/30 last:border-0">
                    <span className="text-terminal-muted">{label}</span>
                    <span className={`${color} font-medium`}>{status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="terminal-window p-8 text-center space-y-4 h-full flex flex-col items-center justify-center">
                <CheckCircle size={40} className="text-terminal-green" />
                <h3 className="font-mono text-lg text-terminal-green">Message Received</h3>
                <p className="font-mono text-sm text-terminal-muted">
                  Your message has been queued for processing. I&apos;ll get back to you within 48 hours.
                </p>
                <div className="font-mono text-xs text-terminal-muted">
                  [process completed with exit code 0]
                </div>
              </div>
            ) : (
              <div className="terminal-window">
                <div className="terminal-window-bar">
                  <div className="terminal-dot bg-red-500/70" />
                  <div className="terminal-dot bg-yellow-500/70" />
                  <div className="terminal-dot bg-green-500/70" />
                  <span className="ml-3 font-mono text-xs text-terminal-muted">
                    send-message.sh
                  </span>
                </div>
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                  {[
                    { id: 'name', label: 'name', type: 'text', placeholder: 'Your name', required: true },
                    { id: 'email', label: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                    { id: 'subject', label: 'subject', type: 'text', placeholder: 'What is this about?', required: true },
                  ].map((field) => (
                    <div key={field.id} className="space-y-1">
                      <label className="font-mono text-xs text-terminal-green flex items-center gap-1.5">
                        <span className="text-terminal-muted">--</span>
                        {field.label}
                        {field.required && <span className="text-red-400">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        value={formState[field.id as keyof typeof formState]}
                        onChange={(e) => setFormState(prev => ({ ...prev, [field.id]: e.target.value }))}
                        onFocus={() => setFocused(field.id)}
                        onBlur={() => setFocused(null)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full bg-terminal-bg border rounded px-3 py-2 font-mono text-sm text-terminal-text placeholder-terminal-muted/40 outline-none transition-all duration-200 ${
                          focused === field.id
                            ? 'border-terminal-green/60 shadow-glow-green-sm'
                            : 'border-terminal-border hover:border-terminal-green/20'
                        }`}
                      />
                    </div>
                  ))}

                  <div className="space-y-1">
                    <label className="font-mono text-xs text-terminal-green flex items-center gap-1.5">
                      <span className="text-terminal-muted">--</span>
                      message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={5}
                      className={`w-full bg-terminal-bg border rounded px-3 py-2 font-mono text-sm text-terminal-text placeholder-terminal-muted/40 outline-none transition-all duration-200 resize-none ${
                        focused === 'message'
                          ? 'border-terminal-green/60 shadow-glow-green-sm'
                          : 'border-terminal-border hover:border-terminal-green/20'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glow flex items-center justify-center gap-2 py-3"
                  >
                    <span className="flex items-center gap-2 font-mono text-sm">
                      <Send size={13} />
                      Execute: send-message
                    </span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
