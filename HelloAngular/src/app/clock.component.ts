import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    {{now | date:format}}
  `,
  styles: []
})
export class ClockComponent implements OnInit, OnDestroy {

  @Input()
  public format = 'HH:mm:ss';

  public now = new Date();
  public interval;

  constructor() { }

  ngOnInit() {
    // Zone.js intercepter le callback async
    // et lancer la détection de changement juste après
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
