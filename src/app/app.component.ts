import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formsubmit(Title:HTMLInputElement,Link:HTMLInputElement){
console.log(`${Title.value} ++++${Link.value}`)
  }
}
