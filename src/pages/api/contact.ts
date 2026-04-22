import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactRequestBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name = '', email = '', subject = '', message = '' } = req.body as ContactRequestBody;

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(500).json({ message: 'Server email settings are missing' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const toEmail = process.env.CONTACT_TO_EMAIL || smtpUser;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Subject:</strong> ${subject.trim()}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form email send failed:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again.' });
  }
}