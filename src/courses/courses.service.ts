import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Nestjs",
      description: "Fundamentals nest js",
      tags: ["nodejs", "nestjs", "typescript"]
    }
  ]

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find(course => course.id === id)
    if (!course) {
      throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return course
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO)
  }

  update(id: number, updateCoursesDTO: any) {
    const existCourse = this.findOne(id)

    if (existCourse as any) {
      const index = this.courses.findIndex(course => course.id === id);
      this.courses[index] = {
        id,
        ...updateCoursesDTO
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course)=> course.id == id )

    if (index >= 0) {
      this.courses.splice(index, 1)
    }
  }
}
