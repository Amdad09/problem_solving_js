const flatten = (arr) => {
    if (!Array.isArray(arr)) return 'Invalid';
    const newArray = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            const result = flatten(element);
            newArray.push(...result);
        } else {
            newArray.push(element);
        }
    }
    return newArray;
};

console.log(flatten([1, 2, [3, 4], [5, 6]]));
