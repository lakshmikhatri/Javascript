// for Example
//declare outer function
function Counter() {
    let count = 0; //can't access this  varible  outside  of the function

    return function () {
        return count++; // has access to the count varible outside of the function.
    };
}
//reference of the function 
let counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

