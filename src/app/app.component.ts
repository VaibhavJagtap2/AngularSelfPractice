import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';
  name = "Vaibhav"

  getName(){
    return this.name
  }
  obj={
    name: 'Anita',
    age : 49
  }
  arr=['Anita','Vaibhav',"Pratiksha"]
}
