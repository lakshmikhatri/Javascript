/** splice method**/
//allow you to add or remove array element at any position
//for Example
const arr3=[1,4,5]
console.log(arr3);
//call splice() method
arr3.splice(1,0,2,3)//first arg is the index where we have to start and 2nd arg is the no.of elements to remove
//2,3:after the first element.
console.log(arr3);//return 1,2,3,4,5

//Remove array elements
arr3.splice(1,2) //start from 1 index and remove 2 elements.2,3
console.log(arr3); //return 1,4,5