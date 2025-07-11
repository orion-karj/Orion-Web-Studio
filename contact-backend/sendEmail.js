const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transport = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };
  console.log(transport);
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

  const transporter = nodemailer.createTransport(transport);

  await transporter.verify(); // verify connection configuration

  const mailOptions = {
    from: `"Orion Karjevski" <${process.env.EMAIL_USER}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  console.log(mailOptions);
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
