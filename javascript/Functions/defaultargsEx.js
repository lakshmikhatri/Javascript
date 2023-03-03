/* Default argument */
//for example
function f(x="default") // if we are not giving here any value or assign the value we will get "undefined".
//if we assign value here (x=3).
{
    return `in function:x=${x}`;//use backtick to specify the string
}
console.log(f());// without parameter//in parameter any primitive and objective datatype.//(f(10)),here giving
//any value we will get the value in the place of default value.(f("default"))//we will get default value 
//in the output