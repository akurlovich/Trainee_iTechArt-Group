import nodemailer from 'nodemailer';
import config from '../common/config';

class MailService {
  transport: any;

  constructor() {
    this.transport = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smpt.gamil.com',
      // port: config.SMTP_PORT,
      secure: false,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD,
      }

    })
  }

  async sendNotificationToMail(to: string, bookTitle: string) {
    await this.transport.sendMail({
      from: config.SMTP_USER,
      to,
      subject: 'Please, take back book!',
      text: `Please, return book ${bookTitle}`,
    })
  }
};

export default new MailService();
