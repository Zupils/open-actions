// src/ajax.ts

/**
 * Performs an AJAX request using the XMLHttpRequest API.
 * @param config - The configuration object for the request.
 * @param config.url - The URL to send the request to.
 * @param config.method - The HTTP method to use (default: 'GET').
 * @param config.data - The data to send with the request (for POST requests).
 * @param config.headers - Additional headers to include in the request.
 * @param config.responseType - The type of response to expect (default: 'json').
 * @returns A Promise that resolves with the response data or rejects with an error.
 */
export function ajax({
                         url,
                         method = 'GET',
                         data = null,
                         headers = {},
                         responseType = 'json',
                     }: {
    url: string;
    method?: string;
    data?: any;
    headers?: Record<string, string>;
    responseType?: XMLHttpRequestResponseType;
}): Promise<any> {
    return new Promise((resolve, reject) => {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Initialize the request
        xhr.open(method, url, true);
        xhr.responseType = responseType;

        // Set request headers
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });

        // Handle the response when the request completes
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Resolve the promise with the response data if the request was successful
                resolve(xhr.response);
            } else {
                // Reject the promise with an error if the request failed
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        // Handle network errors
        xhr.onerror = () => reject(new Error('Network error'));

        // Send the request
        if (method === 'POST' && data) {
            // If sending data with a POST request, set the Content-Type header and stringify the data
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        } else {
            // For GET or other methods, send the request without data
            xhr.send();
        }
    });
}
