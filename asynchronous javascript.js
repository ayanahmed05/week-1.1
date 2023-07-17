2// we can do asynchronous tasks

const fs= require('fs');
function sum (n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    console.log(ans);

} 
// var a=readFromFile()
// sum(a);
// sum(101)
// sum(102)
// sum(103)
 //! not good as our program would have to wait for a for some time
 // to read the file
 // then other sum function sum(101),sum(101)---will be carried out;
 function fileIsRead(err,filecontent){
    sum(filecontent);
 }

fs.readFile("chocolate.txt",'utf8',fileIsRead);
// read from the file untill i come back 
// just peform the below tasks
console.log("allahu akbar");
sum(100);
sum(20);
sum(300);


//  console.log(sum(100))