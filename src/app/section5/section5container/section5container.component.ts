import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5container',
  templateUrl: './section5container.component.html',
  styleUrls: ['./section5container.component.css']
})
export class Section5containerComponent implements OnInit {

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'here is the body of a tweet',
    isLiked: false,
    likesCount: 0
  }

  onFavoriteChanged(eventArgs){
    console.log("Favorite changed: ", eventArgs);
  }

  onClickChanged(eventArgs){
    console.log("Favorite changed: ", eventArgs);
  }

  constructor() { }

  ngOnInit() {
  }

}
