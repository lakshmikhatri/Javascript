  //javascript strict mode
"use strict"
 x="Global"//declare x variable and assume as global.
console.log(x);


//using function
(function(){
     "use strict";// if we are removing use strict then it will give global in the output.
     x="global";
     console.log(x);

})();