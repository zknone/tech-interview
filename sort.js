const numbers = [34, 7, 23, 32, 5, 62];


const sortNumbers = ({isAscending = true}) => {
    return [...numbers].sort((a, b) => isAscending? a - b : b - a );
}

console.log(sortNumbers({isAscending: true}));

console.log(sortNumbers({isAscending: false}));


const words = ["banana", "apple", "cherry", "date"];

console.log(words.sort());

const sortWordsAlternativeBackwards = (words) => {
    return [...words].sort().reverse();
}

console.log(sortWordsAlternativeBackwards(words));

const lengths = ["elephant", "cat", "hippopotamus", "dog"];

const sortedLengths = [...lengths].sort((a, b) => a.length - b.length)
console.log(sortedLengths);

const peopleByAge = [
    { name: "Alice", age: 32 },
    { name: "Bob", age: 24 },
    { name: "Charlie", age: 37 },
    { name: "David", age: 28 },
];

peopleByAge.sort((a, b) => a.age - b.age);
peopleByAge.sort((a, b) => a.name.localeCompare(b.name));
console.log(peopleByAge);


const peopleComplex = [
    { name: "Alice", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 35 },
];

peopleComplex.sort((a, b) => b.name.localeCompare(a.name)).sort((a, b) => b.age - a.age)

console.log(peopleComplex);

const numbersForMedian = [15, 3, 8, 21, 7, 13, 10, 12];

numbersForMedian.sort()

const getMedian = (numbers) => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 1) {
        return sortedNumbers[middleIndex];
    } else {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    }
};

console.log(numbersForMedian);
console.log(getMedian());