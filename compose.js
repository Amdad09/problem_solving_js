const compose = (fn1, fn2) => {
    return function (x) {
        return fn1(fn2(x));
    };
};

const add2 = (x) => {
    return x + 2;
};
const multipy3 = (x) => {
    return x * 3;
};

const composed = compose(add2, multipy3);
console.log(composed(5));
