const sortByBubble = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length -1; i ++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

const numbers = [5, 3, 8, 4];


console.log(sortByBubble(numbers));