// src/css-update.ts

import { ElementSelector } from './select';
import { updateCSS, addCSSClass, removeCSSClass, toggleCSSClass, setHTMLContent } from './css';

/**
 * Updates the CSS property of selected elements.
 * @param selector - The CSS selector to find elements.
 * @param property - The CSS property to update.
 * @param value - The value to set for the CSS property.
 */
export function updateCSSProperties(selector: string, property: string, value: string): void {
    const elements = new ElementSelector(selector).getElements();
    elements.forEach(el => updateCSS(el, property, value));
}

/**
 * Adds a CSS class to all elements matching the selector.
 * @param selector - The CSS selector to find elements.
 * @param className - The CSS class to add.
 */
export function addCSSClassToElements(selector: string, className: string): void {
    const elements = new ElementSelector(selector).getElements();
    elements.forEach(el => addCSSClass(el, className));
}

/**
 * Removes a CSS class from all elements matching the selector.
 * @param selector - The CSS selector to find elements.
 * @param className - The CSS class to remove.
 */
export function removeCSSClassFromElements(selector: string, className: string): void {
    const elements = new ElementSelector(selector).getElements();
    elements.forEach(el => removeCSSClass(el, className));
}

/**
 * Toggles a CSS class on all elements matching the selector.
 * @param selector - The CSS selector to find elements.
 * @param className - The CSS class to toggle.
 */
export function toggleCSSClassOnElements(selector: string, className: string): void {
    const elements = new ElementSelector(selector).getElements();
    elements.forEach(el => toggleCSSClass(el, className));
}

/**
 * Sets the inner HTML of all elements matching the selector.
 * @param selector - The CSS selector to find elements.
 * @param html - The HTML string to set.
 */
export function setHTMLContentForElements(selector: string, html: string): void {
    const elements = new ElementSelector(selector).getElements();
    elements.forEach(el => setHTMLContent(el, html));
}
