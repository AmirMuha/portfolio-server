import {
  __prod__,
} from "../constants/envs-and-consts";
import md from "markdown-it";
import nodemailer from "nodemailer";

export enum EmailTypes {
  CONFIRMATION = "CONFIRMATION",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  NORMAL = "NORMAL",
}
interface EmailOptions {
  type: EmailTypes;
  subject: string;
  from: string;
  to: string;
  token?: string;
  confirmation_code?: number;
  message?: string;
}

export const sendEmail = async ({
  type,
  subject,
  to,
  token,
  confirmation_code,
  message,
  from = "test@test.com",
}: EmailOptions): Promise<string | any> => {
  try {
    if (!type) throw new Error("Type of the email must be set.");
    let testAccount = await nodemailer.createTestAccount();
    let htmlBody = ``;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST! as any,
      port: process.env.EMAIL_PORT! as any,
      secure: __prod__ ? true : false, // true for 465, false for other ports
      auth: {
        user: !__prod__ ? testAccount.user : process.env.EMAIL_USERNAME!, // generated ethereal user
        pass: !__prod__ ? testAccount.pass : process.env.EMAIL_PASSWORD!, // generated ethereal password
      },
    });
    if (type === EmailTypes.CONFIRMATION && confirmation_code) {
      htmlBody = `
        <p>
          <b>Confirmation token: </b><span>${token}</span>
          <b>Confirmation Code: </b><span>${confirmation_code}</span>
        </p>
      `;
    }
    if (type === EmailTypes.FORGOT_PASSWORD) {
      htmlBody = `
        <p>
          <b>Forgot Password Code: </b><span>${confirmation_code}</span>
          <b>Forgot Password Token: </b><span>${token}</span>
        </p>
      `;
    }
    if (type === EmailTypes.NORMAL) {
      htmlBody = md({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true
      }).render(message!);
    }
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: htmlBody,
    });
    if (!__prod__) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
