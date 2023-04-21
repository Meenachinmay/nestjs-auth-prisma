import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}
