import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostType } from './types/post.type';
import { PostDto } from './dto/index.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismeService: PrismaService) {}

  async getPost(): Promise<PostType[]> {
    const posts = await this.prismeService.post.findMany({});
    return posts;
  }

  async getOnePost(): Promise<PostType> {
    return {
      title: 'Hello, i am there',
      description: 'one two three four',
      author: 'chinmay anand',
    };
  }

  async createPost(postDto: PostDto): Promise<PostType> {
    const post = await this.prismeService.post.create({
      data: {
        title: postDto.title,
        description: postDto.description,
        author: postDto.author,
      },
    });
    return post;
  }
}
