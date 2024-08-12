// src/events.ts

export function on(element: HTMLElement, event: string, handler: EventListener): void {
    element.addEventListener(event, handler);
}

export function off(element: HTMLElement, event: string, handler: EventListener): void {
    element.removeEventListener(event, handler);
}

export function trigger(element: HTMLElement, event: string): void {
    const evt = new Event(event);
    element.dispatchEvent(evt);
}
