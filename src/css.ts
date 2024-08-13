// src/css.ts

/**
 * Updates the CSS property of an element.
 * @param element - The element to update.
 * @param property - The CSS property to update.
 * @param value - The value to set for the CSS property.
 */
export function updateCSS(element: HTMLElement, property: string, value: string): void {
    element.style[property as any] = value;
}

/**
 * Adds a CSS class to an element.
 * @param element - The element to update.
 * @param className - The CSS class to add.
 */
export function addCSSClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
}

/**
 * Removes a CSS class from an element.
 * @param element - The element to update.
 * @param className - The CSS class to remove.
 */
export function removeCSSClass(element: HTMLElement, className: string): void {
    element.classList.remove(className);
}

/**
 * Toggles a CSS class on an element.
 * @param element - The element to update.
 * @param className - The CSS class to toggle.
 */
export function toggleCSSClass(element: HTMLElement, className: string): void {
    element.classList.toggle(className);
}

/**
 * Sets the inner HTML content of an element.
 * @param element - The element to update.
 * @param html - The HTML string to set.
 */
export function setHTMLContent(element: HTMLElement, html: string): void {
    element.innerHTML = html;
}

/**
 * Sets a CSS property value on an HTML element.
 *
 * @param element - The target HTML element.
 * @param property - The CSS property name.
 * @param value - The value to set for the CSS property.
 */
export function setCSS(element: HTMLElement, property: string, value: string): void {
    element.style.setProperty(property, value);
}