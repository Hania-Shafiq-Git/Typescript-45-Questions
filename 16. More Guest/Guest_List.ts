let Guest_List :string[] = ['Eman Fatima','Fatima Salman','humda Babar']
// for (let i = 0; i < Guest_List.length; i++) {
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n!');
//}n
let absent_Guest :string =  ' Eman Fatima' ;
let new_Guest :string = 'Adeena Rashid' ;
Guest_List[0] = new_Guest ;
for(let i=0; i<Guest_List.length; i++){console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}
console.log(` Mr. ${absent_Guest} is not coming to te party.`);
console.log('Good News! We find big table so we are inviting 3 more guests.')
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2,0, 'Zainab Ansari');
Guest_List.push('Aaish Ansari');
for(let i=0; i<Guest_List.length; i++){console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}