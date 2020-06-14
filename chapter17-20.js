// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var Arr=[[]];
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var Arr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// 3. Write a program to print numeric counting from 1 to 10.
for (var input = 1; input <= 10; input++) {
    document.write(input+"<br>");
   }
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

/*5. Write a program to print items of the following array
 using for loop:
 fruits = [“apple”, “banana”, “mango”, “orange”,
 “strawberry”*/

fruits = ["apple”,“banana”,“mango”,“orange”,"strawberry"];

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

const array = [24, 53, 78, 91, 12];

function biggestNumberInArray(arr) {
    let maxNumber;
    for(let i = 0; i < arr.length; i++){
        if(!maxNumber){ // protect against an array of values less than 0
            maxNumber = arr[i];
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
document.write(biggestNumberInArray(array));
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
arr=[24, 53, 78, 91, 12]
function myFunction2() {
    var i = 0;
    var smallestNumber = arr[0];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    document.write(smallestNumber);
}

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
function generateTable()
{
    var myVar = 2;
    var myString = "";
    for (i=1; i<=15; i++) {
    myString += myVar+ " x " +i+ " = " +(myVar*i)+ "<br/>";
    }
    document.write(myString);
    }

