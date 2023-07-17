let sum=0
for(let i=1;i<101;i++)
  sum+=i
console.log(sum)
function fib(n){
  if (n<=1) return n;
 return  fib(n-1)+fib(n-2)
}
let s=fib(5)
console.log(s)
let string=""
for(let i=0;i<s;i++){
  for(let j=0;j<i+1;j++){
   string+="*"
  }
   string += "\n";
  
}
console.log(string)

// to print the elements of array
let a=["ayan","ahmed","khan"]
for(let x=0 ;x<a.length;x++)
  console.log(a[x])
//-------------------------------------
// Intro to function;
function printallusers(users){
  for(var i=0;i<users.length;i++){
      const tolog=users[i].name +"'s age is'"+users[i].age;
   console.log(tolog);
  }
}
var users=[
  {
    name:"harkirat",age:21
  },
  {
    name: "raman",age: 22 
  }
];
 printallusers(users)

// for(let i=0;i<users.length;i++){
//   const tolog=users[i].name +"'s age is'"+users[i].age;
//    console.log(tolog);
// }
// -----------------
for(let o of "ayan")
  console.log(o)
//------------------
// Passing functions inside functionss
function add(index1,index2){
  return index1 +index2;  
}

function sub(index1,index2){
  return index1 -index2;  
}
function divide(index1,index2){
  return index1/index2;  
}
function mul(index1,index2){
  return index1 *index2;  
}
function doarithmetic(index1,index2,arithmeticfxn )
{
  return arithmeticfxn(index1,index2);
}

var answer= doarithmetic(10,2,divide);
console.log(answer);
 //   *
//   ***  
//  *****
// *******
//*********
// function createspaces(n,s){
  
// for(let i=0;i<(n/2)-1;i++)
// {
//   s+=" ";
// }
//  // printing star
//  for (let k = 0; k < 2 * i - 1; k++) {
//   s+= "*";
// }
// s += "\n";
// }
// // function starline(n,s){
 
// // }
// for(let i=5;i>=0;i--){
//   let s="";
//  createspaces(i,s);
// //  starline(5-i,s);

// }s
let n = 5;
let str = "";n
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);