// src/events.ts

/**
 * Adds an event listener to a specified DOM element.
 * @param element - The DOM element to which the event listener will be added.
 * @param event - The type of the event to listen for (e.g., 'click', 'keydown').
 * @param handler - The function to be called when the event occurs.
 */
export function on(element: HTMLElement, event: string, handler: EventListener): void {
    element.addEventListener(event, handler);
}

/**
 * Removes an event listener from a specified DOM element.
 * @param element - The DOM element from which the event listener will be removed.
 * @param event - The type of the event to stop listening for (e.g., 'click', 'keydown').
 * @param handler - The function to be removed from the event listener list.
 */
export function off(element: HTMLElement, event: string, handler: EventListener): void {
    element.removeEventListener(event, handler);
}

/**
 * Triggers a specified event on a given DOM element.
 * @param element - The DOM element on which to trigger the event.
 * @param event - The type of the event to trigger (e.g., 'click', 'focus').
 */
export function trigger(element: HTMLElement, event: string): void {
    const evt = new Event(event); // Create a new event object
    element.dispatchEvent(evt);   // Dispatch the event on the specified element
}
