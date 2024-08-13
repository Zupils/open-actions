// src/utils.ts

/**
 * Retrieves the value of a data attribute from a specified DOM element.
 * @param element - The element from which to retrieve the data attribute.
 * @param attribute - The name of the data attribute (without the "data-" prefix).
 * @returns The value of the data attribute, or null if it doesn't exist.
 */
export function getDataAttribute(element: HTMLElement, attribute: string): string | null {
    return element.getAttribute(`data-${attribute}`);
}

/**
 * Sets a data attribute on a specified DOM element.
 * @param element - The element on which to set the data attribute.
 * @param attribute - The name of the data attribute (without the "data-" prefix).
 * @param value - The value to set for the data attribute.
 */
export function setDataAttribute(element: HTMLElement, attribute: string, value: string): void {
    element.setAttribute(`data-${attribute}`, value);
}

/**
 * Creates a debounced version of a function that delays its execution until after a specified amount of time has elapsed
 * since the last time it was invoked.
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before invoking the function.
 * @returns A debounced version of the provided function.
 */
export function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return function(this: any, ...args: any[]) { // Explicitly type `this` as `any`
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}



/**
 * Creates a throttled version of a function that only invokes the original function at most once per specified time period.
 * @param func - The function to throttle.
 * @param limit - The time period (in milliseconds) to limit the function calls.
 * @returns A throttled version of the original function.
 */
export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
    let lastFunc: ReturnType<typeof setTimeout> | undefined;
    let lastRan: number | undefined;

    return function(this: any, ...args: Parameters<T>) {
        const context = this;
        const now = Date.now();
        if (lastRan === undefined || now - lastRan >= limit) {
            func.apply(context, args);
            lastRan = now;
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                func.apply(context, args);
                lastRan = now;
            }, limit - (now - lastRan));
        }
    } as T;
}