class User {
    constructor(firstname, lastname, username) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
    }
    get_username() {
        return this.firstname + " " + this.lastname;
    }
    changename(newfirstname, newlastname) {
        this.firstname = newfirstname;
        this.firstname = newfirstname;

}
}
let a1 = new Account()
console.log(a1)
