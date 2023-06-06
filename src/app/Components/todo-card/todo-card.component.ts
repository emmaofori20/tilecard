import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
@Input() date!: string;
@Input() day!: string;
@Input() task!: string;
@Input() assignedTo!: string;


}
