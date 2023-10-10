import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'This actions return all'})
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `This action returns a course with id ${id}`
  }

  @Post()
  create(@Body() body) {
    return body
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
  
    console.log(body); 
    return `Update courses with ID ${body.id}`
  }

  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return `Remove id ${id}`
  }
}
