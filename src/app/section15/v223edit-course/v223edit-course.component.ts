import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { CoursesService } from '../../section3/courses.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-v223edit-course',
  templateUrl: './v223edit-course.component.html',
  styleUrls: ['./v223edit-course.component.css']
})
export class V223editCourseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log("Data", data);
   }

  ngOnInit() {
  }

}
