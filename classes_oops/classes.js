/*class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    passwordEncrpt(){
        return `${this.password}abc`
    }

    captitalize(){
        return `${this.username.toUpperCase()}`
    }
}

const user=new User('Ayush','ayu@gmail.com','12348')
console.log(user);
console.log(user.passwordEncrpt());
console.log(user.captitalize());*/

// behind the scene
 function User(username,email,pass){
    this.username=username
    this.email=email
    this.pass=pass
 }

 User.prototype.passwordEncrpt=function(){
    return `${this.pass}abc`
 }

 User.prototype.capitial=function(){
    return `${this.username.toUpperCase()}`
 }

 const u=new User('radhe','rad@gmail','ujh');
 console.log(u.passwordEncrpt());
 console.log(u.capitial());