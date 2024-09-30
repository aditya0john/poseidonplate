import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // or another service like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.PASSWORD, // Your email password or app password if using Gmail
  },
});

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    const mailOptions = {
      from: process.env.EMAIL, // sender address
      to: email, // user's email address
      subject: "Your Booking Confirmation",
      html: `
        <h1>Thank you for booking with us!</h1>
        <p>Your booking details are as follows:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Seats:</strong> 1 </li>
        </ul>
       
        <p>We look forward to serving you!</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email", error);
    }

    // For now, we simulate email sending with a simple response:
    if (email && name) {
      // Simulate sending email
      console.log(`Sending email to: ${email}, name: ${name}`);

      return NextResponse.json({ message: "Booking confirmation sent!" });
    } else {
      return NextResponse.json(
        { message: "Email or name missing" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
