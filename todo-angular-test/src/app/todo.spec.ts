import { Todo } from './todo';

describe('Todo', () => {

  it('should have text undefined with empty constructor', () => {
    const todo = new Todo();
    expect(todo.text).toBeUndefined();
  });

  it('should create a todo with the good text value', () => {
    const value = 'Hello todo';
    const todo = new Todo(value);
    expect(todo.text).toBe(value);
  });

});
