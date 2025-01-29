import { Controller, Get, Post, Req, HttpCode  } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {

  @Get('/test')
  getTest(@Req() request: Request):string{

    console.log(request.query?.name)

    return 'this is user'
  }

  @Post('/test2')
  getTest2(): object {

    return {
      code:200,
      data:'this is user post'
    }
  }
}
