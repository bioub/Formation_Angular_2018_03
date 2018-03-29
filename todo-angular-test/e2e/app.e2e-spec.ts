import { AppPage } from './app.po';

describe('todo-angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('TodoList');
  });

  it('should add todo', () => {
    page.navigateTo();
    page.insertTodo('Todo A');
    expect(page.getTodos().count()).toBe(1);
    expect(page.getTodos().first().getText()).toEqual('Todo A');
  });
});
