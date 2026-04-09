import { config as loadEnv } from 'dotenv';
import nodemailer from 'nodemailer';

loadEnv({ path: '.env.local' });
loadEnv();

const required = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'MAIL_TO'];

function isPlaceholder(value = '') {
  const normalized = String(value).toLowerCase();
  return (
    normalized.includes('your-email') ||
    normalized.includes('xxxxxxxx') ||
    normalized.includes('app-password')
  );
}

function missingConfig() {
  return required.filter((key) => {
    const value = process.env[key];
    return !value || isPlaceholder(value);
  });
}

function sanitize(value = '') {
  return String(value).trim();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missing = missingConfig();
  if (missing.length > 0) {
    return res.status(500).json({ error: `Missing server config: ${missing.join(', ')}` });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanSubject = sanitize(subject) || 'New portfolio contact message';
    const cleanMessage = sanitize(message);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        // Google shows app passwords in 4-char groups; SMTP expects a plain token.
        pass: String(process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')
      }
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.GMAIL_USER,
      to: process.env.MAIL_TO,
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject}`,
      text: `New message from portfolio contact form\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Subject:</strong> ${cleanSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br/>')}</p>
      `
    });

    return res.status(200).json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    const detail = process.env.NODE_ENV === 'production' ? '' : ` ${error.message}`;
    return res.status(500).json({ error: `Unable to send message right now. Please try again later.${detail}` });
  }
}
