//import files in node js
console.log("node page is loaded");
var age=25;
var name="monika";
exports.age=age;
exports.name=name;
function addNumber(n1,n2){
    console.log("addition is : " , n1+n2);
}
exports.addNumber=addNumber;

//you can also export using this way
/* module.exports.age=age;
module.exports.name=name; */


