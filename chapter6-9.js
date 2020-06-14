// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// 3. Write a program that takes input a name from user &
// greet the user.
function myFunction() {
    var person = prompt("Please enter your name", "Dear");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }

// 4.

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
function printTable(){
    var num;
   
    num=Number(document.getElementById('txtNumber').value);
    if (num!= null){
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num*i) + "<br/>" 
    }
}
}



// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)



