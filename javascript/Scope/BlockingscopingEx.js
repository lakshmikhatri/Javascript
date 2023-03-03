/* Block Scoping*/
 console.log("Block start ...");
 {
    console.log("Inside Block");
    const x=5;
    console.log(x);
 }
 console.log("Block end ");
 console.log(`outside of the block:x=$ {x}`);//would return  X is not defined.
 // x is not accessable outside
 