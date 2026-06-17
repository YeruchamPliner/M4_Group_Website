import nodemailer from "nodemailer";

// Vercel serverless function - replaces the Express /api/contact route.
// Receives the consultation form and emails the lead to Marv@them4group.com.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const formData =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    // Spam honeypot: real users never fill this hidden field. If it has a
    // value, silently accept and drop the submission (do not email).
    if (formData.company_website) {
      res.status(200).json({ message: "Form submitted successfully" });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Limit field lengths to curb abuse.
    const clip = (v: any, n: number) =>
      typeof v === "string" ? v.slice(0, n) : "";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
        New consultation request from M4 Development website:

        Name: ${clip(formData.firstName, 100)} ${clip(formData.lastName, 100)}
        Email: ${clip(formData.email, 150)}
        Phone: ${clip(formData.phone, 50) || "Not provided"}
        Company: ${clip(formData.company, 150) || "Not provided"}
        Project Type: ${clip(formData.projectType, 100) || "Not provided"}
        Location: ${clip(formData.location, 150) || "Not provided"}
        Budget: ${clip(formData.budget, 100) || "Not provided"}
        Timeline: ${clip(formData.timeline, 100) || "Not provided"}
        Preferred Contact: ${clip(formData.preferredContact, 100) || "Not provided"}

        Description:
        ${clip(formData.description, 4000) || "No description provided"}
      `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Marv@them4group.com",
      subject: `New Consultation Request - ${clip(formData.firstName, 100)} ${clip(formData.lastName, 100)}`,
      text: emailContent,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to submit form" });
  }
}
