import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  public todo = new Todo();

  @Output()
  public onNewTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // Si sous-objets ou sous-tableaux utiliser lodash.cloneDeep
    const clonedTodo = Object.assign(new Todo(), this.todo);
    this.onNewTodo.emit(clonedTodo);
  }

}
