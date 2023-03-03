/* instanceof operator */
//for exampe
const d=new Date();
console.log(d instanceof Date);//would be true
//declare array
const arry=[1,2,3];
console.log(arry instanceof Array);//would be true
//but 
console.log(arry instanceof Date);//false