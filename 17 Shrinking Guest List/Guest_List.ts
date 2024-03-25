let Guest_List :string[] = ['Eman Fatima','Fatima Salman','humda Babar']
// for (let i = 0; i < Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n!');
//}n
let absent_Guest :string =  ' Eman Fatima' ;
let new_Guest :string = 'Adeena Rashid' ;
Guest_List[0] = new_Guest ;
//for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

//}
console.log(` Mr. ${absent_Guest} is not coming to te party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.')
// array me 3 guest add kiye hen
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2,0, 'Zainab Ansari');
Guest_List.push('Aaish Ansari');
//yhan pr men 6 guest k array ko print krwaya he.
for(let i=0; i<Guest_List.length; i++){console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}
//Sorry Messege to guest for not inviting.
console.log("\nSorry we can not arrange big table, only two peoples will be ivited.");
//yhan mene guest remove kiye hen.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
//hamre bache hue 2 invited guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}
//mene sare guest array se remove krdiye
Guest_List.splice(0, 2)
console.log(Guest_List);