const promise=new Promise(function(resolve,redirect){
  console.log('Async task is completed'); 
  resolve ()
})

promise.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    console.log('Async 1 task is compled');
    resolve()
}).then(function(){
    console.log('Async 1 consumed');
})

// ++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree=new Promise(function(resolve,reject){
    console.log('Async 3 task executed');
    resolve({username:'Ayush',age:'19'})
})

promiseThree.then((user)=>{
    console.log(user); 
})

const promiseFour=new Promise(function(resolve,reject){
    let flag=true
    if(flag)
    {
        resolve({username:'Radhe',age:12})
    }
    else
    {
        reject("Error ! Something went wrong....");
    }

})

promiseFour.then((user)=>console.log(user)).catch((error)=>console.log(error))


const promiseFive=new Promise(function(resolve,reject){
    let flag=true
    if(!flag)
    {
        resolve({username:'Radhe',age:12})
    }
    else
    {
        reject("Error ! Something went wrong....");
    }

})
async function consumePromise(){

    try {
        const response= await promiseFive;
    console.log(response);
    } catch (error) {
     console.log(error);   
    }

}
consumePromise()

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>console.log((response))).catch((error)=>console.log(error))
console.log('this ->',this);