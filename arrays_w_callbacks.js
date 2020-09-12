// The first question is for the numbers array. The second question is for the words array.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

/*!!!!!!!!Shorthand syntax: 
 __arrayName__.__arrayMethod__(__parameter__=> __functionToRun__)
 Note: use parameter name in the function to run
 */

 //NOTE: I finally figured out the shorthand syntax by the time I got to the forEach method, I wanted more practice so I wrote the shorthand version for a lot of the answers 

//every method: 
//1. Determine if every number is greater than or equal to 0
//function isEven with an parameter that serves as the current element in the array, checks if it passes condition written after =>
const isEven= (currentValue)=> currentValue%2===0;
//use the every method passing in isEven function as callback
//every() will run the function on each array element
console.log(nums.every(isEven));

//2. determine if every word shorter than 8 characters
const length= (currentWord)=> currentWord.length< 8;
//call every() method on panagram array passing in length function as callback function 
console.log(panagram.every(length));
//shorthand: 
console.log(panagram.every(word=> word.length<8));

// filter method:
//1.  filter the array for numbers less than 4
const lessThan= (currentValue)=> currentValue<4;
console.log(nums.filter(lessThan));

//2.  filter words that have an even length
const evenLength= (word)=> word.length%2===0; 
console.log(panagram.filter(evenLength));
//shorthand:
console.log(panagram.filter(word=> word.length%2===0));

// find method:
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//syntax: arr.find(callback(element))
//1. Find the first value divisible by 5
const divFive= (num)=> num%5===0;
console.log(nums.find(divFive));
//shorthand
console.log(nums.find(num=> num%5===0));

//2. find the first word that is longer than 5 characters
const longFive= (word)=> word.length>5;
console.log(panagram.find(longFive)); //returns undefined, no word is longer than 5 characters

// findIndex method:
//The findIndex() method executes the function once for each element present in the array: If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values) Otherwise it returns -1

//1. find the index of the first number that is divisible by 3
const divThree= (num)=> num%3===0;
console.log(nums.findIndex(divThree));
//can also be written like this:
console.log(nums.findIndex(num=> num%3===0));

//2. find the index of the first word that is less than 2 characters long
const lessTwo= (word)=> word.length<2;
console.log(panagram.findIndex(lessTwo)); //returns -1 because there is no word in the array that is less than 2 characters long
//can also be written like this:
console.log(panagram.findIndex(word=> word.length<2));

// forEach method:
//1. console.log each value of the nums array multiplied by 3
const timesThree= (num)=> console.log(num*3);
console.log(nums.forEach(timesThree));

//2. console.log each word with an exclamation point at the end of it
console.log(panagram.forEach(word=> console.log(word + '!')));

// map method: 
//1. make a new array of each number multiplied by 100
console.log((nums.map(num=> num*100)));

//2. make a new array of all the words in all uppercase
console.log(panagram.map(word=> word.toUpperCase()));
//can also write as:
const upCaseWords= (panagram.map(word=> word.toUpperCase()));
console.log(upCaseWords);

// some method:
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

//1. Find out if some numbers are divisible by 7
console.log(nums.some(num=> num%7===0));

//2. Find out if some words have the letter a in them
console.log(panagram.some(word=> word.includes('c')));

// reduce method: 
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//have to give reduce() two parameters because it will move through the array 

//1. Add all the numbers in the array together using the reduce method
console.log(nums.reduce((accumulatorNum, currentNum)=> accumulatorNum+ currentNum));

//2. concatenate all the words using reduce
console.log(panagram.reduce((accumulatorWord, currentWord)=> accumulatorWord.concat(currentWord)));

// sort method:
//The sort() method sorts the items of an array, either alphabetic or numeric, and either ascending (up) or descending (down) depending on how you 
//default sort order is ascending, built upon converting the elements into strings, then comparing their sequences 
  //However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
//can also pass in a function to be more specific
//syntax: array.sort(compareFunction)
  //compare function: ex.sort((a, b)=>{return a-b});
  //When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value
    //ex. comparing 40 and 100, sort() function calculates 40-100, and returns -60 (a negative value). The sort function will sort 40 as a value lower than 100.

// Try to sort without any arguments, do you get what you'd expect with the numbers array?
nums.sort();
console.log(nums);
//numbers are in order from lowest to highest except the 10

// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort());
//words are in alphabetic order except for the word that starts with a capital letter 

// Sort the numbers in ascending order
console.log(nums.sort((accNum, currNum)=>accNum-currNum));

// Sort the numbers in descending order
console.log(nums.sort((accNum, currNum)=>currNum-accNum));

// Sort the words in ascending order
let lowerCaseWords= panagram.map(word=> word.toLowerCase());
console.log(lowerCaseWords.sort());

// Sort the words in descending order
let reversed= lowerCaseWords.reverse();
console.log(reversed);
