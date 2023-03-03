//Array containing array with Function
const arr1=[{name:"daily",sub:"preparing"},
[
    //on 0 index of inner array
    function(){
        return "containing Array";
    },
    //on 1 index of inner array
    "three"
]

];
console.log(arr1[1][0]());//return reference of the function