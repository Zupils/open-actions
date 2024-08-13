// src/select.ts

export class ElementSelector {
    private selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Retrieves all elements matching the selector.
     * @returns An array of HTMLElement objects.
     */
    public getElements(): HTMLElement[] {
        const elements = Array.from(document.querySelectorAll(this.selector));
        return elements as HTMLElement[];
    }

    /**
     * Retrieves the first element matching the selector.
     * @returns The first HTMLElement matching the selector or null if none is found.
     */
    public getFirstElement(): HTMLElement | null {
        return document.querySelector(this.selector);
    }
}
/**
 * Selects an HTML element based on the provided selector.
 *
 * @param selector - The CSS selector to match the element.
 * @returns The selected HTML element or null if no element matches.
 */
export function select(selector: string): HTMLElement | null {
    return document.querySelector(selector);
}