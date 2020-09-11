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

//Combine objects, arrays, and functions more than one level deep

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
 
