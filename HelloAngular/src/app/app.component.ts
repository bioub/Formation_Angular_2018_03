import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 (click)="title = 'Angular 5'">Bienvenue sur <span [innerText]="title"></span></h1>
    <h1 (click)="title = 'Angular 5'">Bienvenue sur {{title}}</h1>
    <app-clock></app-clock>
    <app-clock format="HH:mm"></app-clock>
    <app-clock [format]="horlogeFormat"></app-clock>
    <app-list (select)="prenomSelectionne = $event"></app-list>
    Prénom selectionné : {{prenomSelectionne}}
  `,
})
export class AppComponent {
  public title = 'Angular';
  public horlogeFormat = 'HH';
  public prenomSelectionne = '';
}
