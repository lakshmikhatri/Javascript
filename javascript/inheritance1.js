class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
}
class B extends A {
    
    constructor(a, b, c) {
        super(a, c)
        this.b = b;
    }

}

let b1 = new B(10, 20, 30)
{
    console.log(b1);
}