import { NextRequest, NextResponse } from "next/server"
import emailjs from "@emailjs/browser"

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json()

    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 })
    }

    // Initialize EmailJS in the server
    const result = await emailjs.send(
     'Portfolio'!,
     'template_fcnom08'!,
      { fullName, email, phone, message },
      'tGHxG-tBZcZz4LASv'!
    )

    console.log("EmailJS result:", result)

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error("EmailJS proxy error:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
