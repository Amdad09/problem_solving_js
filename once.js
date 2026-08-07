const once = (fn) => {
    let isCalled = false;
    let result;

    return function (...args) {
        if (!isCalled) {
            isCalled = true;
            result = fn(...args);
            return result;
        }
        return result;
    };
};

const greet = (name) => {
    console.log('Executing...');
    return name;
};

const onceGreet = once(greet);
console.log(onceGreet('Hamid'));
console.log(onceGreet('Masud'));
