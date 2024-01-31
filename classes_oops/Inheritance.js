class User{

    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Welcome, ${this.username}`);
    }
}

class Admin extends User{
    constructor(username,pass,email){
        super(username)
        this.pass=pass
        this.email=email
    }

    addUser()
    {
        console.log(`${this.username} is added..!`);
    }
}

const a=new Admin('ayush','jjj','ayush@gmail.com')
a.addUser()
a.logMe()
console.log(a instanceof Admin); //true
console.log(a===Admin) //false

const b=new User('radhe')
// b.addUser() //this is not possibe
b.logMe()