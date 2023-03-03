// class Employee{
//     constructor(){
//         this.name = 'Alex';
//         this.age = 25;
//     }
// }

// const employee1 = new Employee();
// console.log("Employee name: " + employee1.name);
// console.log("Age:" + employee1.age);

class User {
    constructor(firstname, lastname, userId = "asinha") {
        this.firstname = firstname;
        this.lastname = lastname;
        this.userId = userId;
    }
    getUserName() {
        return this.firstname + " " + this.lastname + " " + this.userId;
    }
    // changeName(newFirstName, newLastName) {
    //     this.firstname = newFirstName;
    //     this.lastname = newLastName;
    // }
}

let appUser = new User("Abhilasha", "Sinha");
console.log(appUser.getUserName());



