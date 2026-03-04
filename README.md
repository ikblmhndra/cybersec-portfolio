# Cybersecurity Portfolio — Ikbal Mahendra

A highly polished personal portfolio website with a hacker / terminal aesthetic, built for a cybersecurity professional.

## Tech Stack

- **Next.js 14** (App Router, static generation)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom cybersec theme)
- **Framer Motion** (animations)
- **MDX** (blog system via `next-mdx-remote`)
- **Shiki / rehype-pretty-code** (syntax highlighting)
- **Vercel** (deployment target)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
open http://localhost:3000
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page with timeline
│   ├── projects/page.tsx   # Security lab projects
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Individual blog posts
│   ├── contact/page.tsx    # Contact page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # SEO robots.txt
│
├── components/
│   ├── terminal/
│   │   ├── TerminalHero.tsx        # Animated hero terminal
│   │   └── InteractiveTerminal.tsx # Interactive CLI terminal
│   ├── blog/
│   │   ├── BlogClient.tsx          # Blog list with filters
│   │   └── BlogPostClient.tsx      # MDX post renderer
│   ├── ui/
│   │   └── NetworkBackground.tsx   # Canvas node animation
│   ├── layout/
│   │   ├── Navigation.tsx          # Top nav bar
│   │   └── Footer.tsx              # Footer
│   └── HomeClient.tsx              # Animated home page
│
├── content/blog/           # MDX blog posts
│   ├── ubuntu-hardening-guide.mdx
│   ├── kubernetes-security-basics.mdx
│   ├── building-security-automation.mdx
│   └── defensive-network-strategies.mdx
│
├── lib/
│   └── mdx.ts              # Blog utilities (read, parse, sort)
│
├── public/                 # Static assets
├── tailwind.config.ts      # Custom terminal theme
└── next.config.js          # Next.js + security headers
```

## Customization

### Personal Info
Update these files with your actual information:
- `app/layout.tsx` — metadata, OG tags, site URL
- `components/layout/Navigation.tsx` — GitHub username
- `components/layout/Footer.tsx` — email, GitHub, LinkedIn
- `app/about/page.tsx` — timeline, skills, certifications
- `app/projects/page.tsx` — your actual projects
- `app/contact/page.tsx` — contact links
- `components/terminal/TerminalHero.tsx` — typing animation text
- `components/terminal/InteractiveTerminal.tsx` — command responses

### Blog Posts
Add new posts to `/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and cards"
date: "2024-05-01"
tags: ["tag1", "tag2"]
---

Your MDX content here...
```

### Theme Colors
Edit `tailwind.config.ts` to change the color scheme:
```ts
terminal: {
  green: '#00ff9f',      // Primary accent
  'green-dim': '#00cc7a', // Secondary
  bg: '#030b03',          // Background
}
```

## Deployment on Vercel

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts, then deploy production
vercel --prod
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Click **Deploy**

### Environment Variables (optional)
If you add a contact form backend:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### Custom Domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain (e.g., `ikbalmahendra.dev`)
3. Update DNS records as instructed
4. Update `metadataBase` in `app/layout.tsx` to your domain

## Adding a Contact Form Backend

The contact form is currently a demo. To make it functional, integrate [Resend](https://resend.com):

```bash
npm install resend
```

Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()
  
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'you@email.com',
    subject: `Portfolio contact: ${subject}`,
    html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
  })
  
  return NextResponse.json({ success: true })
}
```

## Performance

The site is optimized for Lighthouse scores:
- Static generation for all pages
- No JavaScript for initial paint on most routes
- Canvas animation uses `requestAnimationFrame`
- Images use Next.js `<Image>` with AVIF/WebP
- Security headers configured in `next.config.js`

## License

MIT — feel free to use this as a template for your own portfolio.
