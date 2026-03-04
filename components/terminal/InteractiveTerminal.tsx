'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon } from 'lucide-react'

interface OutputLine {
  type: 'input' | 'output' | 'error' | 'success' | 'info'
  content: string | string[]
}

const ASCII_BANNER = `
 ██╗██╗  ██╗██████╗  █████╗ ██╗     
 ██║██║ ██╔╝██╔══██╗██╔══██╗██║     
 ██║█████╔╝ ██████╔╝███████║██║     
 ██║██╔═██╗ ██╔══██╗██╔══██║██║     
 ██║██║  ██╗██████╔╝██║  ██║███████╗
 ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝
                         v1.0 :: seclab
`.trim()

const COMMANDS: Record<string, () => OutputLine> = {
  help: () => ({
    type: 'output',
    content: [
      'Available commands:',
      '',
      '  whoami          — Display operator profile',
      '  skills          — List technical competencies',
      '  projects        — Show security lab projects',
      '  contact         — Get contact information',
      '  experience      — Career timeline',
      '  certifications  — Security certifications',
      '  clear           — Clear terminal output',
      '  banner          — Display ASCII banner',
      '  status          — System status check',
    ],
  }),
  whoami: () => ({
    type: 'success',
    content: [
      'Operator: Ikbal Mahendra',
      'Role:     Infrastructure Security Lead',
      'Base:     Jakarta, Indonesia',
      'Focus:    Defensive security, automation, infrastructure hardening',
      'Mission:  Build resilient, secure systems at scale',
    ],
  }),
  skills: () => ({
    type: 'output',
    content: [
      '[NETWORK SECURITY]',
      '  Firewall architecture, IDS/IPS, VPN, Zero Trust',
      '  Protocol analysis, traffic monitoring',
      '',
      '[AUTOMATION & DEVSECOPS]',
      '  Python, Bash, Ansible, Terraform',
      '  CI/CD security pipelines, SAST/DAST',
      '',
      '[INFRASTRUCTURE]',
      '  Kubernetes, Docker, Linux hardening',
      '  Cloud security (AWS/GCP), SIEM integration',
      '',
      '[OFFENSIVE AWARENESS]',
      '  Penetration testing, vulnerability assessment',
      '  Threat modeling, red team support',
    ],
  }),
  projects: () => ({
    type: 'output',
    content: [
      '[1] Firewall Backup Automation',
      '    → Automated multi-vendor firewall config backup system',
      '',
      '[2] Kubernetes Security Scanner',
      '    → Real-time K8s cluster security posture assessment',
      '',
      '[3] Security Hardening Toolkit',
      '    → CIS benchmark automation for Linux servers',
      '',
      '[4] XSS Automation Scanner',
      '    → Headless browser-based XSS detection pipeline',
      '',
      '[5] Infrastructure Monitoring Tools',
      '    → Unified security event correlation dashboard',
      '',
      '  → Visit /projects for full details',
    ],
  }),
  contact: () => ({
    type: 'success',
    content: [
      'connect --email    ikbal@seclab.dev',
      'connect --github   github.com/ikbalmahendra',
      'connect --linkedin linkedin.com/in/ikbalmahendra',
      '',
      'PGP Key available on request.',
      'Response time: < 48 hours',
    ],
  }),
  experience: () => ({
    type: 'output',
    content: [
      '2023–present  Infrastructure Security Lead',
      '              → Building org-wide security automation',
      '',
      '2021–2023     Senior Network Security Engineer',
      '              → Designed Zero Trust network architecture',
      '',
      '2019–2021     Security Engineer',
      '              → Incident response, SIEM deployment',
      '',
      '2017–2019     Junior Systems Administrator',
      '              → Linux infrastructure, first security role',
    ],
  }),
  certifications: () => ({
    type: 'output',
    content: [
      '[✓] CompTIA Security+',
      '[✓] Certified Kubernetes Security Specialist (CKS)',
      '[✓] AWS Security Specialty',
      '[✓] Offensive Security OSCP',
      '[✓] SANS GIAC GPEN',
    ],
  }),
  status: () => ({
    type: 'success',
    content: [
      '[✓] Portfolio v2.4.1  — ONLINE',
      '[✓] Blog system       — OPERATIONAL',
      '[✓] Lab environment   — ACTIVE',
      '[✓] Security posture  — HARDENED',
      '[✓] Coffee supply     — CRITICAL (refilling)',
    ],
  }),
  banner: () => ({
    type: 'info',
    content: ASCII_BANNER.split('\n'),
  }),
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<OutputLine[]>([
    {
      type: 'info',
      content: [
        'SecLab Terminal v1.0',
        'Type "help" to see available commands.',
        '',
      ],
    },
  ])
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    const newHistory: OutputLine[] = [
      ...history,
      { type: 'input', content: cmd },
    ]

    if (trimmed === 'clear') {
      setHistory([])
      return
    }

    if (!trimmed) {
      setHistory(newHistory)
      return
    }

    if (COMMANDS[trimmed]) {
      setHistory([...newHistory, COMMANDS[trimmed]()])
    } else {
      setHistory([
        ...newHistory,
        {
          type: 'error',
          content: `Command not found: ${trimmed}. Type "help" for available commands.`,
        },
      ])
    }

    setCmdHistory((prev) => [trimmed, ...prev.slice(0, 19)])
    setCmdHistoryIndex(-1)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(cmdHistoryIndex + 1, cmdHistory.length - 1)
      setCmdHistoryIndex(newIndex)
      setInput(cmdHistory[newIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = Math.max(cmdHistoryIndex - 1, -1)
      setCmdHistoryIndex(newIndex)
      setInput(newIndex === -1 ? '' : cmdHistory[newIndex])
    }
  }

  const colorMap = {
    input: 'text-terminal-green',
    output: 'text-terminal-text',
    error: 'text-red-400',
    success: 'text-terminal-green-dim',
    info: 'text-terminal-muted',
  }

  return (
    <div className="terminal-window w-full">
      <div className="terminal-window-bar">
        <div className="terminal-dot bg-red-500/70" />
        <div className="terminal-dot bg-yellow-500/70" />
        <div className="terminal-dot bg-green-500/70" />
        <div className="flex items-center gap-2 ml-3">
          <TerminalIcon size={12} className="text-terminal-green" />
          <span className="font-mono text-xs text-terminal-muted">
            interactive shell — try some commands
          </span>
        </div>
      </div>

      <div
        className="p-4 h-80 overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence initial={false}>
          {history.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-xs sm:text-sm leading-relaxed"
            >
              {line.type === 'input' ? (
                <div className="flex gap-2">
                  <span className="text-terminal-green select-none">ikbal@seclab:~$</span>
                  <span className="text-terminal-text">{line.content as string}</span>
                </div>
              ) : (
                <div className={`pl-0 ${colorMap[line.type]}`}>
                  {Array.isArray(line.content)
                    ? line.content.map((l, j) => (
                        <div key={j} className="whitespace-pre">
                          {l}
                        </div>
                      ))
                    : <div>{line.content}</div>
                  }
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm mt-1">
          <span className="text-terminal-green select-none whitespace-nowrap">
            ikbal@seclab:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-terminal-text caret-terminal-green"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
