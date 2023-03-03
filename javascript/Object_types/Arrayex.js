// create an array with different type of data
const a1=[1,2,3,4,5,6];
const a2=[2,3,null,9,"one"];
const a3=["hello","world","array"];
//have an array containing array
const a4=[
[ 1,2,3]
[ 4,5,6]

];
//get array length
console.log(a1.length);
console.log(a2.length);
console.log(a3.length);
console.log(a4.length);
//get array value
console.log(a1[0]);
console.log(a2[1]);
console.log(a3[3]);
console.log(a4[6]);

//change array element
a3[1]="welcome";
console.log(a3[1]);