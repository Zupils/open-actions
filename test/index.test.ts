import { ajax } from '../dist/index';
import { addClass, toggleClass, setText, setCSS } from '../dist/index';
import { on, trigger } from '../dist/index';
import { animate } from '../dist/index';
import { select } from '../dist/index';
import { getInputValue, setInputValue } from '../dist/index';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../dist/index';
import { delegateEvent } from '../dist/index';
import { debounce, throttle, getDataAttribute, setDataAttribute } from '../dist/index';

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

// Test Toggle Class
test('Toggle class function should work', () => {
    const element = document.createElement('div');
    element.className = 'test';

    toggleClass(element, 'test');
    expect(element.classList.contains('test')).toBe(false);

    toggleClass(element, 'test');
    expect(element.classList.contains('test')).toBe(true);

    console.log('Element with toggled class:', element);
});

// Test Data Attributes
test('Data attribute functions should work', () => {
    const element = document.createElement('div');
    setDataAttribute(element, 'test', 'value');
    expect(getDataAttribute(element, 'test')).toBe('value');

    console.log('Element with data attribute:', element);
});

// Test Event Handling
test('Event handling should work', () => {
    const element = document.createElement('div');
    const callback = jest.fn();

    on(element, 'click', callback);
    trigger(element, 'click');

    expect(callback).toHaveBeenCalled();
});

// Test CSS Updates
test('CSS update functions should work', () => {
    const element = document.createElement('div');
    setCSS(element, 'background-color', 'red');

    const backgroundColor = getComputedStyle(element).backgroundColor;

    // Check if the background color is either the RGB value or the named color
    expect(backgroundColor).toMatch(/^(rgb\(255, 0, 0\)|red)$/);

    console.log('Element CSS:', backgroundColor);
});

// Test Animation
test('Animation function should work', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    animate(element, 'fadeIn', 1000);

    // Check if the element has the animation class
    expect(element.classList.contains('fadeIn')).toBe(true);

    console.log('Element with animation:', element);

    // Clean up
    document.body.removeChild(element);
});

// Test Select
test('Select function should work', () => {
    document.body.innerHTML = `<div id="test" class="my-class">Hello</div>`;
    const element = select('#test');

    if (element) {
        expect(element.classList.contains('my-class')).toBe(true);
        expect(element.textContent).toBe('Hello');
    } else {
        throw new Error('Element not found');
    }

    console.log('Selected element:', element);
});

// Test Form Handling
test('Form handling functions should work', () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.name = 'test';
    form.appendChild(input);

    setInputValue(form, 'test', 'value');
    expect(getInputValue(form, 'test')).toBe('value');
});

// Test Local Storage
test('Local storage functions should work', () => {
    setLocalStorage('key', 'value');
    expect(getLocalStorage('key')).toBe('value');
    removeLocalStorage('key');
    expect(getLocalStorage('key')).toBeNull();
});

// Test Event Delegation
test('Event delegation should work', () => {
    const parent = document.createElement('div');
    const child = document.createElement('button');
    child.className = 'test';
    parent.appendChild(child);
    document.body.appendChild(parent);

    const callback = jest.fn();
    delegateEvent(parent, 'click', '.test', callback);

    child.click();
    expect(callback).toHaveBeenCalled();

    // Clean up
    document.body.removeChild(parent);
});

// Test Debounce
test('Debounce function should work', done => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 200);

    debouncedCallback();
    debouncedCallback();
    debouncedCallback();

    setTimeout(() => {
        expect(callback).toHaveBeenCalledTimes(1);
        done();
    }, 250);
});

// Test Throttle
test('Throttle function should work', done => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 200);

    // Call the throttled function multiple times in quick succession
    throttledCallback();  // 1st call
    throttledCallback();  // 2nd call
    throttledCallback();  // 3rd call
    // Wait for slightly more than the throttle duration to ensure only one call
    setTimeout(() => {
        try {
            // Expect the callback to be called
            expect(callback).toHaveBeenCalledTimes(2);
            done();
        } catch (error) {
            done(error);
        }
    }, 250);  // Ensure this is longer than the throttle limit
}, 10000);  // Increase timeout if necessary
