// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var integer_1,integer_2;
integer_1=parseInt(prompt("Enter first integer"));
integer_2=parseInt(prompt("Enter second integer"));
if(integer_1>integer_2){
    alert("The larger integer is "+integer_1);
    
}

else if(integer_2>integer_1){
    alert("The larger integer is "+integer_2);
    
}
                                            
else {
    alert("Both the integers are equal");

}
// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 

// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
 
//6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }
 
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 