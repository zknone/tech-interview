"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const getEvens = (numbers) => {
    return numbers.filter((item) => item % 2 === 0);
}

numbers.filter((acc, item) => acc + item, 0);

console.log(getEvens(numbers));

const words = ["apple", "banana", "pear", "strawberry", "kiwi"];

const getShortWords = (words, length) => {
    return words.filter((item) => item.length > length);
}

console.log(getShortWords(words, 5));

const secondNumbers = [-3, 5, -1, 8, -2, 0];

const filterPositive = (numbers) => {
    return numbers.filter((number) => number >= 1)
}

console.log(filterPositive(secondNumbers));


const peoples =  [{ name: "John", age: 25 }, { name: "Jane", age: 19 }, { name: "Jack", age: 28 }];

const filterByAge = (peoples, age) => {
    return peoples.filter(user => user.age >= age);
}

console.log(filterByAge(peoples, 21));


const moreNumbers = [1, 2, 2, 3, 4, 4, 5];

const filterUniques = (numbers) => {
    let uniques = [];

    return numbers.filter((item) =>  {
        if(!uniques.includes(item)) {
            uniques.push(item)
            return true;
        }
        return false;
    }
)}

console.log(filterUniques(moreNumbers));

const goods = [{ name: "Milk", price: 1.2 }, { name: "Cheese", price: 3.5 }, { name: "Butter", price: 2.7 }];

const filterGoodsByPrice = (goods) => {
    const filteredGoods =  goods.filter(item => item.price >= 1.7);
    
    return filteredGoods.length;
}

console.log(filterGoodsByPrice(goods));


const results = [{passed: true}, {passed: true}, {passed: true}, {passed: false}, {passed: true}, {passed: false}]

const findWhoPassed = (results)=> {
    return results.filter(item => item.passed)
}

console.log(findWhoPassed(results));

const newNumbres = [1, 2, 3, 4, 5, 6];

const getNumbersWithOddIndexes = (numbers) => {
    return numbers.filter((item, index) => index % 2 === 1)
}

console.log(getNumbersWithOddIndexes(newNumbres));


const newProducts =  ["apple pie", "banana bread", "cherry tart", "apple crisp"];


const getApples = (products) => {
    return products.filter(item => item.toLowerCase().includes("apple"));
}

console.log(getApples(newProducts));


const people = [
    { name: "John", address: { city: "New York" } },
    { name: "Alice", address: { city: "Los Angeles" } },
    { name: "Mike", address: { city: "New York" } },
    { name: "Sarah", address: { city: "Chicago" } },
];


const filterByCity = (people) => {
    return people.filter(item => item.address.city === "New York")
}

console.log(filterByCity(people));

