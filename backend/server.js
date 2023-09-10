const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Change this to your desired port

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'draco.malfoy9023@gmail.com', // Your Gmail email
      pass: 'gnafkapqweslmumi',
    },
  });

  const mailOptions = {
    from: 'draco.malfoy9023@gmail.com',
    to: 'draco.malfoy9023@gmail.com', // Your email where you want to receive messages
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
