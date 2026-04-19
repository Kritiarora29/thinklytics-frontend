import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        await connectDB();

        const newContact = await Contact.create(body);

        return NextResponse.json({ success: true, data: newContact });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}