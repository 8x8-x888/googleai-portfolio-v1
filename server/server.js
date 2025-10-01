import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes' },
});

app.use('/api/', apiLimiter);

const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://your-deployed-frontend-url.com'] // IMPORTANT: Replace with your actual frontend URL
  : ['http://localhost:5173'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'POST',
};
app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/contact', async (req, res) => {
    if (req.header('X-API-Secret') !== process.env.API_SECRET_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.SENDER_EMAIL}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Portfolio Lead: ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
        html: `<div style="font-family: sans-serif; padding: 20px; border: 1px solid #ccc;">
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <hr style="margin: 20px 0;">
            <p style="white-space: pre-wrap;">${message}</p>
        </div>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.listen(port, () => {
    console.log(`Secure contact backend listening on port ${port}`);
});