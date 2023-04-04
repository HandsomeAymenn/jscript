function objects1(){
 
//exports.objects1 = function(){

 
    let student = {id : 666 ,name: "zindane",email: "abc@gmail.com"};
    let student1 = {id : 555 ,name: "naren",email:"xyz@gmail.com"};
    let student2 = {};
 
    console.log(student);
    console.log(student1);
    console.log(Object.values(student1));//gets all values of object property
    Object.assign(student1,student2);//copies all object values and ids from student 1 to student 2
    console.log(student2);
}
objects1();

 
//function xyz(param){
//let xyz = (param)=> {
 
 //   let xyz = param=> {
//console.log( "value passed " + param);
 
//}
//let xyz  = () =>{} //if noparams are passed
/*
let xyz = param=>     console.log( "value passed " + param);
 
//arrow functions
   
   


 
function loops(){
 
    let x = 0;
    while (x < 10){
 
        console.log("Hello Dears");
        x++;
       
 
    }
 
    let fruits = ["apple","Banana","oranges"];
 
    for (x in fruits){//optimised loop for arrays
        console.log(fruits[x]);
    }
   fruits.push("chicken");//pls try and check what happens
   
     console.log(fruits);
}
//loops();
///xyz("test");
//objects1();*/
