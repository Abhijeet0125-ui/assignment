//let a =[1,"g",90,true,"hello"];
//let b =[1,"g",90,true,"hello"];
//let c =1;
//let d = c;
//console.log(b===a);
//let obj={
  //  name:"abhi",
    //sem: 5,
    //isPassed: true
//}
//obj.name="mandeep"

//obj.new=" new value"
//console.log(obj.name);

//newFunction();

//function newFunction() {
   // a = 10;
   // b = 90;
    //let c = (a == b) ? "hi" : "hello";
//}
//let age=Number(prompt("Enter your age"));


//if (age===18){
  //  console.log("can not vote must be 18+")
//}else if(age>18){
  //  console.log("can vote")
//}else if(age,18){
  //  console.log("can't vote")
//}
//else{
  //  console.log("we need to check")
//}

//console.log(9+"nine")

//let day=2;

// switch (day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday"); 
//         break;
        
//     default:
//         console.log(day);    
    
//     }
// let age = 18;
// switch(true){
//     case age>18:
//         console.log("true here");
//         break;
//     case age < 18:
//         console.log("true here 2");
//         break;
//     case age===18:
//         console.log("true here 3");
//         break;
//     default:
//         console.log("unexcepted false");            
// }
// let arr=[4,5,"hello",99,true,false,"new here",12,56];

// let newArr= arr.slice(3,6)
// console.log(arr);
// console.log(newArr)

// for(let i=0;i<9;i++){

//     if(i==2){
//         continue;
//     }
//     console.log(i)

// // }
// let i=0;
// while (i<9){
// console.log(i)
// i++;
// }
// do{
//     console.log(i)
// }

// let res=90;
// let guess= Number(prompt("guess"));
// while(guess !== res)
//     if(guess>res){
//         console.log("number is smaller")
//     }
//     if(guess<res){
//         console.log("number is greater")
//     }
//     {
//     console.log("not true");
//     guess=Number(prompt("guess"))
// }
// console.log("won")

// let arr=[1,9,8,7,11,3,4,4];

// let [x,y]=arr;
// console.log(x);

// let [a,b,c,d,...ar2]=arr

// console.log(ar2)

// let a=90;
// let b=91;

// [a,b]=[b,a]

// let arr3=[1,2,[3,4],5];
// let[,,[a,b]]=arr3
// console.log(a,b)

// const user = { name: "Nitin", age:25};

// console.log(user.name)

// const user= { name:"Nitin", age:25};
// const{ name, age} = user;

// console.log(name);
// console.log(age);

// let name="Aryan";
// let obj={name:name}
// console.log(obj.name)

// const user ={ name:"Nitin" , age:25, role: "Developer"};

// const{ name, ...rest}= user;
// console.log(name);
//console.log(rest);
// console.log(2)
// setTimeout(()=>{
//   console.log("here")
// },3000)

// console.log(4)

// const add = (a,b)=> {
//    return a + b;
// };
// console.log(add(3,4))

// let a =()=>{

// }
// (function(){
//   console.log("This function runs immediately!");
// })();
// (function(a,b){
//   console.log(a+b)
// })(5,6)

// function greet(name){
//   console.log("hello",name, "how are you")
//  }

// function hi(){
//   console.log("i am high")
// }
//   greet(hi())

// setTimeout(function() {
//   console.log("here")
// }, 3000);

// function hello(){
//   return 1;
// }
// console.log(hello())

// let c= hello();
// console.log(hello())

// function loginUser(username){
//   setTimeout(()=>{
//     console.log("user logged in",
//       username );
//   return username+"here";
// },1000)
// }
// let a =loginUser();

// console.log(a)

// function loginUser(username,callback){
//   setTimeout(()=>{
//     console.log("fetched user data");
//     usernameHolder({username })
//   },1000)
// }

// loginUser("Nitin",function(a){
//   console.log(a)
// })

// function loginUser(username,usernameHolder){
// setTimeout(()=>{
//     console.log("fetched user data");
//     usernameHolder({username})
// },1000)
// }

// loginUser("Nitin",function(a){
// console.log(a)
// })

// let obj={
//     name:"nitin",
//     sem:8,
//     isPassed:true
// }


// obj.name="rohan"

// obj.new="new value"



// console.log(obj["name"])


// a=10;
// b=90;
// let c= (a==b)?"hi":"hello"


// let a = (true)||(!true)










// let age = Number(prompt("Enter your age"));

// if (age === 18) {

//     let name = prompt("enter your name")
//     if (name === "rohan") {

//         console.log("Can  vote only if rohan")
//     } else {
//         console.log("can not vote we need to check")
//     }
// } else if (age > 18) {
//     console.log("Can vote")
// } else if (age < 18) {
//     console.log("Can't vote")
// } else {
//     console.log("we need to check")
// }

// let day = 4;



// switch (day) {
//     case 1:
//         console.log("monday");
//         break;

//     case 2:
//         console.log("tuesday");
//         break;

//     case 3:
//         console.log("wednesday");
//         break;

//     default:
//         console.log(day);
// }
// let age=89;

// switch (true) {

//     case age > 18:
//         console.log("true here");
//         break;
//     case age >21:
//         console.log("true here 2");
//         break;
//     case age === 18:
//         console.log("true here 3");
//         break;
//     default:
//         console.log("unexpected false");

// }



// let arr= [4,5,"hello",99,true,false,"new here",12,56];


