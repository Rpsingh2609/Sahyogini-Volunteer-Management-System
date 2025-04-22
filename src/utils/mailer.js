import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail", // Change if using another provider
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
