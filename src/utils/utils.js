

// Converts an object with properties into an array
export function convertToArray(obj) {
    const array = [];
    if (!obj) {
        return array;
    }

    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            const value = obj[prop];

            array.push(value);
        }
    }

    return array;
}