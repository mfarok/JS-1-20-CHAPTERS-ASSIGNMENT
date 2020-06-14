/**********************CHAPTER NO. 2 START ****************** /
QUESTION NO.1:Declare a variable called username. */

var username;

/*QUESTION NO.2:Declare a variable called myName & assign to it a string that represents your Full Name*/
var myName="arsalan";

/*QUESTION NO.3(a):Write script to 
a) Declare a JS variable, titled message.*/

var message;
/*b) Assign “Hello World” to variable message*/
message="Hello World";

/*c) Display the message in alert box.*/
alert(message); 

/*QUESTION NO.4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. */
student_name=window.prompt('Write your name');
student_age=window.prompt('How old are you');
student_profession=window.prompt('Write your profession');
alert(student_name);
alert(student_age);
alert(student_profession);

/*QUESTION NO.5:Write a script to display the following alert using one JS variable: */
/*PIZZA*/
/*PIZZ*/
/*PIZ*/
/*PI*/
/*P*/

var food="PIZZA";

alert(food.slice(0,food.length)+"\r\n"+(food.slice(0,food.length-1)+"\r\n"+(food.slice(0,food.length-2)+"\r\n"+(food.slice(0,food.length-3)+"\r\n"+(food.slice(0,food.length-4))))));




/*QUESTION NO.6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) */

var email;
email="example@example.com";
alert("My email address is " +email);

/*QUESTION NO.7:Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: */
var book;
book="A smarter \nway to learn javascript";
alert('I am trying to learn from the book '+book)

/*QUESTION NO.8:Write a script to display this in browser through JS */

document.write('Yah I can write HTML content through Javascript')   ;

/*QUESTION NO.9:Store following string in a variable and show in alert and browser through JS */
alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”')

/**********************CHAPTER NO. 2 END ******************/
