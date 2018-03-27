import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <p [ngClass]="{visible: show}">
      list works!
    </p>
    <p [style.display]="(show) ? 'block' : 'none'">
      Display block ou none
    </p>
    <p *ngIf="show">
      Affiche si show true
    </p>
    <p *ngIf="!show">
      Affiche si show false
    </p>
    <ul>
      <li *ngFor="let prenom of prenoms; index as i; first as isFirst">
        {{prenom}} {{i}} <span *ngIf="isFirst">Premier</span>
        <button (click)="select.emit(prenom)">select</button>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  public prenoms = ['Jean', 'Eric'];
  public show = false;

  @Output()
  public select = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
