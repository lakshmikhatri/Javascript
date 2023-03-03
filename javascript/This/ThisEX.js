/* This keyword */
//this keyword refers to the current object 
//for Example
const obj={
    name:"dibba cutting",
    magic(){
         return `Hello ${this.name}`;}// this keywoed refers to the current object
    }
//call magic method 
console.log(obj.magic());

//if we say
const m1=obj.magic
console.log(m1===obj.magic);//would  return true

console.log(m1());//did not print dibba cutting because m1 is refers to the another object.
//js didnt know  that This keyword is originally declared in object variable,this keyword give undefined