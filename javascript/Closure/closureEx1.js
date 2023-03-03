let closure;
{
    let block= "Character";
    closure=function(){
        console.log(block);
    }

}
// access block variable outside  of the block
//console.log(block);
closure();//call specified function

// now you can  access  block variable  outside of the block.