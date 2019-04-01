import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
import { V223editCourseComponent } from '../v223edit-course/v223edit-course.component';

@Component({
  selector: 'app-section15container',
  templateUrl: './section15container.component.html',
  styleUrls: ['./section15container.component.css']
})
export class Section15containerComponent {

  v211isChecked = true;
  v212isChecked = true;
  v213colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'}
  ]
  v213FavColor = 2;
  v216minDate = new Date(2017, 1, 1);
  v216maxDate = new Date(2017, 8, 1);
  v219categories = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'}
  ]
  v220progress = 0;
  v220timer;
  v220isLoading = false;

  constructor(private dialog: MatDialog) {
    // this.v220timer = setInterval(() => {
    //   this.v220progress++;
    //   if(this.v220progress == 100) clearInterval(this.v220timer);
    // }, 20);

    this.v220isLoading = true;
    this.v220getCourses()
      .subscribe(x => this.v220isLoading = false)
   }

  onChange($event){
    console.log($event);
  }

  v219selectCategory(category) {
    this.v219categories.filter(c => c != category).forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  v220getCourses(){
    return Observable.timer(2000);
  }

  v223openDialog(){
    this.dialog.open(V223editCourseComponent, {
      data: { courseId: 1}
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }
}
