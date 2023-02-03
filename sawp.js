

// Swaping number>>
let first = 5;
let second = 7;
console.log(first,second);

// This is wrong Approach
// first = second;
// second = first;
// console.log(first,second);

// Aproach number : -1;
// let temp = first;
// first =second;
// second = temp;
// console.log(first,second);

// Aproach number: 2
// Destructuring >> 
[first , second] = [second , first];

console.log(first, second);