import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  
  @Get()
  findAll() {
    return 'This action returns all courses'
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `This action returns a course with id ${id}`
  }

  @HttpCode(204)
  @Post()
  create(@Body() body) {
    return body
  }
}
