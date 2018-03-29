import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input()
  public todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
