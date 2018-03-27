import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output()
  public add = new EventEmitter<string>();
  public newTodo = 'Initial Value';

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    // event.preventDefault(); // fait automatiquement si import de FormsModule
    this.add.emit(this.newTodo);
  }
}
