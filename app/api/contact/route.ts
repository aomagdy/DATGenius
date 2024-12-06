import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, website } = await request.json()

    // Honeypot check
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      )
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'DATGenius <support@datgenius.com>',
      to: email,
      subject: 'We received your message',
      html: `
        <h1>Thanks for contacting us, ${name}!</h1>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <hr />
        <h2>Your Message:</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    // Send notification to admin
    await resend.emails.send({
      from: 'DATGenius <support@datgenius.com>',
      to: 'admin@datgenius.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}