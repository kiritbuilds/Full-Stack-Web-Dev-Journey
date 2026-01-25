class Student{
    constructor(name){
        this.name = name;
        console.log("Create Constructor");
    }
    study(){
        console.log("Padh rha hoon");
    }
    study1(){
        console.log("Nind aa rahi hai");
    }
}
class Human extends Student{
    constructor(name){
        super(name);
        console.log("Another Constructor Create");
    }
    study(){
        super.study();
        console.log("Aur Jyada Padh Rha hoon");
    }
    study1(){
        super.study1();
        console.log("Nind Nahi Aa rahi hai");
    }

}
let a = new Student("Kirit");
console.log(a);
a.study();
a.study1();

let b = new Human("Brijesh");
console.log(b);
b.study();
b.study1();