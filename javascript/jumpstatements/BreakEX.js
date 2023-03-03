for(let i=1;i<=5;i++)
{
    if(i==3)
    break;//break statement when i become 3
    console.log(i);//print i on the console
}
/* Break statement*/
let a=1;
//creating label statement
label:while(a==1){
    console.log(a);//print a on the console.result would be 1
    break label;//break the loop execution after the printing 1 on the console
}