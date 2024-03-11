import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do List';


List: Todo[]= [
  
  {
   task: "Wash dishes",
   completed: false,
   duration: 0.5
  },
  {
    task: "Fold clothes",
    completed: true,
    duration: 1.0
  },
 {
      task: "Clean kitchen",
      completed: false,
      duration: 1.5
  },
  {
    task: "Rake leaves",
    completed: true,
    duration: 2.5
    },

]
}