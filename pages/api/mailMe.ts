import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

interface ApiBody {
  email: string;
  name: string;
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body: ApiBody = req.body;

    const ACCOUNT_EMAIL = process.env.ACCOUNT_EMAIL;
    const ACCOUNT_PASS = process.env.ACCOUNT_PASS;

    console.log(ACCOUNT_EMAIL);
    console.log(ACCOUNT_PASS);

    let transporter = nodemailer.createTransport({
      host: "https://mariodev.vercel.app",
      secure: true,
      service: "gmail",

      auth: {
        user: ACCOUNT_EMAIL,
        pass: ACCOUNT_PASS,
      },
    });

    await transporter.sendMail({
      from: body.email,
      to: process.env.ACCOUNT_PASS,
      subject: `From ${body.name} - ${body.email}`,
      html: `<p>this email was sent by ${body.email}</p> <br /> ${body.message}`,
    });

    res.status(200).json({
      message: "Email was sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      message:
        "Something went wrong! Try copying my contact info from the menu!",
    });
  }
};
