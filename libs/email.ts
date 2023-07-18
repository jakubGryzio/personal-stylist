import nodemailer from "nodemailer";
import { EmailPayload } from "../interfaces/emailPayload";

// Replace with your SMTP credentials
const serviceOptions = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...serviceOptions,
  });

  return await transporter.sendMail({
    from: process.env.EMAIL,
    ...data,
  });
};
