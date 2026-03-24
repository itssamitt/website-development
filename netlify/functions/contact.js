import nodemailer from "nodemailer";

function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const port = Number(process.env.EMAIL_PORT || 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "Email service is not configured. Missing EMAIL_USER or EMAIL_PASS.",
    );
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

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
        Allow: "POST",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, whatsapp, requirement } = data;

    if (!name || !whatsapp || !requirement) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing fields in request" }),
      };
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

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    const errorMessage = error?.message || "Unable to send email";
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: errorMessage }),
    };
  }
}
