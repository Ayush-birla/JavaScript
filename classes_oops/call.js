function setUserName(username)
{
    this.username=username
}

function creatUser(username,email,age)
{
    // setUserName(username) // isse username set nhi hoga because iska work hote hi call stack se yh remove hojayega or iska current context bhi remove kr dega
    setUserName.call(this,username) // isme createUser ka currnet context use krega instead of setuserName
    this.email=email
    this.age=age
}

const user =new creatUser('Ayush','ayu@fb.com',20)
console.log(user);