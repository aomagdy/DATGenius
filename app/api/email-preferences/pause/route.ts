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

    const { resumeDate } = await request.json()

    // Update pause status in database
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        emailsPaused: true,
        emailResumeDate: new Date(resumeDate),
      },
    })

    // Update subscription status in email service
    // Implementation would depend on your email service provider

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email pause error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}