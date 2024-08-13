// src/animation.ts

/**
 * Adds a CSS animation to an element.
 * @param element - The element to animate.
 * @param animationName - The name of the CSS animation (as defined in CSS).
 * @param duration - The duration of the animation (e.g., '1s', '500ms').
 */
export function addAnimation(element: HTMLElement, animationName: string, duration: string): void {
    element.style.animation = `${animationName} ${duration}`;
}

/**
 * Removes a CSS animation from an element.
 * @param element - The element to stop animating.
 */
export function removeAnimation(element: HTMLElement): void {
    element.style.animation = 'none';
}

/**
 * Toggles a CSS animation on an element.
 * @param element - The element to toggle animation on.
 * @param animationName - The name of the CSS animation (as defined in CSS).
 * @param duration - The duration of the animation (e.g., '1s', '500ms').
 */
export function toggleAnimation(element: HTMLElement, animationName: string, duration: string): void {
    if (element.style.animation) {
        removeAnimation(element);
    } else {
        addAnimation(element, animationName, duration);
    }
}
/**
 * Applies an animation class to an element and optionally removes it after a delay.
 *
 * @param element - The target HTML element.
 * @param animationClass - The CSS class that defines the animation.
 * @param duration - Optional duration in milliseconds after which to remove the class.
 */
export function animate(element: HTMLElement, animationClass: string, duration?: number): void {
    element.classList.add(animationClass);

    if (duration) {
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, duration);
    }
}