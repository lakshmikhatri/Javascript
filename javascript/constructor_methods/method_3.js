class User {
    constructor(firstname, lastname, userid) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.userid = userid;
    }
    get Username() {
        return this.firstname + " " + this.lastname;
    }
    changename(newfirstname, newlastname) {
        this.firstname = newfirstname;
        this.lastname = newlastname;

        
    }
}
class PowerUser extends User {
    
    constructor(firstname, lastname, userid, role) {
        super(firstname, lastname, userid)
        this.role = role;
    }
    // get UserRole() {
    //     return this.role;
    // }
    set UserRole(newRole) {
        this.role = newRole;
    }
}
 let appUser = new PowerUser("Lakshmi", "Khatri", "101","Developer");
// document.getElementById("name").innerHTML = appUser.getUsername();
// document.getElementById("userid").innerHTML = appUser.userid();
// document.getElementById("roleid").innerHTML = appUser.userRole();
//console.log(appUserinstanceofPowerUser);
//console.log(appUserinstanceofUser);
console.log(appUser);

