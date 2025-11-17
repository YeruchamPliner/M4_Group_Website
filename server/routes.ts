import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export function registerRoutes(app: Express): Server {
  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });

  // Form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const formData = req.body;
      
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Create email content
      const emailContent = `
        New consultation request from M4 Development website:
        
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Company: ${formData.company || 'Not provided'}
        Project Type: ${formData.projectType || 'Not provided'}
        Location: ${formData.location || 'Not provided'}
        Budget: ${formData.budget || 'Not provided'}
        Timeline: ${formData.timeline || 'Not provided'}
        Preferred Contact: ${formData.preferredContact || 'Not provided'}
        
        Description:
        ${formData.description || 'No description provided'}
      `;

      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'Marv@them4group.com',
        subject: `New Consultation Request - ${formData.firstName} ${formData.lastName}`,
        text: emailContent
      });

      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to submit form' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
