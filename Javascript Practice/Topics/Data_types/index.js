let a=1;
let b=a;
// primitive data types are copied by their value in JS
console.log('a= ',++a);
console.log('b= ',b);
// o/p= 2,1

// reference are copied by their addresses/ references
let obj1={
    value:1
};

let obj2=obj1;
obj1.value++;
console.log(obj1,obj2); 
// O/p 2,2 