import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    age: { type: String, required: false },
    purpose: { type: String, required: false },
    category: { type: String, required: false }, // "student" or "professional"
    // Student fields
    institution: { type: String, required: false },
    course: { type: String, required: false },
    // Professional fields
    company: { type: String, required: false },
    designation: { type: String, required: false }
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);