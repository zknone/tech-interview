const array = [1, 3, 5];

const isIncludes = (array, number) => {
    return array.includes(number);
}

console.log(isIncludes(array, 3));

const filterByIncludes = (array, values) => {
    const filteredValues = [...values].filter(item => array.includes(item));
    return filteredValues;
}


console.log(filterByIncludes([1, 2, 3, 4, 5], [2, 3])); 

const hasAny = (array, values) => {
    return values.filter(item => array.includes(item)).length > 0;
}


console.log(hasAny([1, 2, 3], [2, 5]));
console.log(hasAny([1, 2, 3], [5, 6])); 

const hasNone = (array, values) => {
    return values.filter(item => array.includes(item)).length === 0;
}

console.log(hasNone([1, 2, 3], [4, 5]));
console.log(hasNone([1, 2, 3], [2, 4])); 


const findDuplicates = (array)=> {
    const duplicates = [];
    const originals = [];

    array.map(item => {
        if (!originals.includes(item)) {
            originals.push(item)
        } else if (!duplicates.includes(item)) {
            duplicates.push(item)
        } else {
            return;
        }
    })
    return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 6])); // [2, 4]


const containsSubstrings = (string, substring)=> {
    const parsedString = string.split(' ');
    return substring.filter(item => parsedString.includes(item)).length !== 0;
}


console.log(containsSubstrings("hello world", ["world", "earth"])); // true
