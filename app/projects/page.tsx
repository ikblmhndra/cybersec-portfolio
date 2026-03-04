'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Shield, Zap, Lock, Server, GitBranch, Eye, Tag, Activity, Terminal } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  longDescription: string
  tech: string[]
  tags: string[]
  github: string
  status: 'active' | 'stable' | 'archived'
  icon: typeof Shield
  stats?: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'firewall-backup-automation',
    description: 'Automated multi-vendor firewall configuration backup and diff analysis system.',
    longDescription:
      'A production-grade Python system that connects to 20+ firewall vendors via SSH/API, extracts running configurations, stores them in encrypted Git repositories, and automatically generates diff reports on any change. Integrates with Slack and PagerDuty for alerting.',
    tech: ['Python', 'Paramiko', 'Git', 'PostgreSQL', 'Docker', 'Ansible'],
    tags: ['automation', 'network', 'infrastructure'],
    github: 'https://github.com/ikblmhndra/firewall-backup-automation',
    status: 'active',
    icon: Shield,
    stats: [
      { label: 'Vendors Supported', value: '20+' },
      { label: 'Configs Managed', value: '500+' },
      { label: 'Daily Checks', value: '4x' },
    ],
  },
  {
    id: 2,
    name: 'kubernetes-security-scanner',
    description: 'Real-time Kubernetes cluster security posture assessment and CIS benchmark validation.',
    longDescription:
      'An operator that continuously scans Kubernetes cluster state against CIS Kubernetes Benchmarks, NSA/CISA hardening guides, and custom policy rules. Exports findings to Prometheus/Grafana and generates SARIF reports for CI/CD integration.',
    tech: ['Go', 'Kubernetes', 'Prometheus', 'OPA/Rego', 'Helm', 'PostgreSQL'],
    tags: ['kubernetes', 'devsecops', 'automation', 'research'],
    github: 'https://github.com/ikblmhndra/k8s-security-scanner',
    status: 'active',
    icon: Server,
    stats: [
      { label: 'CIS Controls', value: '165' },
      { label: 'Custom Rules', value: '40+' },
      { label: 'False Positive Rate', value: '<2%' },
    ],
  },
  {
    id: 3,
    name: 'security-hardening-toolkit',
    description: 'CIS benchmark automation toolkit for Linux servers with drift detection.',
    longDescription:
      'A comprehensive hardening framework that applies CIS Level 1 & 2 benchmarks to Ubuntu, RHEL, and Debian systems via Ansible. Includes drift detection that alerts when configurations deviate from baseline, plus STIG compliance reporting.',
    tech: ['Ansible', 'Python', 'Bash', 'OpenSCAP', 'Docker', 'Jinja2'],
    tags: ['automation', 'infrastructure', 'compliance'],
    github: 'https://github.com/ikblmhndra/security-hardening-toolkit',
    status: 'stable',
    icon: Lock,
    stats: [
      { label: 'CIS Controls', value: '250+' },
      { label: 'OS Supported', value: '6' },
      { label: 'Compliance Score Avg', value: '96%' },
    ],
  },
  {
    id: 4,
    name: 'xss-automation-scanner',
    description: 'Headless browser-based XSS detection pipeline with DOM analysis.',
    longDescription:
      'An advanced XSS scanner using Playwright for headless browser automation. Crawls web applications, injects polyglot payloads, monitors DOM mutations, and detects both reflected and stored XSS vulnerabilities. Generates detailed OWASP-formatted reports.',
    tech: ['Python', 'Playwright', 'FastAPI', 'Redis', 'SQLite', 'Docker'],
    tags: ['automation', 'research', 'offensive'],
    github: 'https://github.com/ikblmhndra/xss-automation-scanner',
    status: 'active',
    icon: Eye,
    stats: [
      { label: 'Payload Library', value: '2000+' },
      { label: 'Detection Rate', value: '94%' },
      { label: 'Avg Scan Time', value: '4min' },
    ],
  },
  {
    id: 5,
    name: 'infrastructure-monitoring-tools',
    description: 'Unified security event correlation dashboard with threat intelligence integration.',
    longDescription:
      'A lightweight SIEM-adjacent tool that aggregates logs from firewalls, servers, and applications, correlates events using custom Sigma rules, and enriches IOCs with threat intelligence feeds. Built for teams that can\'t afford a full SIEM but need real-time detection.',
    tech: ['Python', 'Elasticsearch', 'Kibana', 'Redis', 'Sigma', 'MISP'],
    tags: ['network', 'infrastructure', 'automation', 'devsecops'],
    github: 'https://github.com/ikblmhndra/infra-monitoring-tools',
    status: 'active',
    icon: Activity,
    stats: [
      { label: 'Events/Day', value: '1M+' },
      { label: 'Sigma Rules', value: '80+' },
      { label: 'TI Feeds', value: '12' },
    ],
  },
  {
    id: 6,
    name: 'devsecops-pipeline-template',
    description: 'GitHub Actions security pipeline template with SAST, SCA, and container scanning.',
    longDescription:
      'A ready-to-use GitHub Actions workflow template that integrates Semgrep for SAST, Trivy for container scanning, OSV-Scanner for SCA, TFSec for infrastructure code security, and uploads results to GitHub Security tab. Configurable severity thresholds.',
    tech: ['GitHub Actions', 'Semgrep', 'Trivy', 'TFSec', 'Docker', 'YAML'],
    tags: ['devsecops', 'automation', 'research'],
    github: 'https://github.com/ikblmhndra/devsecops-pipeline-template',
    status: 'stable',
    icon: GitBranch,
    stats: [
      { label: 'Scanners Integrated', value: '6' },
      { label: 'Template Stars', value: '340+' },
      { label: 'Pipeline Time', value: '~8min' },
    ],
  },
]

