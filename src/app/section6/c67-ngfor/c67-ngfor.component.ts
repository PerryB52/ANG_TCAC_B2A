import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c67-ngfor',
  templateUrl: './c67-ngfor.component.html',
  styleUrls: ['./c67-ngfor.component.css']
})
export class C67NgforComponent implements OnInit {

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

}
