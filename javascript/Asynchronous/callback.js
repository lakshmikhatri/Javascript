/*let calc = (a, b, operator) => {
    if (operator == 'sum') {
        return a + b
    }
    if (operator == "multi") {
        return a * b;
    }
}
let r1 = calc(10, 20, "sum");
console.log(r1);
let r2 = calc(10, 20, "multi");
console.log(r2);*/
//example of callback in javascript
// let sum = (a, b) => {
//     return a + b
// }
// let multi = (a, b) => {
//     return a * b;
// }
// let calc1 = (a, b, callback) => {
//     return callback(a, b)
// }
// let l1 = calc1(10, 20, sum);
// let l2 = calc1(10, 20, multi);

// console.log(l1);
// console.log(l2);
let empolyees = [{ id: 101, name: 'Rahul' },
{ id: 102, name: 'sonia' }
]
let createEmployee = (emp, callback) =>
//insert data into datasource as array
{
    setTimeout(() => {
        employees.push(emp);
        callback();
    }, [4000])
}
let getEmployees = () => {
    //display into html table
    console.log("hello")
    setTimeout(() => {
        employees.foreach((empolyees))
    }, [1000])
}
createEmployee({ id: 103, name: 'priyanka' }, getEmployees)
// getEmpolyees()
// createEmpolyee()
console.log(empolyees);