// // let newArr= arr.slice(3,6)

// // console.log(arr);
// // console.log(newArr)

// arr.splice(3,0,"new 1","new 2");
// console.log(arr)


// for (let i=0;i<9;i++){

    
//     console.log(i)
// }
// let i=0;

// while(i<9){

// console.log(i)
// i++;
// }
// let i=0;

// do{
// console.log(i)
// ++i;
// }while(i<9);


// let res=90;
// let guess= Number(prompt("guess"));
// while (guess !== res){
//     console.log("not true");
//     if(guess<res){
//         console.log("guess higher")
//     }else if(guess>res){
//         console.log("guess lower")
//     }
//     guess= Number(prompt("guess"));
// }

// console.log("won")





// let choice;

// do {
//     choice = Number(prompt(`
// 1. View Profile
// 2. Edit Profile
// 3. Exit
// `));

//     console.log("You selected:", choice);

// } while (choice !== 3);

// console.log("Program Closed");
// let arr=[1,9,8,7,11,3,4,4];

// let [x,y]=arr;
// console.log(x)

// let [a,b,c,d,...ar2]=arr

// console.log(ar2)



// let a=90;
// let b=91;


// [a,b]=[b,a]

// let name="Aryan";

// let obj={name}

// console.log(obj.name)
// const user = { name: "Nitin",age: 25, role: "Developer" };

// const { name, ...rest } = user;

// console.log(name); // "Nitin"
// console.log(rest); // { age: 25, role: "Developer" }

// function greet() {
//   console.log("Hello, World!");
// }




// let a = function (){
//     console.log("hello")
// }

// a()


// const add = (a, b) => {
  
//   return a + b;
// };
// console.log(add(3,4))


// let a =()=>{

// }


// (()=> {
//   console.log("This function runs immediately!");
// })();


// (function (a,b){
//     console.log(a+b)
// })(5,6)


// function greet(name){
//     console.log("hello ",name,"how are you")
// }

// function hi(){
//     console.log("i am high")
// }
// greet(hi())


// setTimeout(()=>{
//     console.log("here")
// },3000)

// function loginUsr(username,callback){
//   setTimeout(()=>(
//     console.log("User logged in");
//     callback({username});
//   ), 1000);
// }



// function getUserProfile(user, callback) {
//   setTimeout(() => {
//     console.log("Fetched user profile");
//     callback({ ...user, profile: "Full Profile Data" });
//   }, 1000);
// }

// function getUserPosts(profile, callback) {
//   setTimeout(() => {
//     console.log("Fetched user posts");
//     callback(["Post 1", "Post 2"]);
//   }, 1000);
// }

// function getPostComments(posts, callback) {
//   setTimeout(() => {
//     console.log("Fetched comments for posts");
//     callback(["Nice post!", "Great read!"]);
//   }, 1000);
// }

// loginUse("john",function(user){
//   getUserProfile(user,function(profile){
//     getUserPosts(profile,function(posts){
//       getUserPosts(profile,function(posts){
//         getPostComments(posts,function(comments){
//           console.log("Final Results:",comments);
//         });
//       });
//     });
//   });
// });

// const myPromise = new Promise((resolve , reject)=> {
//   setTimeout (() => {
  //   if(age>18){
  //     resolve("can vote")
  //   }else{
  //     reject("can not vote")
  //   }
  //   },1000);
  // });
  // myPromise
  // .then(result=>console.log(result))
  // .catch(rejection=>console.log(rejection))

  // async function handlePromise(){
  //   try{
  //     const result = await myPromise;
  //     console.log(result);

  //   }catch(error){
  //     console.log (error);
  //   }
  // }
// let arr=[2,3,4,6]
// arr.forEach((element,index,array)=>{
//   console.log(element)
//   console.log(index)
// })

// let students=[
//   {name:"Aryan"},
//   {name:"Keshav"},
//   {name:"Shivansh"}
// ]
// students.forEach(
// (c,i)=>{
//   console.log(c.name)
// }
// )
 // function list(c,i){
// //   console.log(c.name)
// // }
// let c =[3,4,5,9,8]
// let d = c.map((element,index,array)=>{
//   console.log(element)
  
//   return element *=2;
// })
// console.log(d)

// let arr=[2,8,7,6,5,3,2,0]
// let d=arr.filter((c)=>{
//   return c%2===0;
// })
// console.log(d)


 //cart=[{name:"tshirt",size:"m",price:20}]
// const img=document.createElement("img")
// img.setAttribute("src","https://placehold.co/600x400")

// const img = document.createElement("img")
// img.innerHTML
// const list= document.getElementById("list");
// const mango = list.children[1];

// console.log(mango.previousElementSibling);
// console.log(mango.nextElementSibling);
let item1 ="laptop";
let price1 = 50000;
let quantity1 = 1;

let item2 ="mouse";
let price2 = 1000;
let quantity2 = 2;

let item3 = "keyboard";
let price3 = 1500;
let quantity3 = 1;

let cost1 = price1;
let cost2 = price2; 
let cost3 = price3;
let total = cost1 + cost2 + cost3;

console.log("total value of items = " + total);

let total1 = price1 * quantity1;
let total2 = price2 * quantity2;
let total3 = price3 * quantity3;

let grandtotal = total1 + total2 + total3;

console.log("shopping Cart");
console.log("Grand total of items =  " + grandtotal);