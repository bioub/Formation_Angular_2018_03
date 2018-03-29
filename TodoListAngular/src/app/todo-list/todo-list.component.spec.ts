import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoDetailsComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains 2 elements', () => {
    component.todos = ['Item 1', 'Item 2'];
    fixture.detectChanges();

    const nbDetails = fixture.debugElement.nativeElement.querySelectorAll('app-todo-details').length;
    expect(nbDetails).toBe(2);
  });
});
