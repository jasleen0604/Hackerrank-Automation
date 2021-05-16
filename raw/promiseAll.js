let fs =require("fs");
console.log("before");
let p1 =fs.promises.readFile("f1.txt");
let p2 =fs.promises.readFile("f2.txt");
let p2 =fs.promises.readFile("f3.txt");

let combinedPromise = Promise.all(p1, p2, p3); // array that wraps all the three promises
console.log(combinedPromise); //pending
combinedPromise.then(function(combinedFileData) {
    for(let i=0; i<combinedFilesData.length; i++)
    {
        console.log("content:"+  combinedFilesData[i]);
    }
})
console.log("after");