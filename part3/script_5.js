//Explain Why the Code is blasted and how to diffuse it and get diffused

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")  }
else
{
  console.log("Diffused") 
}


//solution

//"2">"12" returns true value because system converts string value into integer value and compares it.Since a is true then the code will execute "if with true condtion" hence code will be blasted

//diffusing: Just remove string which will compare 2>12 which will return false value of "a" and "if condition with false" is executed