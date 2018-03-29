import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ TodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit todo on submit', () => {
    component.newTodo = 'Acheter du pain';

    component.add.subscribe((todo) => {
      expect(todo).toBe('Acheter du pain');
    });

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    // component.addTodo();
  });
});
