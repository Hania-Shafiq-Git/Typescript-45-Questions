
//Equality and Inequality Test 1
console.log("Equality test with strings: ","Apple" === "Apple");
//Equality and Inequality Test 2
console.log("Equality test with strings: ",("Apple" as string) != "orange");
//Tests using the lower case function
console.log("Lower Case function test: ","HELLO".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equality test with numbers:",34 ===34);
//Numerical tests involving  inequality
console.log("Inequality test with numbers:",(34 as number) != 43);
//greater than test
console.log("Greater than test:" ,8 > 5);
//less than and test
console.log("Greater than test:" ,5 < 8);


//greater than and equal to
console.log("Greater than and equal to test:",12 >= 12);
//Less than or equal to
console.log("Less than or equal to test: " ,5 <= 9);
//tests using "and" and "or"operator
console.log("And operator test:",5===5 && 10 > 5);
//tests using  "or"operator
console.log("or operator test:",5===5 || false);
//test wheather an item is in a array
const fruits :string[] =['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));
//test wheather an item is not in a array

console.log('Test "Apple" is not in the array:', !fruits.includes("Apple"));


