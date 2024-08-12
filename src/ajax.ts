// src/ajax.ts

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
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.responseType = responseType;

        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network error'));

        if (method === 'POST' && data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}
