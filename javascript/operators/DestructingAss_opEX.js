/* Destructing Assignment operator */
//for example
//normal  object declaration
const obj={a:1,b:2,c:3,e:5};//variables
//Destructing Assignment operator
const{a,b,c,e}=obj;//destructing operator
//({a,c,d,e}=obj);//when we are passing this type operator.if we are not giving paranthesis.js take like block.
//must surrounded by paranthesis.

// print variable 
console.log(a);
console.log(b);//error b is not defined// we are not destructing assignment operator.so it wil error message.
console.log(c);
//but
console.log(e);//we didnot specify d in the object property
// the above all are properties


/* destructing assignment opearator with array*/
//for example
//declare an array
// const arry=[1,2,3,4];
// //destructing  assignment operator
// let [p,q,...rest]=arry;//we used[] to declare destructing array operator
// console.log(p);
// console.log(q); 
// //using spread operator
// console.log(rest);//rest is a variable//printing remaining  array elements.
// //spread operator using destructing operator

