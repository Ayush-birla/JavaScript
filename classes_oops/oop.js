const user={
    username:'Ayush',
    age:90,
    gender:'male',

    greetings:function(){
        console.log(`Welcome , ${this.username}`);
        console.log(this);
    }
}

// console.log(user.greetings());

function display(username,age,gender)
{
    this.username=username
    this.age=age
    this.gender=gender
    this.greetings=function(){
        console.log(`welcom , ${this.username}`);
    }
    return this
}
function userr(){}
const userInfo=new display('ayush',90,'male')
const user11=new userr()
console.log(userInfo.constructor);
console.log(user11 instanceof display);