// src/dom.ts

export function $(selector: string): HTMLElement | null {
    return document.querySelector(selector);
}

export function addClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
}

export function removeClass(element: HTMLElement, className: string): void {
    element.classList.remove(className);
}

export function toggleClass(element: HTMLElement, className: string): void {
    element.classList.toggle(className);
}

export function setText(element: HTMLElement, text: string): void {
    element.textContent = text;
}

export function setHTML(element: HTMLElement, html: string): void {
    element.innerHTML = html;
}
