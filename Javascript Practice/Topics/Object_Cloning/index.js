// There are three ways to clone an object.
// 1. Iteration

let a={
    value:10
};
let b={};
let d={
    value:20
};

for(let x in a){ console.log("The object a is ",a[x]);};

for(let key in a){
    b[key]=a[key];
}
console.log("The Object b is cloned to a ",b);

// 2. Assign Function


let c= Object.assign({},d);
console.log(c);

// 3. Spread Operator

let f={
    a:10,
    b:20
};

let h={...f};
console.log(h);