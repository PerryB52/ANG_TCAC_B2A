import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../courses.service';

@Component({
  selector: 'app-c33course',
  templateUrl: './c33course.component.html',
  styleUrls: ['./c33course.component.css']
})
export class C33courseComponent{

  title: string = "List of courses";
  courses;

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  getTitle(){
    return this.title;
  }
}
