//Destructing Arguments
//for Example
//declare object
const o = {
w1 :"hey",
w2 :"hai",
w3 :"everyone"
};
//create function
function getData({w1,w2,w3}){
    return` ${w1} ${w2} ${w3}`;
}   
//call function
console.log(getData(o)); //call object from the function with destructured arguments.
