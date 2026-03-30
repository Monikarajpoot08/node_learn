/*console.log("Server is starting...")
console.log("Loading configurations...")*/



/*function add(a, b) {
    return a + b;
}
result=add(5, 15);
console.log("The result of addition is: " + result);
*/


//another way to write functions in js
/* var add=function(a, b) {
    return a + b;
}

result=add(5, 15);
console.log("The result of addition is: " + result);*/

//another way to write functions in js - arrow function
/* var add=(a, b) => {  return a + b;}
var result=add(5, 1);
console.log("The result of addition is: " + result);*/
 
//single line arrow function
/* var add=(a, b) => a + b;
var result=add(5, 3);
console.log("The result of addition is: " + result);*/

//5th way
/*(function(){
    console.log("monika  ji")
}

)(); 

*/

//callback function (a function passed as an argument to another function)
//callback function is executed after the completion of the main func

/* 1st way 
function callback(){
    console.log("adding is successfully completed");

}

const add=(x, y, callback) => {
    var result=x + y;
    
    console.log("The result of addition is: " + result);
    callback();
}
add(10, 20, callback);*/

//2nd way using inline function
/*
const add=(x, y, callback) => {
    var result=x + y;
    console.log("The result of addition is: " + result);
    callback();
}

add(10,20,() => {console.log("adding is successful");})
*/

//NODE JS BUILT IN MODULES

// in this we learn about built in modules present in node js
// using FS and OS modules
/*so before using the modules we have to impot the modules in our
file */
//it is the way to import the built in modules
/*var fs = require("fs");
var os = require("os");*/
//using OS library
//within these modules there are many methods present
// using os.userInfo[options]  ....(you can check this function in nodejs documentation)
//to get the information about the current user

/*var user = os.userInfo();
console.log(user);
console.log(user.gid);
console.log(user.uid);  
console.log(user.username);
console.log(user.homedir);
console.log(user.shell);
*/



//using FS module (file system)
//using fs.writeFileSync() method to create a new file
//fs.writeFileSync("monika.txt", "This is monika here");
//using a function to give mesg to the user  using 
//fs.appendFile() method

/*fs.appendFile('greeting.txt','Hi '+user.username + '! \n', () => {
    console.log('greetings file is created successfully');
});
//reading the content of the file using fs.readFileSync() method
var content = fs.readFileSync('greeting.txt', 'utf8');
console.log(content);
*/

/*to know abt the functionality of os
console.log(os)*/

/*similaraly to know abt the functionality of fs
console.log(fs)*/

//import files in node js
/*const notes = require("./notes.js");
console.log("server file is available now");
var age=notes.age;
var result=notes.addNumber(30, 10);
console.log('the result of subtraction is: ' + result);
console.log('age is: ' + age);

var _ = require('lodash');
//lodash helps to settle the data ( how to deal with data)
var data=[ 44,'mona', 44,'name', 'mona', 90, 'name', 90];
console.log('original data is: ' + data);
var filter = _.uniq(data);
console.log('filtered data is: ' + filter);
var remove=_.remove(data);
console.log('original data after remove is: ' + data);

console.log('removed data is: ' + remove);


console.log(_.isString('monika'));
console.log(_.isString(1234)); */

// -------------------------------------------------

// LECTURE 3: 
// conversion of json to object and object to json

//1) json to object
/*const jsonString = '{"name":"monika","age":25,"city":"pune"}';
console.log('Original JSON string:');
console.log(jsonString);
const jsonObject = JSON.parse(jsonString);
console.log('JSON to Object conversion:');
console.log(jsonObject);
//type of json
console.log(typeof jsonString);
*/



//2) object to json
/*const objectData = { 
    name: 'monika',
     age: 25,
      city: 'pune' 
    };
console.log('Original Object:');
console.log(objectData);
const objectToJson = JSON.stringify(objectData);
console.log('Object to JSON conversion:');
console.log(objectToJson);
*/