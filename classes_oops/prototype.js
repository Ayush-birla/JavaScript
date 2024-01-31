let user={
    username:'ayush',
    age:12,
    show:function(){
        console.log(`Username :${this.username}`);
    }
}

Object.prototype.display=function(){
    console.log(`hey hii ${this.username}`);
}

// user.display()
// user.show()

const name='ayushv    '

String.prototype.trueLength=function(){
    console.log(this.trim().length);
}
name.trueLength()

'Radhe '.trueLength()

// +++++++++++++++++++++++ inheritance ++++++++++++++++++++++

const parent={
    Fname:'Rajesh',
    Fwork:'bussiness'
    
}
const child={
    name:'suraj',
    work:'student',
    // __proto__:parent  //1 way
}
// child.__proto__=parent;  //2 way
Object.setPrototypeOf(child,parent); //3 way this is modern way instead of all the other two's
console.log(child.Fwork);
// console.log(parent);


