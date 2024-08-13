// src/eventDelegation.ts

/**
 * Attach an event listener to a parent element that handles events for its children.
 *
 * @param parent - The parent element.
 * @param event - The event type to listen for.
 * @param selector - The selector for child elements.
 * @param handler - The event handler function.
 */
export function delegateEvent(parent: HTMLElement, event: string, selector: string, handler: EventListener): void {
    parent.addEventListener(event, (e) => {
        const target = e.target as HTMLElement;
        if (target.matches(selector)) {
            handler.call(target, e);
        }
    });
}
