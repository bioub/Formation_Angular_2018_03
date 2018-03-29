import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsComponent } from './todo-details.component';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render todo input', () => {
    component.todo = 'Acheter du pain';
    fixture.detectChanges();
    const pContent = fixture.debugElement.nativeElement.querySelector('p').innerText;
    expect(pContent).toContain('Acheter du pain');
  });

});
