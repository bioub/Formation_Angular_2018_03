interface HorlogeOptions {
  format?: string;
}

class Horloge {

  constructor(private container: HTMLElement, options?: HorlogeOptions) {
    if (!container) {
      throw new Error('container is not defined');
    }
  }

  private render() {
    const now = new Date();
    this.container.innerText = now.toLocaleTimeString();
  }

  start() {
    this.render();
    setInterval(this.render.bind(this), 1000);
  }
}

const container = document.querySelector<HTMLElement>('app-horloge');
const clock = new Horloge(container, { format: 'HH:mm:ss' });


function horlogeFactory(container, type: string): Horloge {
  return new Horloge(container);
}
