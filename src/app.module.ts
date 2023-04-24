import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { MailController } from './mail/mail.controller';
import { SendgridService } from './sendgrid/sendgrid.service';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, PostModule],
  controllers: [AppController, MailController],
  providers: [AppService, ChatGateway, SendgridService, PrismaService],
})
export class AppModule {}
