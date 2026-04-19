import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Save directly to MongoDB
        await connectDB();
        const newContact = await Contact.create(body);

        // 2. Automated Email Notification
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Standard Google App Password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sends the lead to your own email Inbox
            subject: `🔥 New Registration: ${body.name}`,
            text: `
A new form submission has arrived!

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'N/A'}
Age: ${body.age || 'N/A'}

[Profile Info]
Category: ${body.category || 'N/A'}
Institution: ${body.institution || 'N/A'}
Course: ${body.course || 'N/A'}
Company: ${body.company || 'N/A'}
Designation: ${body.designation || 'N/A'}

[Inquiry]
Purpose: ${body.purpose || 'N/A'}
            `
        };

        // Trigger email without blocking UI speed
        transporter.sendMail(mailOptions).catch((err: any) => console.error("Email Notice failed:", err));

        // 3. Automated WhatsApp Notification (via Twilio)
        if (process.env.TWILIO_SID && process.env.TWILIO_AUTH_TOKEN) {
            const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
            twilioClient.messages.create({
                body: `🔥 New Thinklytics Lead!\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nRole: ${body.category}\n\nPurpose: ${body.purpose}`,
                from: 'whatsapp:+14155238886', // Twilio Default Sandbox Number
                to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`
            }).catch((err: any) => console.log("WhatsApp Error:", err));
        }

        return NextResponse.json({ success: true, data: newContact });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}