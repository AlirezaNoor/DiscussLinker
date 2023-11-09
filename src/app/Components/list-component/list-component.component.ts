import { Component } from '@angular/core';
import {identity} from "rxjs";
import {Art} from "../../../../Model/art";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
 art:Art;
 constructor() {
  this.art=new Art("Angular","www.angular.io",5);
 }

  upvote(){
   this.art.upvote()
  }
  downvote(){
    this.art.downvote()
  }
}
