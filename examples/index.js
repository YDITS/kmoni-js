/*!
 * 
 * Kmoni.js
 * 
 * Copyright (C) 2025-2026 よね/Yone
 * Licensed under the MIT License.
 * 
 * https://github.com/YDITS/kmoni-js
 * 
 */

const {
    KmoniClient,
    KmoniData,
} = await importKmoni();

const kmoniClient = new KmoniClient();

kmoniClient.startPolling({
    intervalMs: 1000,
    loop: (data) => handleData(data),
    onError: (error) => handleError(error),
});

/**
 * @returns {{
 *     KmoniClient,
 *     KmoniData,
 * }}
 */
async function importKmoni() {
    try {
        return await import("../dist/index.js");
    } catch (error) {
        console.error("Error: Failed to load the Kmoni module.\nPlease ensure the project is built by running `npm run build`.");
        process.exit(1);
    }
}

/**
 * @param {KmoniData} data
 * @returns {void}
 */
function handleData(data) {
    if (!(data instanceof KmoniData)) {
        console.error("Invalid data type received:", data);
        return;
    }

    console.log(JSON.stringify(data, null, 2));
}

/**
 * @param {unknown} error
 * @returns {void}
 */
function handleError(error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Polling error:", message);
}
