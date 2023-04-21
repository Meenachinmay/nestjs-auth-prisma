import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostType } from './types/post.type';
import { PostDto } from './dto/index.dto';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

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

  // get one post only
  @Get('/get-one/:id')
  getOnePostWithId(@Param() id: number): Promise<PostType> {
    return this.postService.getOnePostWithId(id);
  }

  @Post('/create-post')
  createPost(@Body() postDto: PostDto): Promise<PostType> {
    return this.postService.createPost(postDto);
  }
}
