import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ikbalmahendra.96@gmail.com',
    subject: `Portfolio contact: ${subject}`,
    html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
  })
  
  return NextResponse.json({ success: true })
}