import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, propertyLocation, service, properties, message } = body;

    if (!firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission for now - replace with email service (Resend, SendGrid, etc.)
    // or CRM integration in production
    console.log("New lead submission:", {
      firstName,
      lastName,
      email,
      phone,
      propertyLocation,
      service,
      properties,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Mid-Term Mentor <noreply@midtermmentor.com>',
    //   to: 'michelle@midtermmentor.com',
    //   subject: `New Lead: ${firstName} ${lastName} - ${service}`,
    //   html: `<p>Name: ${firstName} ${lastName}</p><p>Email: ${email}</p>...`
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
