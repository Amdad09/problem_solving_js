const pipe = (...fns) => {
    return function (x) {
        // return fn2(fn1(x));
        return fns.reduce((acc, fn) => {
            return fn(acc);
        },x)
    }
};

const add2 = (x) => x + 2;
const multiply2 = (x) => x * 2;

const piped = pipe(add2, multiply2);
console.log(piped(3));