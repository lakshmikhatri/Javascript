let user = {
    uid: 101,
    name: 'rahul',
    email: 'rahul@gmail.com'
}
let details =
{
    email: 'rahul@gmail.com',
    sal: 45000,
    location: 'wayand'
}
let user_details = { ...user, ...details }
console.log(user_details)