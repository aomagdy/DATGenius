import { NextResponse } from "next/server"
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const listId = process.env.MAILCHIMP_LIST_ID

    await mailchimp.lists.addListMember(listId!, {
      email_address: email,
      status: "pending", // Double opt-in
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Newsletter subscription error:", error)

    // Handle Mailchimp specific errors
    if (error.response?.body?.title === "Member Exists") {
      return NextResponse.json(
        { error: "You're already subscribed to our newsletter!" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}