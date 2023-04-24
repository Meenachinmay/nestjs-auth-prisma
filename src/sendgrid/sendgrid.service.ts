import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_API'));
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    console.log(`email has been sent to ${mail.to} `);
    return transport;
  }
}
