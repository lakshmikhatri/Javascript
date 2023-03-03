let f;
{
    //declare object here
    let obj={name:"Character"};//cannot  access outside of the block
//using Arrow function
f=()=>{
    return obj; 
};
}
   //console.log(obj.name);
   //console.log(f());  //now you have a reference  of the object
   let ref=f();// create reference of the object
   console.log(ref.name); // can access block scope variable
   ref.name="lakshmi";
   console.log(ref.name); // can access block scope variable