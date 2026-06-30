// for-in loop is used to iterate key:value pair in an object
let person={
    name:'Saurabh Singh',
    age:33,
    passion:'Live life to the fullest'
};

for(let key in person){
    console.log(key, " is ",person[key]);
}

// for in loop is used to iterate on iterables such as Arrays, strings

let array1=['Saurabh','Singh',33];

for(let index of array1){
    console.log(index)
}
// O/P 
// Saurabh
// Singh
// 33 