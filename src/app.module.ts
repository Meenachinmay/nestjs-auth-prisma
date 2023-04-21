import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
