//Whats the msg printed and why?

var lemein = "0";
var lemeout = 0 ;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

//output : "hi"

//solution: lemeout is 0 which is taken a False in boolean so only"hi" is printed