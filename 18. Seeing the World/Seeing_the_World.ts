// Store the location in a aray. Make sure the array is not in aplphabatical order.
let places : string[] = ['Itlay','Germany','Agra','Eifel tower','Dubai'];
//Print your array in its original order.
console.log('original' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('Copy' + [ ...places].sort());
//Show that your array still in its original order by printing it.
console.log('original' + places);
//print your array in reverce alphabetical orer without changing the order of the original list.
console.log('Copy' + [...places].sort().reverse());
//Show that your array still in its original order by printing itagain.
console.log('original' + places);
//Reverse the order of your list.print the array to show that its order has changed.
console.log('original' + places.reverse());
//Reverse the order of your list again.print the array to show it's back to its original order.
console.log('original' + places.reverse());
//Sort your array so it's stored in alphabetical order. Print the array to show that its orderhas been changed.
console.log('original' + places.sort());
//Sort to changed your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original' + places.sort().reverse());