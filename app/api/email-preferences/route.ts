import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-options"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const preferences = await request.json()

    // Update preferences in database
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        emailPreferences: preferences,
      },
    })

    // Update preferences in email service
    // Implementation would depend on your email service provider

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email preferences error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}