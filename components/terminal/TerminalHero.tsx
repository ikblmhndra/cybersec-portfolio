'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TerminalLine {
  prefix: string
  text: string
  delay: number
  color?: string
}

const terminalLines: TerminalLine[] = [
  { prefix: '$ ', text: 'whoami', delay: 500, color: '#00ff9f' },
  { prefix: '> ', text: 'Ikbal Mahendra', delay: 1200, color: '#c8e6c8' },
  { prefix: '$ ', text: 'role --current', delay: 2000, color: '#00ff9f' },
  { prefix: '> ', text: 'Infrastructure Security Lead', delay: 2700, color: '#c8e6c8' },
  { prefix: '$ ', text: 'skills --list', delay: 3500, color: '#00ff9f' },
  { prefix: '> ', text: 'Network Security', delay: 4200, color: '#00cc7a' },
  { prefix: '  ', text: 'Security Automation', delay: 4600, color: '#00cc7a' },
  { prefix: '  ', text: 'Infrastructure Hardening', delay: 5000, color: '#00cc7a' },
  { prefix: '  ', text: 'Cyber Defense Engineering', delay: 5400, color: '#00cc7a' },
  { prefix: '  ', text: 'DevSecOps', delay: 5800, color: '#00cc7a' },
  { prefix: '$ ', text: 'status --system', delay: 6400, color: '#00ff9f' },
  { prefix: '> ', text: '[✓] All systems operational', delay: 7000, color: '#00ff9f' },
]

function useTypingAnimation(text: string, startDelay: number, speed = 40) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout

    timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i))
          i++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, startDelay, speed])

  return { displayText, isComplete }
}

function TerminalLineItem({
  line,
  index,
}: {
  line: TerminalLine
  index: number
}) {
  const { displayText } = useTypingAnimation(line.text, line.delay)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), line.delay - 100)
    return () => clearTimeout(t)
  }, [line.delay])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-start gap-1 font-mono text-sm sm:text-base leading-relaxed"
    >
      <span
        className="select-none flex-shrink-0"
        style={{ color: line.prefix === '$ ' ? '#00ff9f' : '#5a7a5a' }}
      >
        {line.prefix}
      </span>
      <span style={{ color: line.color || '#c8e6c8' }}>{displayText}</span>
    </motion.div>
  )
}

export default function TerminalHero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal-window max-w-2xl w-full">
      {/* Window bar */}
      <div className="terminal-window-bar">
        <div className="terminal-dot bg-red-500/70" />
        <div className="terminal-dot bg-yellow-500/70" />
        <div className="terminal-dot bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-terminal-muted">
          ikbal@seclab:~
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
          <span className="font-mono text-xs text-terminal-green">CONNECTED</span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-6 space-y-1 min-h-[360px]">
        {terminalLines.map((line, index) => (
          <TerminalLineItem key={index} line={line} index={index} />
        ))}

        {/* Live cursor */}
        <div className="flex items-center gap-1 font-mono text-sm sm:text-base mt-2">
          <span className="text-terminal-green">$ </span>
          <span
            className={`inline-block w-2.5 h-4 bg-terminal-green transition-opacity duration-100 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
