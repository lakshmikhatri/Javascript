/* Arrow notation */
// if we want to create an anonymous function to return the msg  we have to write this.
const f1=function()
{
    return "Hello Everyone";
}

//using Arrow Function
const f2=() =>"Hello everyone";//both are same and return same outcome
console.log(f2);

//using argument
const f3=function(args1)
{ 
    return `value of the argument:$ {args1}`;
}
console.log(f3);
//using  two arguments 
const f4=function(args1,args2)
{
    return args1*args2
}
console.log(f4);
//using arrow function with two arguments
const f5=(args1,args2)=> args1*args2;//would return same outcome 
console.log(f5);