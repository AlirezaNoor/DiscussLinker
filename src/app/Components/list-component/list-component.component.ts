import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
title:string;
Link:string;
LikeCounter:number;
constructor() {
  this.title="Angular";
  this.Link="www.Angular.io";
  this.LikeCounter=10
}
  upbote(){
  this.LikeCounter+=this.LikeCounter;
  //this.likecounter=likecounter-1
  }
  downvote(){
    this.LikeCounter-=this.LikeCounter;
  }
}
