import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todo: string = 'sleep now now';
  public newTodo: string = '';
  public allTodo:Array<string> = []
  writeTodo() {
    // alert();
    console.log(this.newTodo);
  }
  addTodo(){
    this.allTodo.push(this.newTodo)
    console.log(this.allTodo);
    
  }
}
