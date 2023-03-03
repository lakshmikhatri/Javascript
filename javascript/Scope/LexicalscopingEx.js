/* Lexical scoping*/
// for Example
//we will decalre two function
function f1(){
    console.log("Function one");
}
//declare  second function
function f2(){
    console.log("Function two");
}
//call random functions
f1();// would return function one
f2();// would return function two
f1();// would return function one

//Another Example
//decalre variable x
const x=5;
//decalre function
function f(){
    console.log(x);
    console.log(y);
}

//declare y variable here
const y=4;
 //call function
 f();