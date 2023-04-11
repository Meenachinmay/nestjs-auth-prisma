import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bc from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  hashPassword(data: string) {
    return bc.hash(data, 10);
  }

  async signupLocal(dto: AuthDto) {
    const hash = await this.hashPassword(dto.password);
    const newUser = this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
        name: dto.name
      },
    });
  }
  signinLocal() {}
  logoutLocal() {}
  refreshTokens() {}
}
