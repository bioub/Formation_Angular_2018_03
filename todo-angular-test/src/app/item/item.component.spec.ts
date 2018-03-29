import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.todo = {text: 'A'}; // Passe une valeur à @Input()
    fixture.detectChanges();
    el  = fixture.debugElement.query(By.css('p'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display value', () => {
    expect(el.nativeElement.textContent).toContain('A');
  });
});
