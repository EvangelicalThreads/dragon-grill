import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
     body: JSON.stringify({
  from: "yourname@evangelicalthreads.com", // your verified email
  to: email,
  subject: "Welcome to Dragon Grill Rewards!",
  text: `Thanks for joining our Dragon Grill Rewards! 🎉

You're officially on the list to get:
- Exclusive discounts on your favorite dishes 🍜
- Early access to new menu items 🥢
- Special birthday treats 🎂
- VIP invites to events and promotions 🎁

We can't wait to share the deliciousness with you!`,
}),

    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Resend API error:", text);
      return NextResponse.json({ success: false, message: text }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
