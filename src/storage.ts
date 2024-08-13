// src/storage.ts

/**
 * Set an item in localStorage.
 *
 * @param key - The key under which the data will be stored.
 * @param value - The value to store.
 */
export function setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

/**
 * Get an item from localStorage.
 *
 * @param key - The key of the item to retrieve.
 * @returns The value associated with the key, or null if not found.
 */
export function getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
}

/**
 * Remove an item from localStorage.
 *
 * @param key - The key of the item to remove.
 */
export function removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
}
