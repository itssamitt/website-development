import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getTransporter() {
    const host = process.env.EMAIL_HOST || "smtp.gmail.com";
    const port = Number(process.env.EMAIL_PORT || 465);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
        throw new Error("Email service is not configured. Missing EMAIL_USER or EMAIL_PASS.");
    }

    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
            user,
            pass,
        },
    });
}

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, whatsapp, requirement } = data;

        if (!name || !whatsapp || !requirement) {
            return new Response(JSON.stringify({ error: "Missing fields in request" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const transporter = getTransporter();
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: "New Website Enquiry from Portfolio Contact Form",
            text: `Name: ${name}\nWhatsApp: ${whatsapp}\nRequirement: ${requirement}`,
            html: `<h2>New Enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>WhatsApp:</strong> ${whatsapp}</p><p><strong>Requirement:</strong> ${requirement}</p>`,
        };

        await transporter.verify();
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Email send error:", error);
        const errorMessage = error?.message || "Unable to send email";
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
