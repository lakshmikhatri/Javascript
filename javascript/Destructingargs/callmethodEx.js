/* call() Method */
// for Exammple
//declare function
function magic(){
    return`welcome to ${this.name}`;
}
//create two objects
const obj1={name:"dibba"};
const obj2={name:"cutting"};

// call function
console.log(magic());// without call method
 // call function with  call() method 
 console.log(magic.call(obj1));// called call() method with obj1 parameter
 console.log(magic.call(obj2));// called call() method with obj2 parameter