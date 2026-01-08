
 // Problem 1: Reverse a String

 let str1 = "hello";

 let reversed = "";

  for (let i = str1.length - 1; i >= 0; i--) {
  reversed = reversed + str1[i];
 }

 console.log(reversed); 
 //Output will be : olleh

 

  // Problem 2: Count Vowels in a string

   let str2 = "programming";
   let vowels = "aeiou";
  let count = 0;

 for (let i = 0; i < str2.length; i++) {
  let ch = str2[i].toLowerCase();
  if (vowels.includes(ch)) {
    count++;
  }
 }

 console.log(count); 
 //Output will be 3

   
// Problem 3: Check for Palindrome

  let str3 = "madam";
  let revStr = "";

 for (let i = str3.length - 1; i >= 0; i--) {
  revStr = revStr + str3[i];
 }

  if (str3 === revStr) {
    console.log(true);
 } 
   else {
  console.log(false);
 }


 // Problem 4:  Find the Maximum Number

 let numbers = [5, 1, 9, 3];
 let max = numbers[0];

 for (let i = 1; i < numbers.length; i++) {
   if (numbers[i] > max) {
    max = numbers[i];
   }
 }

console.log(max); 
// Output will  be  9


// Problem 5: Remove Duplicates from an array

   let arr1 = [1, 2, 2, 3, 4, 4];
   let uniqueArr = [];

   for (let i = 0; i < arr1.length; i++) {
    if (!uniqueArr.includes(arr1[i])) {
    uniqueArr.push(arr1[i]);
   }
 }

console.log(uniqueArr);
 //output will be [1,2,3,4]


//Problem 6 : Sum of All Numbers in an Array


  let arr2 = [1, 2, 3, 4];
  let sum = 0;

  for (let i = 0; i < arr2.length; i++) {
  sum = sum + arr2[i];
 }

 console.log(sum); 
  // output will be 10

  //Problem 7:Find Even Numbers in an Array

   let arr3 = [1, 2, 3, 4, 5, 6];
   let evenNumbers = [];

  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
    evenNumbers.push(arr3[i]);
    }
  }

 console.log(evenNumbers);
  // Output will be :[2,4,6]

// Problem 8: Capitalize Words

  let sentence = "hello world";
   let words = sentence.split(" ");
   let newSentence = [];

 for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capWord = word[0].toUpperCase() + word.slice(1);
   newSentence.push(capWord);
   }

 console.log(newSentence.join(" ")); 
 //Output will be : Hello World

