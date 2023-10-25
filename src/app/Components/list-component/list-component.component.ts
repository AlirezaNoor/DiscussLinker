import { Component } from '@angular/core';
import {identity} from "rxjs";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
 Title:string;
 Link:string;
 Likecounter:number;
 constructor() {
   this.Title="Angular";
   this.Link="Angular.io";
   this.Likecounter=10
 }

  upvote(){
   console.warn("this is like button")
  }
  downvote(){
   console.warn("this is dislike button")
  }
}
