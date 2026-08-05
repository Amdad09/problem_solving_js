// 01-deep-clone
const value = {
    name: 'Hamid',
    age: 23,
    experience: ['JS', 'React', 'Next.js'],
    address: {
        city: 'Dhaka',
    },
};

const deepClone = (value) => {
    if (typeof value !== 'object' || value === null) return value;

    const clone = Array.isArray(value) ? [] : {};
    console.log(clone);

    for (const key in value) {
        clone[key] = deepClone(value[key]); //['js','react']
    }

    return clone;
};

const copy = deepClone(value);

copy.address.city = 'Kushtia';
copy.name = 'Kamal';
console.log(copy);
console.log(value);
