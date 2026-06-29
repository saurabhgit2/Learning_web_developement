// Create Object

// let rectangle={
//     length:1,
//     breadth:2,
//     draw: function(){
//        console.log("This is object's method.");
//     }
// };


//Factory function to create Objects

// function createRectangle (l,b) {
//     return rectangle={
//     length:l,
//     breadth:b,
//     draw: function(){
//        console.log("This is object's method.");
//     }
    
// };

// }

// let rectangle1=createRectangle(4,5)

// Using Constructor Function to create Objects (Use PascalNotation)

function CreateRectangle(){
    // this is used to refer the object, here, it is referring to an empty object
    this.length=1,
    this.breadth=4,
    this.draw=function(){console.log('Drawing rectangle')};
};

// new creates an empty object
let rectangleObject=new CreateRectangle();

// Dynamic property
// Adding property:value
rectangleObject.color='red';
console.log(rectangleObject)

// deleting property
delete rectangleObject.color;
console.log(rectangleObject);