const ALL_TAGS = ['all', 'automation', 'network', 'kubernetes', 'devsecops', 'infrastructure', 'research', 'offensive', 'compliance']

const statusColors = {
  active: 'text-terminal-green border-terminal-green/30 bg-terminal-green/5',
  stable: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  archived: 'text-terminal-muted border-terminal-border',
}

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-4"
        >
          <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
            // ./lab --list-projects
          </span>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-terminal-text">
            Security <span className="text-terminal-green">Lab</span>
          </h1>
          <p className="font-mono text-sm text-terminal-muted max-w-xl">
            Open-source tools, research projects, and automation systems built for real-world defensive security.
          </p>
          <div className="h-px w-24 bg-terminal-green/40" />
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 ${
                activeTag === tag
                  ? 'text-terminal-green border-terminal-green/60 bg-terminal-green/10 shadow-glow-green-sm'
                  : 'text-terminal-muted border-terminal-border hover:border-terminal-green/30 hover:text-terminal-text'
              }`}
            >
              {tag === 'all' ? '$ all' : `#${tag}`}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Icon = project.icon
              const isExpanded = expandedId === project.id

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className={`terminal-window group cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'lg:col-span-2' : ''
                  }`}
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Window bar */}
                  <div className="terminal-window-bar">
                    <div className="terminal-dot bg-red-500/70" />
                    <div className="terminal-dot bg-yellow-500/70" />
                    <div className="terminal-dot bg-green-500/70" />
                    <span className="ml-3 font-mono text-xs text-terminal-green">
                      ~/{project.name}
                    </span>
                    <span className={`ml-auto font-mono text-xs px-2 py-0.5 rounded border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded border border-terminal-green/20 flex items-center justify-center bg-terminal-green/5 group-hover:border-terminal-green/50 group-hover:bg-terminal-green/10 transition-all">
                          <Icon size={14} className="text-terminal-green" />
                        </div>
                        <div>
                          <h3 className="font-mono text-sm font-medium text-terminal-green">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 p-1.5 text-terminal-muted hover:text-terminal-green hover:bg-terminal-green/5 rounded transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-xs text-terminal-muted leading-relaxed">
                      {isExpanded ? project.longDescription : project.description}
                    </p>

                    {/* Stats (expanded) */}
                    <AnimatePresence>
                      {isExpanded && project.stats && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-3 gap-3"
                        >
                          {project.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="text-center p-3 bg-terminal-green/5 border border-terminal-green/10 rounded"
                            >
                              <div className="font-mono text-lg font-bold text-terminal-green">
                                {stat.value}
                              </div>
                              <div className="font-mono text-xs text-terminal-muted mt-0.5">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-0.5 rounded bg-terminal-surface border border-terminal-border text-terminal-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-badge">#{tag}</span>
                      ))}
                    </div>

                    {/* Click hint */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-xs text-terminal-muted/50">
                        {isExpanded ? '▲ collapse' : '▼ expand details'}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 font-mono text-xs text-terminal-green hover:underline"
                      >
                        <Github size={11} />
                        View Source
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 font-mono text-terminal-muted">
            <Terminal size={32} className="mx-auto mb-4 opacity-30" />
            <p>No projects found for tag: #{activeTag}</p>
          </div>
        )}
      </div>
    </div>
  )
}
