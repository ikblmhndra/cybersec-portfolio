'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Lock, Server, GitBranch, Eye, Award, Calendar } from 'lucide-react'

const timeline = [
  {
    year: '2024–Present',
    role: 'Infrastructure Security Lead',
    company: 'Privy Identitas Digital',
    description:
      'Leading a team of 4 security engineers and network security in designing and implementing org-wide security automation, Zero Trust architecture, and continuous compliance monitoring across 500+ servers.',
    tags: ['leadership', 'automation', 'zero-trust'],
    status: 'current',
  },
  {
    year: '2022–2024',
    role: 'Security Engineer',
    company: 'Privy Identitas Digital',
    description:
      'Architected a Zero Trust network segmentation strategy reducing lateral movement risk by 85%. Deployed next-gen SIEM with custom detection rules covering 200+ threat scenarios.',
    tags: ['network', 'siem', 'zero-trust'],
    status: 'past',
  },
  {
    year: '2020–2022',
    role: 'System Engineer',
    company: 'Indodana Finance',
    description:
      'System hardening and automation for a fintech startup. Implemented infrastructure as code with Terraform, automated security patching, and built a custom monitoring stack using Prometheus and Grafana.',
    tags: ['linux', 'containers', 'automation'],
    status: 'past',
  },
  {
    year: '2018–2020',
    role: 'Network Engineer',
    company: 'Maxindo Mitra Solusi',
    description:
      'Started as network engineer, but quickly gravitated towards security. Implemented firewall rules, IDS/IPS, and basic monitoring, which sparked my passion for defensive security.',
    tags: ['systems', 'origin-story', 'networking'],
    status: 'past',
  },
]

const skills = [
  { category: 'Network Security', items: ['Palo Alto', 'Cisco ASA', 'pfSense', 'Suricata', 'Zeek', 'Wireshark'] },
  { category: 'Cloud & Container', items: ['AWS Security', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Vault'] },
  { category: 'Automation', items: ['Python', 'Bash', 'Ansible', 'Go (basics)', 'PowerShell', 'Salt'] },
  { category: 'Security Tools', items: ['Metasploit', 'Burp Suite', 'Nessus', 'OpenVAS', 'Elastic SIEM', 'Splunk'] },
  { category: 'Compliance', items: ['ISO 27001', 'NIST CSF', 'CIS Benchmarks', 'SOC2', 'PCI-DSS', 'GDPR'] },
  { category: 'Operating Systems', items: ['Ubuntu/Debian', 'RHEL/CentOS', 'Windows Server', 'Alpine', 'Kali', 'Parrot'] },
]

// const certifications = [
//   { name: 'OSCP', org: 'Offensive Security', year: '2022', color: 'text-red-400' },
//   { name: 'CKS', org: 'CNCF', year: '2023', color: 'text-blue-400' },
//   { name: 'AWS Security Specialty', org: 'Amazon', year: '2022', color: 'text-yellow-400' },
//   { name: 'GPEN', org: 'SANS / GIAC', year: '2021', color: 'text-terminal-green' },
//   { name: 'Security+', org: 'CompTIA', year: '2019', color: 'text-terminal-green-dim' },
// ]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  return (
    <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 space-y-4"
        >
          <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
            // ./about.sh --verbose
          </span>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-terminal-text">
            About <span className="text-terminal-green">Me</span>
          </h1>
          <div className="h-px w-24 bg-terminal-green/40" />
        </motion.div>

        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-16 terminal-window p-6 space-y-4"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-terminal-green mb-4">
            <span className="text-terminal-muted">$</span>
            <span>cat bio.txt</span>
          </div>
          <div className="space-y-4 font-mono text-sm text-terminal-text leading-relaxed border-l-2 border-terminal-green/20 pl-4">
            <p>
              I&apos;m Ikbal Mahendra, an Infrastructure Security Lead based in Jakarta, Indonesia. 
              I build systems that are designed to fail gracefully, detect threats early, and 
              recover quickly — because in security, it&apos;s not{' '}
              <em className="text-terminal-green">if</em> you get breached, it&apos;s{' '}
              <em className="text-terminal-green">when</em>.
            </p>
            <p>
              My philosophy: <span className="text-terminal-green">think like an attacker, build like an engineer</span>. 
              Every firewall rule, every automation script, every hardening policy I write 
              starts with asking — &quot;how would I bypass this?&quot; — and then engineering 
              it to be unbybassable.
            </p>
            <p>
              Over 7 years I&apos;ve hardened infrastructure across fintech, government, and 
              enterprise environments, built automation that handles hundreds of security 
              events daily without human intervention, and developed a deep expertise in 
              turning <span className="text-terminal-green">complex threat landscapes</span> into 
              manageable, measurable security postures.
            </p>
            <p>
              When I&apos;m not writing Python scripts or reviewing firewall policies, I&apos;m 
              writing security research, contributing to open-source tools, and mentoring 
              the next generation of defensive engineers.
            </p>
          </div>
        </motion.section>

        {/* Career Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={16} className="text-terminal-green" />
            <h2 className="font-mono text-lg text-terminal-green">
              // career timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-terminal-border" />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {timeline.map((entry, i) => (
                <motion.div key={i} variants={item} className="relative flex gap-6">
                  {/* Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded border flex items-center justify-center ${
                    entry.status === 'current'
                      ? 'border-terminal-green bg-terminal-green/10 shadow-glow-green-sm'
                      : 'border-terminal-border bg-terminal-surface'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      entry.status === 'current' ? 'bg-terminal-green animate-pulse' : 'bg-terminal-muted'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-6 ${i < timeline.length - 1 ? 'border-b border-terminal-border/30' : ''}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-mono text-sm font-medium text-terminal-text">
                          {entry.role}
                        </h3>
                        <span className="font-mono text-xs text-terminal-green-dim">
                          {entry.company}
                        </span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded border ${
                        entry.status === 'current'
                          ? 'text-terminal-green border-terminal-green/30 bg-terminal-green/5'
                          : 'text-terminal-muted border-terminal-border'
                      }`}>
                        {entry.year}
                      </span>
                    </div>
                    <p className="text-terminal-muted text-xs leading-relaxed mt-2 mb-3">
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="tag-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap size={16} className="text-terminal-green" />
            <h2 className="font-mono text-lg text-terminal-green">// tech stack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-4 border border-terminal-border hover:border-terminal-green/20 bg-terminal-surface/50 rounded-lg transition-colors"
              >
                <h3 className="font-mono text-xs text-terminal-green-dim uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-terminal-green/5 border border-terminal-green/10 text-terminal-text hover:border-terminal-green/30 hover:text-terminal-green transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award size={16} className="text-terminal-green" />
            <h2 className="font-mono text-lg text-terminal-green">// certifications</h2>
          </div>

          <div className="terminal-window p-4">
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 font-mono text-sm py-2 border-b border-terminal-border/30 last:border-0"
                >
                  <span className="text-terminal-green">✓</span>
                  <span className={`font-medium ${cert.color}`}>{cert.name}</span>
                  <span className="text-terminal-muted">—</span>
                  <span className="text-terminal-muted text-xs">{cert.org}</span>
                  <span className="ml-auto text-terminal-muted text-xs">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section> */}

      </div>
    </div>
  )
}
