console.log("Hello world")

// ----prompt method-----
// let a = prompt("Enter Your Name")
// console.log(a);
// let name ="   Atul Demond    "

// ----------------trim method ----------
// // console.log(name.trim());
// console.log(name.trim())
// let pass = prompt("Enter Your Password");
// let newpass =pass.trim(); 
// console.log(newpass);

// --------------------------touppercase and lowercase----
// let a ="atul demond"
// console.log(a.toUpperCase());
// let b = "ATUL Demond"
// console.log(b.toLowerCase());

//----------------indexof--------------------
// let a = "mynameisatul";
// let value = a.indexOf("atul");
// console.log(value)

// --------------method channing ------------
// let a = " My Name is Atul Demond  "
// let value  = a.toLowerCase().trim();
// console.log(value);

// ----------------slice method -----------
// let a ="Atul Demond";
// let value = a.slice(0,4);
// console.log(value);

//------------replcae method --------------------
// let a = "atul Demond";
// let value = a.replace("atul","Sumit");
// console.log(value);

//-------------------repeat method-----------
// let a = "Atul Demond";
// let value = a.repeat(2);
// console.log(value);

//----------ARRAYS---------------------------

// let student = ["atul", "rohan", "mohan"];

// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log("length of this Array is =>"+" "+ student.length )

// for (let students of student) {
   
//     console.log(students)
//     console.log(students.length)
// }


// //---------------changing value in arrays-----------

// let fruit = ["apple" , "mango" , "grapes"];
// fruit[0]="ornage";
// for (let fruits of fruit) {
//   console.log(fruits)   
// }

//----------------push method-------------
//  let name=["atul","sumit","rahul","mohan","harsh"];
//  name.push("prince"); ///adding prince at last elements 
//  for (let names of name) {
//     console.log(names)  
//  }

//-------------------pop method------------------
// let name2 =["ratnesh" ,"anup", "bobby"];
// let finalvalue = name2.pop()
// console.log("using pop remove last elements :: "+finalvalue)
// console.log(name2)

//----------------------shift method---------------
// let name=["atul" , "sumit" ,"prince"]
// let value = name.shift();//deleting element from first 
// console.log(value);

//------------------------unshift method-------------
// let name = ["rahul", "sohan " , "ratnesh"];
// name.unshift("Atul Demond");//insetting in first index in arrays
// for (const names of name) {
//     console.log(names)
// }
 
//----------------------indedxof method ----------------------
// let name=["atul","rahul","mohan"];
// console.log(name.indexOf("rahul")); //1 returnig -1 if not in array


//------------------includes method--------------

// let name = [ "atul", "mohan ", "sohan "];
// console.log(name.includes("atul"))//returnig of true or false

//-------------concatination in arrays --------------

// let a = ["1name ","2 name", "3rd name"]
// let b = ["4th name ", "5th name "]
// let c = a.concat(b);
// for (let as of c) {
//     console.log(as)
// }

//--------------------reversing value of arrays -------------

// let name =["atul", "anup", "ratnesh"];
// let value = name.reverse();

// for (const values of value) {
    
//     console.log(values)
// }

//-----------------------slice method in arrays ---------------

// let name = ["atul ", "mohan ", "ratnesh"];
// let value = name.slice(0,2);
// for (let values of value) {
//     console.log(values)
// }

//--------------------SPLICE method --------------
// let car = ["audi","bmw","benz","lamborhghini"];
// car.splice(0,2,"toyota","xuc300");
//  for (const cars of car) {
//     console.log(cars)
//  }

//--------------sort method in arrays--------------
// let car = ["audi", "bmw", "xuv","benz" ];
// car.sort()//arrange in acesnding order
// for (let cars of car) {
//     console.log(cars)
// }

// let num = [54, 23, 1, 200]
// num.sort();// wen connot use in number
// for (const nums of num) {
//     console.log(nums)
// }