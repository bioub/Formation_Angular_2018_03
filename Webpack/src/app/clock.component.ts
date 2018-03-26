// @Component({
//   selector: 'app-clock',
// })
export class ClockComponent {

  constructor(private container: HTMLElement) {}

  render() {
    const now = new Date();
    this.container.innerText = now.toLocaleTimeString();
  }

  ngOnInit() {
    this.render();
    setInterval(this.render.bind(this), 1000);
  }

  static getOptions() {
    return {
      selector: 'app-clock',
    };
  }
}