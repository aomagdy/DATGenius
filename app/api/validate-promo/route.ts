import { NextResponse } from 'next/server'

const VALID_PROMO_CODES = {
  'STUDENT15': 0.15,
  'SUMMER20': 0.20,
  'WELCOME10': 0.10,
}

export async function POST(request: Request) {
  try {
    const { code } = await request.json()
    const discount = VALID_PROMO_CODES[code as keyof typeof VALID_PROMO_CODES] || 0

    return NextResponse.json({ discount })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}