import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';

import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule as Mailer } from '@nestjs-modules/mailer';
// import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    Mailer.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, // use SSL
          auth: {
            user: '---@gmail.com---',
            pass: '---password---',
          },
        },
        defaults: {
          from: `"No Reply" <----@gmail.com>`,
        },
        template: {
          dir: './src/mailer/templates',
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
