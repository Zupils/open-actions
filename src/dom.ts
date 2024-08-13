// src/dom.ts

/**
 * Selects a single DOM element based on the provided CSS selector.
 * @param selector - The CSS selector to match elements.
 * @returns The first matching element or null if no match is found.
 */
export function $(selector: string): HTMLElement | null {
    return document.querySelector(selector);
}

/**
 * Adds a class to a specified DOM element.
 * @param element - The element to which the class should be added.
 * @param className - The class name to add.
 */
export function addClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
}

/**
 * Removes a class from a specified DOM element.
 * @param element - The element from which the class should be removed.
 * @param className - The class name to remove.
 */
export function removeClass(element: HTMLElement, className: string): void {
    element.classList.remove(className);
}

/**
 * Toggles a class on a specified DOM element.
 * If the class is present, it will be removed; if not, it will be added.
 * @param element - The element on which to toggle the class.
 * @param className - The class name to toggle.
 */
export function toggleClass(element: HTMLElement, className: string): void {
    element.classList.toggle(className);
}

/**
 * Sets the text content of a specified DOM element.
 * @param element - The element whose text content should be set.
 * @param text - The text content to set.
 */
export function setText(element: HTMLElement, text: string): void {
    element.textContent = text;
}

/**
 * Sets the HTML content of a specified DOM element.
 * @param element - The element whose HTML content should be set.
 * @param html - The HTML content to set.
 */
export function setHTML(element: HTMLElement, html: string): void {
    element.innerHTML = html;
}
