const debounce = (fn, delay) => {
    let timer;
    return function (text) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(text);
        }, delay);
    };
};

// for searching
const search = (text) => {
    console.log('Searching: ', text);
};

const betterSearch = debounce(search, 500);
betterSearch('H');
betterSearch('He');
betterSearch('Hel');
betterSearch('Hell');
betterSearch('Hello');
