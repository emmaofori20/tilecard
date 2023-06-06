import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-components';

  myTodoList: any = [
    {"Date":"June 24", "Day":"Tuesday", "Task":"Change Oil", "AssignedTo":"Suzzy Mills" },
    {"Date":"July 25", "Day":"Monday", "Task":"Fix Break Light", "AssignedTo":"Godfred Chu" },
    {"Date":"Sept 23", "Day":"Sunday", "Task":"Charge battery", "AssignedTo":"Emma Li" },
    {"Date":"Oct 25", "Day":"Wednesday", "Task":"Wash vehicle", "AssignedTo":"Daniel Chi" },
  ]
}
