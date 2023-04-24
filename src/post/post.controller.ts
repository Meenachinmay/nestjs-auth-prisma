import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostDto } from './dto/index.dto';
import { PostService } from './post.service';
import { PostType } from './types/post.type';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // get many posts
  @Get('/get')
  getHello(): Promise<PostType[]> {
    return this.postService.getPost();
  }

  // get one post only
  @Get('/get-one')
  getOnePost(): Promise<PostType> {
    return this.postService.getOnePost();
  }

  @Post('/create')
  createPost(@Body() postDto: PostDto): Promise<PostType> {
    return this.postService.createPost(postDto);
  }
}
