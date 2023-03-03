//Destructing arguments
// for Example
//using Array 
const arr=["hi","hello","everyone"];
//declare function
//specify[] square brackets when  you declare dectructure array
function getData ([w1,w2,w3]){
    return `${w1} ${w2} ${w3}`;
}
//call function
console.log(getData(arr));//call array using destructured argument