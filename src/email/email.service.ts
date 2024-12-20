import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
const mailconfig = {
  host: 'mail.company.test',
  port: 25,
  secure: false,
  auth: {
    user: 'info@company.test',
    pass: 'onfopa$$',
  },
  tls: { rejectUnauthorized: false },
};

interface IEmail {
  subject: string;
  from: string;
  to: string;
  html: string;
}

@Injectable()
export class EmailService {
  transporter = nodemailer.createTransport(mailconfig);

  async send(email: IEmail) {
    return this.transporter.sendMail(email);
  }
}
