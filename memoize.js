const memoize = (fn) => {
    const cache = {};
    return function (value) {
        if (cache[value] !== undefined) {
            return cache[value];
        }
        const result = fn(value);
        cache[value] = result;
        return result;
    }
};
const square = (value) => {
    console.log('Calculating...');
    return (value * value);
};
const memoized = memoize(square);
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(7));
console.log(memoized(5));