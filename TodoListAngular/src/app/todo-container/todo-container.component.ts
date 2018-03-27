import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  public todos = ['Item 1', 'Item 2'];

  constructor() { }

  ngOnInit() {
  }

}
