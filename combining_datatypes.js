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