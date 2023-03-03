//for example
//declare object  with two objects elements
const cart=[{product:"laptop",price:55000},{product:"mobile",price:12000}];
const product=cart.map(x=>x.product);//create array of product name.    
const price=cart.map(x=>x.price);//create array of product price.
console.log(product);
console.log(price);