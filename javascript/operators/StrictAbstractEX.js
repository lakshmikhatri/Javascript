/* strict and abstract equality */
let x=10;str="10";
console.log(x==str);//result = true because x and str have the same value 10
// using strict equality 
console.log(x===str);//result = false because x and str not have equal type.
//converting str into number using strict equality 
console.log(x=== number(str));//result =true because x and str have the same value and type. 
//using not strict equality
console.log(x!==number(str));//result =false because x is equal to str 
//using not abstract equality
console.log(x!=str);//result =false because x is equal to str.