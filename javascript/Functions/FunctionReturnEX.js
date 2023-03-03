
 //function with Return keyword
function Magics(){
    return  "Hello Everyone";
    }
    //assign reference to the variable
    const f=Magics;
    //console.log(Magics);  //referencing to the function , will not execute  body of the function. 
  
  
    //so we have reference to the function
   console.log(f());
   //declare object with property
   const obj={f:Magics};
   console.log(obj.f());// call function using object property.