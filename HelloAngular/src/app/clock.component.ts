import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    {{now | date:format}}
  `,
  styles: []
})
export class ClockComponent implements OnInit {

  @Input()
  public format = 'HH:mm:ss';

  public now = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000)
  }

}
