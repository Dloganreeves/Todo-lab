import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do List';
formTodo:Todo = {} as Todo;
filter: string = ""

List: Todo[]= [
  
  {
   task: "Wash dishes",
   completed: false,
   duration: 0.5,
   priority: "HIGH",
   displayEdit: false
  },
  {
    task: "Fold clothes",
    completed: true,
    duration: 1.0,
    priority: "HIGH",
    displayEdit: false
  },
 {
      task: "Clean kitchen",
      completed: false,
      duration: 1.5,
      priority: "NORMAL",
      displayEdit: false
  },
  {
    task: "Rake leaves",
    completed: true,
    duration: 2.5,
    priority: "LOW",
    displayEdit: false
    },

]

completeTask(t:Todo):void{
  t.completed = true;
}

removeTask(t:Todo):void{
  let index:number = this.List.findIndex(x => t == x);
  this.List.splice(index, 1);
}

addTask():void{
  this.formTodo.completed = false;
  this.List.push({...this.formTodo});
}
//completeMessage(): boolean {
  //return this.allTodos.length === 0 || this.allTodos.every(todo => todo.completed);
//}
completeMessage():boolean{
  if(this.List.length == 0){
    return true;
  }
  let allComplete: boolean = true;
  this.List.forEach((t:Todo) => {
    if(t.completed == false){
      allComplete = false;
    }
  });
  return allComplete;
}
getFiltered():Todo[]{
  if(this.filter == ""){
    return this.List;
  }
  else{
    return this.List.filter((t:Todo) => t.task.includes(this.filter));
  }
}
toggleEdit (t:Todo): void {
  t.displayEdit = !t.displayEdit;
}
}