import { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Ikbal Mahendra | Infrastructure Security Lead',
  description:
    'Infrastructure Security Lead specializing in network security, automation, and cyber defense engineering.',
}

export default function HomePage() {
  return <HomeClient />
}
