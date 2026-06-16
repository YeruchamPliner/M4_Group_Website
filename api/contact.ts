import nodemailer from "nodemailer";

// Vercel serverless function — replaces the Express /api/contact route.
// Receives the consultation form and emails the lead to Marv@them4group.com.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const formData =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    if (!formData.firstName || !formData.lastName || !formData.email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
        New consultation request from M4 Development website:

        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Company: ${formData.company || "Not provided"}
        Project Type: ${formData.projectType || "Not provided"}
        Location: ${formData.location || "Not provided"}
        Budget: ${formData.budget || "Not provided"}
        Timeline: ${formData.timeline || "Not provided"}
        Preferred Contact: ${formData.preferredContact || "Not provided"}

        Description:
        ${formData.description || "No description provided"}
      `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Marv@them4group.com",
      subject: `New Consultation Request - ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to submit form" });
  }
}
