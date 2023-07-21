import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../libs/email";
import ContactEmail from "../../emails/ContactEmail";
import { render } from "@react-email/render";
import { FormProps } from "../../interfaces/formProps";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: FormProps = JSON.parse(req.body);
  await sendEmail({
    to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT!,
    subject: "Contact - Personal stylist",
    html: render(ContactEmail(body)),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
