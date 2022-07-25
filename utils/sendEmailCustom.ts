import nodemailer from 'nodemailer'

export function sendEmailCustom(
  args:
    | {
        from: string
        to: string
        subject: string
        text: string
      }
    | { email: string }
    | undefined
) {
  if (args) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    })
    if ('email' in args) {
      const { email } = args as {
        email: string
      }
      const mailOptions = {
        from: process.env.GMAIL_ADDRESS,
        to: process.env.GMAIL_ADDRESS,
        subject: 'Interested Individual',
        text: `This new user: ${email} is interested into discovering our resources`,
      }
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    } else {
      const { from, to, subject, text } = args as {
        from: string
        to: string
        subject: string
        text: string
      }
      const mailOptions = {
        from,
        to,
        subject,
        text,
      }
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    }
    return {
      hello: 'me',
    }
  }
  return new Error('no args found')
}
