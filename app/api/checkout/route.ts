import { NextResponse } from 'next/server'
import { stripe, getStripePriceId } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { planId, interval } = await request.json()
    const priceId = getStripePriceId(planId, interval)

    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan or interval' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing?canceled=true`,
      automatic_tax: { enabled: true },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}