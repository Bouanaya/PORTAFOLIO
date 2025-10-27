import { NextRequest, NextResponse } from "next/server"
import emailjs from "@emailjs/browser"

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json()

    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 })
    }

    // ✅ جلب المعلومات من env
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS environment variables not set")
    }

    // ✅ Send Email
    const result = await emailjs.send(
      serviceId,
      templateId,
      { fullName, email, phone, message },
      publicKey
    )

    console.log("✅ Email sent:", result)
    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error("❌ EmailJS proxy error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}
