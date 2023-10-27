/*const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!")*/

/*the initial code was not programmed to filter the output should "nickname" be present or not present, 
and should both nickname and firstname not present*/ 

const nickname= "Timmy";
const firstname = "Timothy";

if(nickname !== null){
    console.log(`Good Morning, ${nickname}`)
}
else if(nickname === null){
    console.log(`Good Morning, ${firstname}`)
}

if(nickname === null && firstname === null){
    console.log(`Good Morning`)    
}