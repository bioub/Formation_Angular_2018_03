import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let el: DebugElement;
  let expectedTodo: Todo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el  = fixture.debugElement.query(By.css('form'));
    expectedTodo = new Todo('A');
    component.todo = expectedTodo;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raised onNewTodo when submitted', () => {
    let newTodo: Todo;
    component.onNewTodo.subscribe((todo: Todo) => newTodo = todo);

    el.triggerEventHandler('submit', null);
    expect(newTodo.text).toBe(expectedTodo.text);
    expect(newTodo === expectedTodo).toBe(false); // cloned
  });
});
