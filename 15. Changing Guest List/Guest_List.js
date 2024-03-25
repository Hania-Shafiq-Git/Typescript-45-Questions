"use strict";
let Guest_List = ['Eman Fatima', 'Fatima Salman', 'humda Babar'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n!');
}
let absent_Guest = ' Eman Fatima';
let new_Guest = 'Adeena Rashid';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(` Mr. ${absent_Guest} is not coming to te party.`);
