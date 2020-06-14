/*1. Write a program to take “city” name as input from user. If
user enter1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”s “Karachi”, welcome the user like this:
“Welcome to city of lights”*/

var city_name=prompt("In which city do you live").toUpperCase();
if (city_name==="KARACHI"){
alert("Welcome to the city of lights");
}
;

/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.*/

var gender=prompt("Enter your gender").toLowerCase();
if (gender==="male"){
    alert("Good Morning Sir");
}
else if (gender==="female"){
    alert("Good Morning Ma’am");
}

else {
    alert("Please type correct gender");
}


/*3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/

var signal_color=prompt("write color of traffic signal").toLowerCase();
if (signal_color==="red"){
    alert("Must stop");
}
else if (signal_color==="yellow"){
    alert("Ready to move");
}
else if (signal_color==="green"){
    alert("Move now");
}

/*4. Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/

var remaining_fuel = prompt("Write the remaining fuel of your car in litres");
if (remaining_fuel<0.25){
    alert("Please refill the fuel in your car");
}

/*Run this script, & check whether alert message would be
displayed or not. Record the outputs.*/
/*a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}*/
/*given condition for variable a is true*/

/*b.var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
/*no message*/

/*c.*/
/*var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }*/

    /*condition 2 is true*/
    /*condition 4 is true*/


/*d.*/
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    /*The cost equals*/

/*e.*/
 /*   if (true){
        alert("True");
        }
        if (false){
        alert("False");
        }
*/
        /*True*/



/*f.*/
/*if("car" < "cat"){
    alert("car is smaller than cat");
    }
    */
   /*car is smaller than cat*/

   /*6.Write a program to take input the marks obtained in three
   subjects & total marks. Compute & show the resulting
   percentage on your page. Take percentage & compute
   grade as per following table:*/

   var marks_in_english,marks_in_urdu,marks_in_maths,marks_obtained,total_marks,percentage,Grade,Remarks;
   marks_in_english=parseInt(prompt("Enter your marks in english"));
   marks_in_urdu=parseInt(prompt("Enter your marks in urdu"));
   marks_in_maths=parseInt(prompt("Enter your marks in maths"));
   marks_obtained=marks_in_english+marks_in_urdu+ marks_in_maths;
   total_marks = 300;
   percentage=marks_obtained/total_marks*100;
if(percentage>=80){
    Grade="A1";
    Remarks="Excellent";
}
else if (percentage>=70){
    Grade="A";
    Remarks="Good";
}
else if (percentage>=60){
    Grade="B";
    Remarks="You need to improve";
}
else{
    Grade="Fail";
    Remarks="Sorry";
}
document.write("<h1>Marks Sheet</h1>"+"</br>"+"Total Marks: "+total_marks+"</br>"+"Marks obtained: "+marks_obtained+"</br>"+"Percentage: "+percentage+"</br>"+"Grade: "+Grade+"</br>"+"Remarks: "+Remarks);


/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

/*8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.*/

/*
9. Write a program that checks whether the given input is an
even number or an odd number.*/
var num_check = parseInt(prompt("Enter a number of your choice"));
if(num_check%2 ==0){      
  
    //do something;
    alert('number is Even');  

  }else{

    //do otherwis;
    alert('number is Odd');

  }

/*10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/
var temperature=parseInt(prompt("Enter temperature"));
if (temperature>40){
    alert("It is too hot outside.");
}    

else if (temperature>30){
    alert("The Weather today is Normal.");
}    

else if (temperature>20){
    alert("Today’s Weather is cool.");
}    

else if (temperature>10){
    alert("OMG! Today’s weather is so Cool.");
}    

/*11.Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
}