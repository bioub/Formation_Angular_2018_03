export function bootstrap(module: any) {
  const map: any = {
    // 'app-clock': ClockComponent,
  };

  module.declarations.forEach((Component: any) => {
    const options: any = Component.getOptions();
    map[options.selector] = Component;
  });

  for (const selector in map) {
    const element = document.querySelector(selector);
    const Component = map[selector];

    const componentInstance = new Component(element);
    componentInstance.ngOnInit();
  }
}

export class HttClient {
  constructor() {
    
  }
}