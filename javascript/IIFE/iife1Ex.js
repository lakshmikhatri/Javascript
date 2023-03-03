const f=(function()
{
    let count= 1;
    return function(){
        return `value of count:${count++}`;
    }

})();
//call function
console.log(f());
console.log(f());
console.log(f());
