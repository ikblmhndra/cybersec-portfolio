'use client'

import { useState } from 'react'
import { Link2 } from 'lucide-react'

export default function CopyButton() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 p-1.5 text-terminal-muted hover:text-terminal-green border border-terminal-border hover:border-terminal-green/30 rounded transition-colors font-mono text-xs"
    >
      <Link2 size={12} />
      {copied ? 'Copied!' : 'Copy link'}
    </button>
  )
}
