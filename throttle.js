const throttle = (fn, delay) => {
    let lastExecutedTime = 0;

    return function (text) {
        const currentTime = Date.now();
        if (currentTime - lastExecutedTime >= delay) {
            fn(text);
            lastExecutedTime = currentTime;
        }
    };
};

function sayHi(text) {
    console.log('Scrolling: ', text);
}
const throttled = throttle(sayHi, 500);
throttled('H')

setTimeout(() => {
    throttled('A');
}, 300);
setTimeout(() => {
    throttled('B');
}, 600);
setTimeout(() => {
    throttled('C');
}, 1200);
