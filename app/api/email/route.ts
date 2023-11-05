import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const { subject, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anuragibt@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL,
      },
    });

    const mailOptions = {
      from: "anuragibt@gmail.com",
      to: email,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Error sending email", { status: 500 });
  }
};
