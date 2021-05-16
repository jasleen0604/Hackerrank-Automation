let fs= require('fs');

let promise = fs.promises.readFile('f1.txt');
 console.log("intial state", promise);

 promise.then(function(data){
     console.log(data);
 })

 promise.catch(function(err){
     console.log("error", err);
 })

 console.log("after");