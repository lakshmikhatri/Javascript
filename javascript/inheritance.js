// class A {
//     m1() {
//         console.log("A Class")
//     }
// }
// class B  extends A{
//     m1() {
//         console.log("B Class")
//     }
//     m2() {
//         console.log("B Class");
//     }
// }
// let a1 = new B();
//  let a2 = new B();
//  let a3 = new A();

// a1.m1();
// a2.m2();
// a3.m1();

class A {
    m1() {
        console.log("Class A - m1 method")
        console.log("M2 mmmmmm")
    }
    m2() {
        console.log("Class A - m2 method")
    }
}
class B extends A {
    m3() {
        console.log("Class B - m3()")
    }
}
let a1 = new B()
a1.m1()
a1.m2()
a1.m3()