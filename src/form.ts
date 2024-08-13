// src/form.ts

/**
 * Get the value of a form input by its name.
 *
 * @param form - The form element.
 * @param name - The name attribute of the input.
 * @returns The value of the input.
 */
export function getInputValue(form: HTMLFormElement, name: string): string | null {
    const input = form.querySelector(`[name=${name}]`) as HTMLInputElement;
    return input ? input.value : null;
}

/**
 * Set the value of a form input by its name.
 *
 * @param form - The form element.
 * @param name - The name attribute of the input.
 * @param value - The value to set.
 */
export function setInputValue(form: HTMLFormElement, name: string, value: string): void {
    const input = form.querySelector(`[name=${name}]`) as HTMLInputElement;
    if (input) {
        input.value = value;
    }
}
