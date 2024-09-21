import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      await transporter.sendMail({
        from: email,
        to: 'daniel.korienko@gmail.com',
        subject: `New Question from ${email}`,
        text: `Email: ${email}\n\nQuestion: ${message}`,
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error sending email' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
