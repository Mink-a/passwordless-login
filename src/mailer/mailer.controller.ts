import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateMailerDto } from './dto/create-mailer.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async sendEmail(@Body() createEmailDto: CreateMailerDto): Promise<string> {
    return this.mailerService.sendEmail(createEmailDto);
  }
}
