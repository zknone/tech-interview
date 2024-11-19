"use strict"

const numbers = [10, 20, 30, 40]; 
const secondNumbers = [2, 3, 4];

const countNumbers = (numbers) => {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}

const multiplyNumbers = (numbers) => {
    return numbers.reduce((acc, currentValue) => acc * currentValue, 1);
}

console.log(countNumbers(numbers));
console.log(multiplyNumbers(numbers));
console.log(multiplyNumbers(secondNumbers));

const findMax = (numbers) => {
    return numbers.reduce((prevValue, currentValue) => currentValue > prevValue ? currentValue : prevValue, 0);
}

const findMaxNumbers = [64, 5, 3, 8, 1, 4, 12];

console.log(findMax(findMaxNumbers));

const words = ["Hello", "world", "how", "are", "you"]; 

const connectWords = (words) => {
    return words.reduce((phrase, word) => phrase.concat(' ', word), '')
}

console.log(connectWords(words));


const items = [
    { name: "apple", category: "fruit" },
    { name: "carrot", category: "vegetable" },
    { name: "banana", category: "fruit" },
];

const categorizeObjects = (items) => {
    return items.reduce((acc, item) => 
        {
            if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
        }, {})
}

console.log(categorizeObjects(items));


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countElements = (elements) => {
    return elements.reduce((acc, element) => {
        if (!acc[element]) {
            acc[element] = 0
        }
        acc[element] +=1;
        return acc;
    }, {})
}

console.log(countElements(fruits))


const isPalindrome = str => str.toLowerCase().split('').reverse().join('') === str;

console.log('мам', isPalindrome('мам'));


const pairs = [
    ["name", "John"],
    ["age", 30],
    ["city", "New York"],
  ];

  const makeObject = (pairs) => {
    return pairs.reduce((acc, pair) => {
        acc[pair[0]] = pair[1];
        return acc;
    }, {})
  }

  console.log(makeObject(pairs));


  const orders = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 150 },
  ];

  const summarizeOrders = (orders) => {
    return orders.reduce((acc, order) => acc + order.amount, 0)
  }

  console.log(summarizeOrders(orders));


  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const makeDefaultValues = (users) => {
    return users.reduce((acc, user) => {
        acc[user.name]=user;
        return acc;
    }
        , {})
  }

  console.log(makeDefaultValues(users));