const user = {
    username: "Ayush",
    price: 899,
    welcomeUser: function () {
        console.log(`${this.username} , welcome `);
        console.log(this);
    }
}
user.welcomeUser()
// user.username="ramu"
// user.welcomeUser()
console.log(this);


function test() {
    let user = "ajk"
    console.log(this.user);
}
test()

const sum = (num1, num2) => {
    return num1 + num2;
}
// console.log(sum(1,2))


//+++++++++++++++++++++ define arrow function in different ways ++++++++++++++++++++++++++++++

/* const demo=()=>{
    let user="Rajesh"
    console.log(this);
} */

// const demo=(num1,num2)=> num1+num2

// const demo=(num1,num2)=> (num1+num2)

//+++++++++++++++++++++ how to pass object in arrow function ++++++++++++++++++++++++++++

const demo = () => ({ user: "Ayusddh", price: 89, col: ['white', 'red'], fun: () => (console.log(`Hii , ${user.username}`)) })
// console.log(demo().col[1])
console.log(demo().fun());




