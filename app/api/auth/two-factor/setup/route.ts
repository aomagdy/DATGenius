import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth/auth-options"
import { generateTwoFactorSecret, generateBackupCodes } from "@/lib/auth/two-factor"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { secret, qrCode } = await generateTwoFactorSecret()
    const backupCodes = generateBackupCodes()

    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        twoFactorSecret: secret,
        twoFactorBackupCodes: backupCodes,
      }
    })

    return NextResponse.json({ qrCode, backupCodes })
  } catch (error) {
    console.error("2FA setup error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}