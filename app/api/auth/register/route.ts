import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { checkRateLimit } from "@/lib/auth/rate-limiting"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"
    if (!checkRateLimit(`register_${ip}`, 5, 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many registration attempts" },
        { status: 429 }
      )
    }

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}