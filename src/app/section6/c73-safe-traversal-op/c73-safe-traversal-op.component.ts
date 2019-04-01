import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c73-safe-traversal-op',
  templateUrl: './c73-safe-traversal-op.component.html',
  styleUrls: ['./c73-safe-traversal-op.component.css']
})
export class C73SafeTraversalOpComponent implements OnInit {

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
