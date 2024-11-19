const getFirsIndex = (array, element) => {
    return array.indexOf(element)
}

const getLastIndex = (array, element) => {
    return array.lastIndexOf(element)
}

console.log(getFirsIndex([1, 2, 10, 12], 5));

console.log(getLastIndex([1, 5, 10, 12], 5));

const isElementExist = (array, element) => {
    return array.indexOf(element) !== -1;
}

console.log(isElementExist([1, 2, 10, 12], 15));
console.log(isElementExist([1, 2, 10, 12], 15));


const removeFirst = (array, element) => {
    const firstElement = array.indexOf(element);

    if (firstElement === -1) return;
    return array.slice(0, firstElement).concat(array.slice(firstElement + 1))
}

console.log(removeFirst([1, 2, 10, 12, 12, 12, 12], 12));

const removeAll = (array, element) => {

    while (array.indexOf(element) !== -1) {
        const elementIndex = array.indexOf(element);
        array = array.slice(0, elementIndex).concat(array.slice(elementIndex + 1))
    }
    return array;
}

console.log(removeAll([1, 2, 10, 12, 12, 12, 12], 12));

const getSecondIndex = (array, element) => {
    const firstElement = array.indexOf(element);
    if (firstElement === -1) return -1;
    const arrayWithoutFirst = array.slice(0, firstElement).concat(array.slice(firstElement + 1));
    const secondElement = arrayWithoutFirst.indexOf(element);
    if(secondElement === -1) return -1;
    return secondElement + 1;
}


console.log(getSecondIndex([1, 2, 10, 12, 12, 12, 12], 12));

const changeAll = (array, oldElement, newElement) => {
    while (array.indexOf(oldElement) !== -1) {
        const elementIndex = array.indexOf(oldElement);
        array[elementIndex] = newElement;
    }
    return array;
}


console.log(changeAll([1, 2, 10, 12, 12, 12, 12], 12, 5));

const getUniques = (array) => {
    const uniques = [];

    array.map((item) => {
        if (array.indexOf(item) === array.lastIndexOf(item) && uniques.indexOf(item) === -1) {
            uniques.push(item);
        }
    })

    return uniques;
}

console.log(getUniques([1, 2, 10, 12, 12, 12, 12]));


const countAll = (array, element) => {
    let count = 0;
    while (array.indexOf(element) !== -1) {
        const elementIndex = array.indexOf(element);
        array = array.slice(0, elementIndex).concat(array.slice(elementIndex + 1))
        count+=1;
    }
    return count;
}

console.log(countAll([1, 2, 10, 12, 12, 12, 12], 12));