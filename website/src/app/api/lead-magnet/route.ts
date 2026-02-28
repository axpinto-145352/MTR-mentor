import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Log the email capture - integrate with email service in production
    console.log("Lead magnet email captured:", {
      email,
      leadMagnet: "mid-term-rental-starter-checklist",
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email marketing service (ConvertKit, Mailchimp, etc.)
    // to send the checklist PDF and add to nurture sequence

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
