/*1. Declare a variable called age & assign to it your age. Show your age in an alert box.*/
var age;
age=10;
alert("I am "+ age +" years old");

/*2.Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.*/
var visited="20";
alert ("you have visited this site "+visited+" times");

/*3.Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/
var birthYear;
birthYear=1901;
document.write('My birth year is '+ birthYear+"</br>"+"Data type of my declared variable is "+typeof(birthYear));

/*4.A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
var visitors_name;
var Product_title;
var Quantity;
visitors_name=window.prompt('type your name').toUpperCase();
Product_title=window.prompt('write your needed product');
Quantity=window.prompt('how much quantity you needed'); 
document.write("</br>"+visitors_name+" "+"ordered "+Quantity+" "+Product_title+"s"+" from XYZ Clothing store");

