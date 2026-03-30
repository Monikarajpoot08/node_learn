console.log("hi monika keep doing like this")
// in this we learn about built in modules present in node js
// using FS and OS modules
/*so before using the modules we have to impot the modules in our
file */
//it is the way to import the built in modules
var fs = require("fs");
var os = require("os");

//using OS library
//within these modules there are many methods present
// using os.userInfo[options]  ....(you can check this function in nodejs documentation)
//to get the information about the current user
var user = os.userInfo();
console.log(user);
