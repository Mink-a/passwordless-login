import { Injectable } from '@nestjs/common';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { MailerService as Mailer } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private mailer: Mailer) {}

  async sendEmail(
    createMailerDto: CreateMailerDto,
  ): Promise<string | PromiseLike<string>> {
    const { email, link } = createMailerDto;

    const emailSent = await this.mailer.sendMail({
      to: email,
      // from: '"Magic Login" <minkhant.kyaw@kbzbank.com>',
      subject: 'Test email from NestJS!',
      template: 'magic-link', // `.hbs` extension is appended automatically
      context: {
        link,
      },
    });
    console.log(emailSent);
    return 'email sent';
  }
}
