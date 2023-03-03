/* Delete operator */
//for example
//declare an object
const obj1={x:1,y:2,z:3};
console.log("x"in obj1);// would be true
//to delete on of its property
delete obj1.x;
console.log("x"in obj1);// would be false
console.log(obj1);
//using array
const array1=[1,2,3,4];
console.log(array1[3]);//print 4 on the console
//delete array element
delete array1[3]//delete 4 from the array element
console.log(array1[3]);//print 4 on the console//print undefined
console.log(array1);