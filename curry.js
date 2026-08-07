const curry = (fn) => {
    let firstValue;
    let secondValue;

    return function (a) {
        firstValue = a;
        return function (b) {
            secondValue = b;
            return fn(firstValue, secondValue);
        }
    }
};

const calculatePrice = (tax, price) => price + (price * tax);

const carriedSum = curry(calculatePrice)(.10);
console.log(carriedSum(400));
console.log(carriedSum(600));
console.log(carriedSum(300));
console.log(carriedSum(200));