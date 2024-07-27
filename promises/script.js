const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Task is complete");
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise consumed")
})

const promiseTwo = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Task 2 Completed")
    resolve()
  }, 2000)
}).then(function(){
  console.log("Promise Resolved")
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({name: "Ahmed", email: "Ahmed@mail.com"})
  }, 3000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
 setTimeout(function(){
  let error = true
  if(!error){
    resolve({username: "Tanveer", password: "12345"
    })
  }else{
    reject('ERROR: Something went wrong')
  }
 }, 4000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({name: "Javascript", Password: "12345"})
    }else{
      reject("ERROR: Javascript went wrong")
    }
  }, 5000)
})

