import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];

  insertTodo(todo) {
    this.todos = [todo, ...this.todos];
  }
}
