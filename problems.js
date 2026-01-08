
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


