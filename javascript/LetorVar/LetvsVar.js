//declare for loop with var key word
for(var i=0;i<3;i++){
    //inside the block
    console.log(i);
}
//outside the block
console.log("outside the block:"+i);//can access i variable outside of the block.
//declare for loop with let keyword
for(let k=0;k<3;k++){
    //inside the block
    console.log(k);
}
//outside the block
console.log("outside the block:"+k);//can't access k variable outside of the block.