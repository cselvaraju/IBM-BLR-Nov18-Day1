import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>Welcome {{ person }}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day01';
  person = 'Amitabh';
}
