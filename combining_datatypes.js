//Helpful notes: https://tmdarneille.gitbook.io/seirfx/javascript/01functions/combining-data-types

//Part 1. Combine objects, arrays, and functions:
//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox= {
    color: ['banana mania', 'cornflower', 'electric lime', 'outrageous orange']
}
console.log(crayonBox.color[2]);

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle= {
    cap: {
        material: 'plastic',
        color: 'red'
    }
}
console.log(Object.keys(bottle.cap)[0]);
//or
console.log(Object.getOwnPropertyNames(bottle.cap)[1]);

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt= ['apple', 'frog', {donut: '$0.30', baguette: '$2.00', bagel: '$1.00'}, 'smoke'];
console.log(Object.keys(receipt[2])[2]);

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding= ['townhouse', 'condo', ['Hank', 'Lara', 'Tommy', 'Gerald', 'Susan'], 'apartment', 'loft'];
console.log(apartmentBuilding[2][3]);

//Part 2. Combine objects, arrays, and functions more than one level deep:

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit= () => {
    return {
        item: 'scarf',
        size: '6ft',
        color: 'yellow'
    };
}
console.log(knit().item);

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
//didnt use the crayonBox object....
const crayonSelector= () => {
    return {
        morning: 'gray',
        afternoon: 'blue',
        sunset: ['pink', 'purple', 'orange', 'yellow'],
        night: 'black'
    }
}
console.log(crayonSelector().sunset[1]);

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
const powerButton= () => {
    //use this notation because were giving the function a name, if no name, we can write it as: return ()=> {__codeblock__}
    return function options() {
      console.log('Select a song');
    }
}
console.log(powerButton()());
//console.log(powerButton()); //returns [Function: options]
 
//Part 3. Model a vending machine:
//a vending machine is an object
//it has an array of snacks (make 3 snacks)
//snacks are objects that have a name and a price
//a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
//Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine= {
    snacks: [{cheetos: '$2.50'}, {twixbar: '$2.00'}, {riceKrispieTreat: '$1.50'}],
    vend: (snackNum) => {
      return Object.keys(vendingMachine.snacks[snackNum]);
    }
}
vendingMachine.vend(2); //returns an array containing ['riceKrispieTreat']


//Part 4. Callbacks:
//1.  Make a function add that takes two arguments (numbers) and sums them together
const add= (num1, num2)=> {
    return num1+num2;
}
//add(4,5); //test

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract= (num1, num2)=> {
    return num1-num2;
}
//subtract(4,5); //test

//3.  Make a function multiply that takes two arguments and multiplies them
const multiply= (num1, num2)=> {
    return num1*num2;
}
//multiply(4,5); //test

//4. Make a function divide that takes two arguments and divides them
const divide= (num1, num2)=> {
    return num1/num2;
}
//divide(4,5); //test

//5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
//6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate= (num1, num2, operates)=> {
    return operates(num1, num2);
}
  
//7. Call calculate 4 times, each time using one of the operation functions you wrote
calculate(2,5,add);
calculate(2,5,subtract);
calculate(2,5,multiply);
calculate(2,5,divide);

// Function definition placement:
// Clean up this code, so that it works and has function definitions in the correct place

//bar();
const bar = () => {
    console.log('bar here');
}
bar();
//foo();

const foo = () => {
    console.log('foo here');
}
foo();

// Error reading
// What is meant by the error(s) this produces?
//fixed code below: 
const foo =()=>{
    console.log('hi');
}
foo();
//error: SyntaxError: Missing initializer in const declaration
//arrow function, use of const, needs initializer = 
//2nd error: ReferenceError: Cannot access 'foo' before initialization
//cannot access foo when calling foo function before it is declares