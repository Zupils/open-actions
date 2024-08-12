// test/index.test.ts

import { ajax } from '../dist';
import { $, addClass, setText } from '../dist';
import { on, trigger } from '../dist';

// Test AJAX
test('AJAX request should succeed', async () => {
    const response = await ajax({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
    expect(response).toBeDefined();
    console.log('AJAX Response:', response);
});

// Test DOM Manipulation
test('DOM manipulation functions should work', () => {
    const element = document.createElement('div');
    setText(element, 'Hello, World!');
    addClass(element, 'greeting');

    expect(element.textContent).toBe('Hello, World!');
    expect(element.classList.contains('greeting')).toBe(true);

    console.log('Element:', element);
});

// Test Event Handling
test('Event handling should work', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    on(element, 'click', callback);
    trigger(element, 'click');

    expect(callback).toHaveBeenCalled();
});
