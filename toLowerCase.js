

const userName = 'blackPink';
const userInput = 'blackpinK';
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log("valid");
}
else{
    console.log("unvalid");
}