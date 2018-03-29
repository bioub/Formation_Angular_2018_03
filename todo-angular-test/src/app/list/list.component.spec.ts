import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let els: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.todos = [{text: 'A'}, {text: 'B'}]; // Passe une valeur à @Input()
    fixture.detectChanges();

    els  = fixture.debugElement.queryAll(By.css('todo-item'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains 2 todos', () => {
    expect(els.length).toBe(2);
  });

  it('should contains A in first item', () => {
    expect(els[0].nativeElement.textContent).toContain('A');
  });
});
